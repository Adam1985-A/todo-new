import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../database/data-source.js";
import { UserEntity } from "../entity/user.entity.js";
export class AuthService {
    get userRepository() {
        return AppDataSource.getRepository(UserEntity);
    }
    async register(email, password) {
        const existingUser = await this.userRepository.findOne({
            where: { email }
        });
        if (existingUser) {
            throw new Error("User already exists");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = this.userRepository.create({ email, password: hashedPassword });
        return this.userRepository.save(newUser);
    }
    async login(email, password) {
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user) {
            throw new Error("Invalid email or password");
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid credentials");
        }
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        return { token };
    }
}
export default AuthService;
//# sourceMappingURL=auth.service.js.map