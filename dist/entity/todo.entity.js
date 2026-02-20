var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { UserEntity } from "./user.entity.js";
let TodoEntity = class TodoEntity {
    id;
    title;
    description;
    completed;
    createdAt;
    updatedAt;
    user;
};
__decorate([
    PrimaryGeneratedColumn()
], TodoEntity.prototype, "id", void 0);
__decorate([
    Column({ type: "varchar" })
], TodoEntity.prototype, "title", void 0);
__decorate([
    Column({ type: "text", nullable: true })
], TodoEntity.prototype, "description", void 0);
__decorate([
    Column({ type: "boolean", default: false })
], TodoEntity.prototype, "completed", void 0);
__decorate([
    Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
], TodoEntity.prototype, "createdAt", void 0);
__decorate([
    Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
], TodoEntity.prototype, "updatedAt", void 0);
__decorate([
    ManyToOne(() => UserEntity, (user) => user.todos, { onDelete: "CASCADE" })
], TodoEntity.prototype, "user", void 0);
TodoEntity = __decorate([
    Entity()
], TodoEntity);
export { TodoEntity };
export default TodoEntity;
//# sourceMappingURL=todo.entity.js.map