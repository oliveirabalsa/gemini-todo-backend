import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TaskModule } from '@/task/task.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gql',
      context: ({ req }) => ({ req }),
      driver: ApolloDriver,
    }),
    TaskModule,
  ],
})
export class AppModule {}
