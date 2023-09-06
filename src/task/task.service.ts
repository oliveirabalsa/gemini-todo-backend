import { Injectable } from '@nestjs/common';
import { TaskRepository } from './task.repository'; 
import { CreateTaskInput, UpdateTaskInput } from './dto';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async create(createTaskInput: CreateTaskInput) {
    return this.taskRepository.createTask(createTaskInput);
  }

  async findAll() {
    return this.taskRepository.getTasks();
  }

  async findOne(id: string) {
    return this.taskRepository.getTaskById(id);
  }

  async update(id: string, updateTaskInput: UpdateTaskInput) {
    return this.taskRepository.updateTask(id, updateTaskInput);
  }

  async remove(id: string) {
    await this.taskRepository.deleteTask(id);
    return "Task deleted successfully"
  }
}
