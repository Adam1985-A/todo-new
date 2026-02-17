import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { UserEntity } from "./user.entity.js";

@Entity()
export class TodoEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar" })
  title!: string;

  @Column({ type: "boolean", default: false })
  completed!: boolean;

  @ManyToOne(() => UserEntity, (user) => user.todos, { onDelete: "CASCADE" })
  user!: UserEntity;
}

export default TodoEntity;