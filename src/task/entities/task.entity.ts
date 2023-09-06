import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { TaskPriority, TaskStatus } from '@/task/types/task.enum';
import { FieldId } from '@/commom/decorators/field-id.decorator';

registerEnumType(TaskPriority, {
  name: 'TaskPriority',
});

registerEnumType(TaskStatus, {
  name: 'TaskStatus',
});

@ObjectType()
export class Task {
  @FieldId()
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => TaskPriority, { nullable: true })
  priority?: TaskPriority | null; 

  @Field(() => TaskStatus, { nullable: true })
  status?: TaskStatus | null; 

  @Field({ nullable: true })
  dueDate?: Date;
}
