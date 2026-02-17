import "reflect-metadata";
import { DataSource } from "typeorm";
import { UserEntity } from "../entity/user.entity.js";
import { TodoEntity } from "../entity/todo.entity.js";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  username: "postgres",
  password: "saidat1985",
  database: "todo-new",
  synchronize: true,
  logging: false,
  entities: [UserEntity, TodoEntity],
  migrations: [],
  subscribers: [],
});

export default AppDataSource;
