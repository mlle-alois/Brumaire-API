import { ErUserDto } from '../../er-user/dto/er-user.dto';
import { ErTodolistDto } from '../../er-todolist/dto/er-todolist.dto';
import { ErTodolist } from '../../er-todolist/entities/er-todolist.entity';

export class ErSpaceDTO {
  id: number;
  name: string;
  author: ErUserDto;
  visibility: string;
  tag: string;
  description: string;
  lastUpdatedDate: Date;
  todolists: ErTodolist[];
}
