import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateTaskInput, UpdateTaskInput } from './dto';

@Injectable()
export class TaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createTask(data: CreateTaskInput) {
    return this.prisma.task.create({
      data,
    });
  }

  async getTasks() {
    return this.prisma.task.findMany();
  }

  async getTaskById(id: string) {
    return this.prisma.task.findUnique({ where: { id } });
  }

  async updateTask(id: string, data: UpdateTaskInput) {
    return this.prisma.task.update({ where: { id }, data });
  }

  async deleteTask(id: string) {
    await this.prisma.task.delete({ where: { id } });
    return;
  }
}
