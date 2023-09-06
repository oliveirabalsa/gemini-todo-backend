import { Test, TestingModule } from '@nestjs/testing';
import { TaskResolver } from './task.resolver';
import { TaskService } from './task.service';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Task } from '@prisma/client';
import { TaskRepository } from './task.repository';
import { PrismaService } from '@/prisma/prisma.service';

describe('TaskResolver', () => {
  let resolver: TaskResolver;
  let taskService: TaskService;
  let taskRepository: TaskRepository
  let prismaService: PrismaService
  let createdTask: Task;
  let updatedTask: Task;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskResolver, TaskService, PrismaService, TaskRepository],
    }).compile();

    resolver = module.get<TaskResolver>(TaskResolver);
    taskService = module.get<TaskService>(TaskService);
    taskRepository = module.get<TaskRepository>(TaskRepository);
    prismaService = module.get<PrismaService>(PrismaService);
    createdTask = {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
      title: 'Test Task',
      description: 'Test Description',
      dueDate: null,
      priority: null,
      status: null,
    };
    updatedTask = {
      ...createdTask,
      title: 'Updated Test Task',
      description: 'Updated Test Description',
    };
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('createTask', () => {
    it('should create a task', async () => {
      const createTaskInput: CreateTaskInput = {
        title: 'Test Task',
        description: 'Test Description',
      };
      jest.spyOn(taskService, 'create').mockResolvedValue(createdTask);
      const result = await resolver.createTask(createTaskInput);
      expect(result).toEqual(createdTask);
    });
  });

  describe('findAllTasks', () => {
    it('should return an array of tasks', async () => {
      const tasks = [
        {
          ...createdTask,
          id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        },
        {
          ...createdTask,
          id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        },
      ];
      jest.spyOn(taskService, 'findAll').mockResolvedValue(tasks);
      const result = await resolver.findAllTasks();
      expect(result).toEqual(tasks);
    });
  });

  describe('findTaskById', () => {
    it('should find a task by ID', async () => {
      const taskId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; 
      jest.spyOn(taskService, 'findOne').mockResolvedValue(updatedTask);
      const result = await resolver.findTaskById(taskId);
      expect(result).toEqual(createdTask);
    });
  });

  describe('updateTask', () => {
    it('should update a task', async () => {
      const taskId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; 
      const updateTaskInput: UpdateTaskInput = {
        id: taskId,
        title: 'Updated Test Task',
        description: 'Updated Test Description',
      };
      jest.spyOn(taskService, 'update').mockResolvedValue(updatedTask);
      const result = await resolver.updateTask(updateTaskInput);
      expect(result).toEqual(updatedTask);
    });
  });

  describe('removeTask', () => {
    it('should remove a task by ID', async () => {
      const taskId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; 
      jest
        .spyOn(taskService, 'remove')
        .mockResolvedValue('Task deleted successfully');

      const result = await resolver.removeTask(taskId);
      expect(result).toBe('Task deleted successfully');
    });
  });
});
