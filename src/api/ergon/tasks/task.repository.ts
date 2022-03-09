import { EntityRepository, getRepository, Repository } from 'typeorm';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { ErTask } from './task.entity';
import { ErTaskDto } from './dto/task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { ErUser } from '../er-user/entities/er-user.entity';
import { ErTodolist } from '../er-todolist/entities/er-todolist.entity';

@EntityRepository(ErTask)
export class TaskRepository extends Repository<ErTask> {
  private logger = new Logger('TaskRepository');

  async getTasks(
    filterDto: GetTasksFilterDto,
    erUser: ErUser,
  ): Promise<ErTask[]> {
    const { status, search } = filterDto;
    const query = this.createQueryBuilder('task');

    query.andWhere('task.userId = :userId', { userId: erUser.id });

    if (status) {
      query.andWhere('task.status = :status', { status });
    }

    if (search) {
      query.andWhere(
        '(task.title LIKE :search OR task.description LIKE :search)',
        { search: `%${search}%` },
      );
    }

    try {
      const tasks = await query.getMany();
      return tasks;
    } catch (error) {
      this.logger.error(
        `Failed to get tasks by user ${
          erUser.username
        }. Filters : ${JSON.stringify(filterDto)}`,
        error.stack,
      );
      throw new InternalServerErrorException(
        'Internal Server Error! Try Again Later',
      );
    }
  }

  async createTask(createTaskDto: ErTaskDto): Promise<ErTask> {
    const {
      title,
      description,
      status,
      deadLine,
      limitDescription,
      todolistId,
    } = createTaskDto;

    const task = new ErTask();
    task.title = title;
    task.description = description;
    task.status = status;
    task.deadline = new Date(Date.parse(deadLine));
    if (createTaskDto.finishedDate) {
      task.finishedDate = new Date(Date.parse(createTaskDto.finishedDate));
    }
    task.limitDescription = limitDescription;
    task.todolist = await getRepository(ErTodolist, 'java').findOne({
      where: { id: todolistId },
    });
    if (createTaskDto.userId) {
      task.user = await getRepository(ErUser, 'java').findOne({
        where: { id: createTaskDto.userId },
      });
      task.userId = createTaskDto.userId;
    }

    try {
      await this.save(task);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(
        'Internal Server Error! Try Again Later',
      );
    }

    //delete task.user;

    return task;
  }
}
