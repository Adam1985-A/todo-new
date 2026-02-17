import { EntitySchema } from "typeorm";
export declare const TodoEntity: EntitySchema<{
    id: Number;
    title: string;
    description: string;
    completed: Boolean;
    createdAt: "timestamp";
    updatedAt: "timestamp";
}>;
export default TodoEntity;
//# sourceMappingURL=todo.entity.d.ts.map