import { Module } from '@nestjs/common';
import { ErTodolistService } from './er-todolist.service';
import { ErTodolistController } from './er-todolist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ErTodolistRepository } from './er-space.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ErTodolistRepository], 'java')],
  controllers: [ErTodolistController],
  providers: [ErTodolistService],
})
export class ErTodolistModule {}
