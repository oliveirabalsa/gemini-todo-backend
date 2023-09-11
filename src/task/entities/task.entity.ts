import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { TaskPriority, TaskStatus } from '@/task/types/task.enum';
import { FieldId } from '@/common/decorators/field-id.decorator';

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

  @Field(() => String, {
    defaultValue: TaskPriority.LOW,
    nullable: true,
  })
  priority?: string | null;

  @Field(() => String, { defaultValue: TaskStatus.TODO, nullable: true })
  status?: string | null;

  @Field(() => String, { nullable: true })
  dueDate?: string;

  @Field({ nullable: true, defaultValue: true })
  active?: boolean;
}
