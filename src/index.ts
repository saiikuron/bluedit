import { MikroORM } from "@mikro-orm/core";
import { __prod___ } from "./constants";
import { Post } from "./entities/Post";
import mikroConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);
  await orm.getMigrator().up();

  // create
  /* const post = orm.em.create(Post, { title: "this is a title" });
  await orm.em.persistAndFlush(post); */

  /// display
  const post = await orm.em.find(Post, {});
  console.log(post);
};

main().catch((err) => {
  console.error(err);
});
