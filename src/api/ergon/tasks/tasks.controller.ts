import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ErTaskDto } from './dto/task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { ErTask } from './task.entity';
import { TaskStatus } from './enum/task-status.enum';

@Controller('er-tasks')
export class TasksController {
  private logger = new Logger('TasksController');
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(
    @Query() filterDto: GetTasksFilterDto,
    @Req() req,
  ): Promise<ErTask[]> {
    this.logger.verbose(
      `user ${req.user.name} retrieving all tasks. Filters: ${JSON.stringify(
        filterDto,
      )}`,
    );
    return this.tasksService.getTasks(filterDto, req.user);
  }

  @Get('/:id')
  getTaskById(
    @Param('id', ParseIntPipe) id: number,
    @Req() req,
  ): Promise<ErTask> {
    this.logger.verbose(`user ${req.user.name} retrieving single task by id.`);
    return this.tasksService.getTaskById(id, req.user);
  }

  @Post('/save')
  createTask(@Body() createTaskDto: ErTaskDto, @Req() req): Promise<ErTask> {
    this.logger.verbose('saving new task');
    return this.tasksService.createTask(createTaskDto);
  }

  @Delete('/:id')
  deleteTask(@Param('id', ParseIntPipe) id: number, @Req() req): Promise<void> {
    this.logger.verbose('Deleting a Task');
    return this.tasksService.deleteTask(id);
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', TaskStatusValidationPipe) status: TaskStatus,
    @Req() req,
  ): Promise<ErTask> {
    this.logger.verbose(
      `user ${req.user.name} updating task. Status: ${status}`,
    );
    return this.tasksService.updateTaskStatus(id, status, req.user);
  }
}
