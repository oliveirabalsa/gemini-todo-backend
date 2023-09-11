import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateTaskInput, UpdateTaskInput } from './dto';
import { TaskStatus } from './types/task.enum';

@Injectable()
export class TaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createTask(data: CreateTaskInput) {
    return this.prisma.task.create({
      data,
    });
  }

  async getTasks() {
    return this.prisma.task.findMany({ where: { active: true, status: TaskStatus.TODO} }); }

  async getTaskById(id: string) {
    return this.prisma.task.findUnique({ where: { id, active: true } });
  }

  async updateTask(id: string, data: UpdateTaskInput) {
    return this.prisma.task.update({ where: { id }, data });
  }

  async deleteTask(id: string) {
    await this.prisma.task.update({ where: { id }, data: { active: false } });
    return;
  }
}
