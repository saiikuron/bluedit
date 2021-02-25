import { __prod___ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
  },
  entities: [Post],
  dbName: "bluedit",
  type: "postgresql",
  password: "M4r$-per5ever3nCe",
  debug: !__prod___,
} as Parameters<typeof MikroORM.init>[0];
