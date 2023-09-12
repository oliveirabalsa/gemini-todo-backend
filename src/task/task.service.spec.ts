import { Test, TestingModule } from '@nestjs/testing';
import { TaskService } from './task.service';
import { TaskRepository } from './task.repository';
import { CreateTaskInput, UpdateTaskInput } from './dto';
import { Task } from '@prisma/client';
import { PrismaService } from '@/prisma/prisma.service';

describe('TaskService', () => {
  let service: TaskService;
  let taskRepository: TaskRepository;
  let createdTask: Task;
  let updatedTask: Task;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskService, TaskRepository, PrismaService],
    }).compile();

    service = module.get<TaskService>(TaskService);
    taskRepository = module.get<TaskRepository>(TaskRepository);

    createdTask = {
      id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      title: 'Test Task',
      description: 'Test Description',
      dueDate: null,
      priority: null,
      status: null,
      active: true,
    };

    updatedTask = {
      id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      title: 'Updated Task',
      description: 'Updated Description',
      dueDate: null,
      priority: null,
      status: null,
      active: true,
    };
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a task', async () => {
      const createTaskInput: CreateTaskInput = {
        title: 'Test Task',
        description: 'Test Description',
      };

      jest.spyOn(taskRepository, 'createTask').mockResolvedValue(createdTask);

      const result = await service.create(createTaskInput);

      expect(result).toEqual(createdTask);
    });
  });

  describe('findAll', () => {
    it('should return an array of tasks', async () => {
      const tasks = [
        {
          ...createdTask,
          id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
        },
        {
          ...createdTask,
          id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
        },
      ];
      jest.spyOn(taskRepository, 'getTasks').mockResolvedValue(tasks);
      const result = await service.findAll();
      expect(result).toEqual(tasks);
    });
  });

  describe('findOne', () => {
    it('should find a task by ID', async () => {
      const taskId = createdTask.id;
      jest.spyOn(taskRepository, 'getTaskById').mockResolvedValue(createdTask);
      const result = await service.findOne(taskId);
      expect(result).toEqual(createdTask);
    });
  });

  describe('update', () => {
    it('should update a task', async () => {
      const taskId = createdTask.id;
      const updateTaskInput: UpdateTaskInput = {
        id: taskId,
        title: 'New title',
      };
      jest.spyOn(taskRepository, 'getTaskById').mockResolvedValue(updatedTask);
      jest.spyOn(taskRepository, 'updateTask').mockResolvedValue(updatedTask);
      const result = await service.update(taskId, updateTaskInput);
      expect(result).toEqual(updatedTask);
    });
  });

  describe('remove', () => {
    it('should remove a task by ID', async () => {
      const taskId = createdTask.id;
      jest.spyOn(taskRepository, 'deleteTask').mockResolvedValue();
      const result = await service.remove(taskId);
      expect(result).toBe(undefined);
    });
  });
});
