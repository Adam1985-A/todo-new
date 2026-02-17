import AuthService from "../services/auth.service.js";
import type { Request, Response } from "express";

export default class AuthController {
  constructor() {
    this.service = new AuthService();

    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }
    private service: AuthService; 

  async register(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body;
      const newUser = await this.service.register(email, password);
      return res.status(201).json(newUser);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "An unknown error occurred";
      return res.status(500).json({ message });
    }
  }
  async login(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body;
      if(!email || !password){
        return res.status(400).json({ message: "Email and password are required" });
      }
      const token = await this.service.login(email, password);
      return res.status(200).json({token});
    }catch (error: unknown) {
      const message = error instanceof Error ? error.message : "An unknown error occurred";
      return res.status(401).json({ message });
    }
}
};