import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { CreateTaskInput, UpdateTaskInput } from './dto';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async create(createTaskInput: CreateTaskInput) {
    return this.taskRepository.createTask(createTaskInput);
  }

  async findAll() {
    const tasks = await this.taskRepository.getTasks();
    if(!tasks?.length) {
      throw new HttpException('No tasks found', HttpStatus.NOT_FOUND);
    }
    return tasks;
  }

  async findOne(id: string) {
    const task = await this.taskRepository.getTaskById(id);
    if(!task) {
      throw new HttpException('No task found', HttpStatus.NOT_FOUND);
    }
    return task;
  }

  async update(id: string, updateTaskInput: UpdateTaskInput) {
    await this.findOne(id);
    return this.taskRepository.updateTask(id, updateTaskInput);
  }

  async remove(id: string) {
    await this.taskRepository.deleteTask(id);
  }
}
