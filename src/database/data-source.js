import "reflect-metadata";
import { DataSource } from "typeorm";
import { UserEntity } from "../entity/user.entity.js";
import { TodoEntity } from "../entity/todo.entity.js";
const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    username: "postgres",
    password: "saidat1985",
    database: "todo-new",
    synchronize: true,
    logging: false,
    entities: [UserEntity, TodoEntity], // ✅ key fix
    migrations: [],
    subscribers: [],
});
export default AppDataSource;
//# sourceMappingURL=data-source.js.map