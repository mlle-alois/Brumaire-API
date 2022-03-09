import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestController } from './api/ergon/test/test.controller';
import { ErTaskModule } from './api/ergon/tasks/tasks.module';
import { ErTask } from './api/ergon/tasks/task.entity';
import { ErUserModule } from './api/ergon/er-user/er-user.module';
import { ErSpaceModule } from './api/ergon/er-space/er-space.module';
import { ErTodolistModule } from './api/ergon/er-todolist/er-todolist.module';
import { ErSpace } from './api/ergon/er-space/entities/er-space.entity';
import { ErTodolist } from './api/ergon/er-todolist/entities/er-todolist.entity';
import { ErUser } from './api/ergon/er-user/entities/er-user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'pa-java',
      name: 'java',
      entities: [ErTask, ErSpace, ErTodolist, ErUser],
      synchronize: true,
      keepConnectionAlive: true,
    }),
    ErTaskModule,
    ErUserModule,
    ErSpaceModule,
    ErTodolistModule,
  ],
  controllers: [TestController],
  providers: [],
})
export class AppModule {}
