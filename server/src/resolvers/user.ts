import { User } from "../entities/User";
import { MyContext } from "../types";
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import argon2 from "argon2";
import "express-session";
import { EntityManager } from "@mikro-orm/postgresql";

declare module "express-session" {
  interface SessionData {
    userId?: number;
  }
}

@InputType()
class UsernamePasswordInput {
  @Field()
  username: string;
  @Field()
  password: string;
}

@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class userResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[]; //        ?: = indefined

  @Field(() => User, { nullable: true })
  user?: User; //        ?: = indefined
}

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() { req, em }: MyContext) {
    if (!req.session.userId) {
      // you are not logged in
      return null;
    }
    const user = await em.findOne(User, { id: req.session.userId });
    return user;
  }

  @Mutation(() => userResponse)
  async register(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { em, req }: MyContext
  ): Promise<userResponse> {
    if (options.username.length < 2) {
      return {
        errors: [
          {
            field: "Username",
            message: "The username is too short",
          },
        ],
      };
    }
    if (options.password.length < 2) {
      return {
        errors: [
          {
            field: "Password",
            message: "The password is too short",
          },
        ],
      };
    }
    const hashedPassword = await argon2.hash(options.password);
    let user;

    try {
      const result = await (em as EntityManager)
        .createQueryBuilder(User)
        .getKnexQuery()
        .insert({
          username: options.username,
          password: hashedPassword,
          created_at: new Date(),
          updated_at: new Date(),
        })
        .returning("*");
      user = result[0];
    } catch (err) {
      if (err.detail.includes("already exists")) {
        return {
          errors: [
            {
              field: "Username",
              message: "Username already taken",
            },
          ],
        };
      }
    }
    req.session.userId = user.id; // will auto loggin the registered user
    return { user };
  }

  @Mutation(() => userResponse)
  async login(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { em, req }: MyContext
  ): Promise<userResponse> {
    const user = await em.findOne(User, { username: options.username });
    if (!user) {
      return {
        errors: [
          {
            field: "Username",
            message: "That username doesn't exist",
          },
        ],
      };
    }
    const valid = await argon2.verify(user.password, options.password); // user.password: entered by the user; options.password: password stored in the db
    if (!valid) {
      return {
        errors: [
          {
            field: "Password",
            message: "Incorrect password",
          },
        ],
      };
    }
    req.session.userId = user.id;
    return { user };
  }
}
