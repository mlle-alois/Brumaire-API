import { Injectable, NotFoundException } from '@nestjs/common';
import { ErTaskDto } from './dto/task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { ErTask } from './task.entity';
import { TaskStatus } from './enum/task-status.enum';
import { ErUser } from '../er-user/entities/er-user.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository, 'java')
    private taskRepository: TaskRepository,
  ) {}

  getTasks(filterDto: GetTasksFilterDto, erUser: ErUser): Promise<ErTask[]> {
    return this.taskRepository.getTasks(filterDto, erUser);
  }

  async getTaskById(id: number, erUser: ErUser): Promise<ErTask> {
    const requiredTask = await this.taskRepository.findOne({
      where: { id, userId: erUser.id },
    });
    if (!requiredTask) {
      throw new NotFoundException(`Task with ${id} not found.`);
    }
    return requiredTask;
  }

  async deleteTask(id: number): Promise<void> {
    const result = await this.taskRepository.delete({ id: id });

    if (result.affected === 0) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
  }

  async createTask(createTaskDto: ErTaskDto): Promise<ErTask> {
    if (createTaskDto.id) {
      const task: ErTask = await ErTask.findOne({ id: createTaskDto.id });
      task.finishedDate = createTaskDto.finishedDate
        ? (task.finishedDate = new Date(Date.parse(createTaskDto.finishedDate)))
        : null;
      if (createTaskDto.status) {
        task.status = createTaskDto.status;
      }
      task.title = createTaskDto.title;
      task.description = createTaskDto.description;
      return task.save();
    }
    return this.taskRepository.createTask(createTaskDto);
  }

  async updateTaskStatus(
    id: number,
    status: TaskStatus,
    erUser: ErUser,
  ): Promise<ErTask> {
    const task = await this.getTaskById(id, erUser);
    task.status = status;
    await task.save();
    return task;
  }
}
