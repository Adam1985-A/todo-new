import { EntitySchema } from "typeorm";
declare const UserEntity: EntitySchema<{
    id: Number;
    email: string;
    password: string;
    createdAt: "timestamp";
    updatedAt: "timestamp";
}>;
export default UserEntity;
//# sourceMappingURL=user.entity.d.ts.map