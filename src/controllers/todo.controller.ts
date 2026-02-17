import  TodoService  from "../services/todo.service.js";
import type { Request, Response } from "express";

export default class TodoController {
  private service: TodoService;

  constructor() {
     this.service = new TodoService();

     this.getAllTodos = this.getAllTodos.bind(this);
     this.getTodo = this.getTodo.bind(this);
     this.createTodo = this.createTodo.bind(this);
     this.updateTodo = this.updateTodo.bind(this);
     this.deleteTodo = this.deleteTodo.bind(this);

  }
  async getAllTodos(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as Request & { userId: number }).userId;
      const todos = await this.service.getTodos(userId);
     return res.status(200).json(todos);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "An unknown error occurred";
     return res.status(500).json({ message });
    }
  }

  async getTodo(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id);
    
      const todo = await this.service.getTodoById(id);
      if(todo){
        return res.status(200).json(todo);
      }else{
        return res.status(404).json({ message: "Todo not found" });
      }
      
    } catch (error: unknown) {
      const message = error instanceof Error  ? error.message : "An unknown error occured";
      return res.status(500).json({ message });
    }
  }

  async createTodo(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as Request & { userId: number}).userId;
      const payload = req.body;

      const newTodo = await this.service.createTodo(payload, userId);
      return res.status(201).json(newTodo);

    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "An unknown error occured";
      return res.status(500).json({ message });
    }
  }

  async updateTodo(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id);
      const payload = req.body;

      const updatedTodo = await this.service.updateTodo(id, payload);
      if(updatedTodo){
        return res.status(200).json(updatedTodo);
      }else{
        return res.status(404).json({ message: "Todo not found" });
      }
    
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "An unknown error occured";
      return res.status(500).json({ message });
    }
  }

  async deleteTodo(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id);
      const deleteTodo = await this.service.deleteTodo(id);
      if(deleteTodo){
        return res.status(200).json(deleteTodo);
      }else{
        return res.status(404).json({ message: "Todo not found" });
      }
      
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "An unknown error occured";
     return res.status(500).json({ message });
    }
  }
}; 


