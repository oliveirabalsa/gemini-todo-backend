import { InputType, Field } from '@nestjs/graphql';
import { TaskPriority, TaskStatus } from '@/task/types/task.enum';
import {
  IsString,
  IsOptional,
  IsDate,
  IsEnum,
  IsBoolean,
} from 'class-validator';

@InputType()
export class CreateTaskInput {
  @Field({ description: 'Title of the task' })
  @IsString()
  title: string;

  @Field({ description: 'Description of the task', nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field({ description: 'Due date of the task', nullable: true })
  @IsOptional()
  @IsDate()
  dueDate?: string;

  @Field(() => String, {
    description: 'Priority of the task (e.g., HIGH, MEDIUM, LOW)',
    nullable: true,
  })
  @IsOptional()
  @IsEnum(TaskPriority, { message: 'Invalid priority value' })
  priority?: string;

  @Field(() => String, {
    description: 'Status of the task (e.g., TODO, IN_PROGRESS, COMPLETED)',
    nullable: true,
  })
  @IsOptional()
  @IsEnum(TaskStatus, { message: 'Invalid status value' })
  status?: string;

  @Field(() => Boolean, {
    description: 'active status of the task',
    nullable: true,
    defaultValue: true,
  })
  @IsOptional()
  @IsBoolean()
  active?: boolean;
}
