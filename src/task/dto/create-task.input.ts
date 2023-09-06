import { InputType, Field } from '@nestjs/graphql';
import { TaskPriority, TaskStatus } from '@/task/types/task.enum';
import { IsString, IsOptional, IsDate, IsEnum } from 'class-validator';

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
  dueDate?: Date;

  @Field(() => TaskPriority, {
    description: 'Priority of the task (e.g., HIGH, MEDIUM, LOW)',
    nullable: true,
  })
  @IsOptional()
  @IsEnum(TaskPriority, { message: 'Invalid priority value' })
  priority?: TaskPriority;

  @Field(() => TaskStatus, {
    description: 'Status of the task (e.g., TODO, IN_PROGRESS, COMPLETED)',
    nullable: true,
  })
  @IsOptional()
  @IsEnum(TaskStatus, { message: 'Invalid status value' })
  status?: TaskStatus;
}
