import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskResolver } from './task.resolver';
import { TaskRepository } from './task.repository';
import { PrismaService } from '@/prisma/prisma.service';

@Module({
  providers: [TaskResolver, TaskService, PrismaService, TaskRepository]
})
export class TaskModule {}
