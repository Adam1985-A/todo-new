var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { TodoEntity } from "./todo.entity.js";
let UserEntity = class UserEntity {
    id;
    email;
    password;
    createdAt;
    updatedAt;
    todos;
};
__decorate([
    PrimaryGeneratedColumn()
], UserEntity.prototype, "id", void 0);
__decorate([
    Column({ type: "varchar", unique: true })
], UserEntity.prototype, "email", void 0);
__decorate([
    Column({ type: "varchar" })
], UserEntity.prototype, "password", void 0);
__decorate([
    Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
], UserEntity.prototype, "createdAt", void 0);
__decorate([
    Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
], UserEntity.prototype, "updatedAt", void 0);
__decorate([
    OneToMany(() => TodoEntity, (todo) => todo.user)
], UserEntity.prototype, "todos", void 0);
UserEntity = __decorate([
    Entity()
], UserEntity);
export { UserEntity };
export default UserEntity;
//# sourceMappingURL=user.entity.js.map