import { User } from "../entities/User";
import { MyContext } from "../types";
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Resolver,
} from "type-graphql";
import argon2 from "argon2";

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
  @Mutation(() => userResponse)
  async register(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { em }: MyContext
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
    const user = em.create(User, {
      username: options.username,
      password: hashedPassword,
    });
    try {
      await em.persistAndFlush(user);
    } catch (err) {
      if (err.code === "23505" || err.detail.includes("already exists")) {
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

    return { user };
  }

  @Mutation(() => userResponse)
  async login(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { em }: MyContext
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
    return { user };
  }
}
