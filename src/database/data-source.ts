import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();
import { DataSource } from "typeorm";
import { UserEntity } from "../entity/user.entity.js";
import { TodoEntity } from "../entity/todo.entity.js";


const databaseUrl = process.env.DATABASE_URL; //Production ready

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not defined");
}

export const AppDataSource = new DataSource({
  type: "postgres",
  url: databaseUrl,
  synchronize: true,
  logging: false,
  ssl: process.env.NODE_ENV === "production"
   ? { rejectUnauthorized: false } 
   : false,
  entities: [
    process.env.NODE_ENV === "production"
      ? "dist/entity/*.js"
      : "src/entity/*.ts",
  ],
  migrations: [],
  subscribers: [],
});

export default AppDataSource;
