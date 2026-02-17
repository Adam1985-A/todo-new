import { AppDataSource } from "../database/data-source.js";
import { TodoEntity } from "../entity/todo.entity.js";

export class TodoService {
  private todoRepository = AppDataSource.getRepository(TodoEntity);

  async getTodos(userId: number) {
    return this.todoRepository.find({ 
      where: { user: { id: userId } }
     });
  }

  async createTodo(payload: any, userId: number) {
    const newTodo = this.todoRepository.create({ ...payload, user: { id: userId } });
    return this.todoRepository.save(newTodo);
  }

  async getTodoById(id: number) {
    const todo = await this.todoRepository.findOne({
       where: { id }
       });
    if (!todo){
       throw new Error("Todo not found");
    }
    return todo;
  }

  async updateTodo(id: number, payload: any) {
    const todo = await this.getTodoById(id);
    Object.assign(todo, payload);
    return this.todoRepository.save(todo);
  }

  async deleteTodo(id: number) {
    const todo = await this.getTodoById(id);
    await this.todoRepository.remove(todo);
    return { message: "Todo deleted successfully" };
  }
}
export default TodoService;