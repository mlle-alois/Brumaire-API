import { PartialType } from '@nestjs/mapped-types';
import { ErTodolistDto } from './er-todolist.dto';

export class UpdateErTodolistDto extends PartialType(ErTodolistDto) {}
