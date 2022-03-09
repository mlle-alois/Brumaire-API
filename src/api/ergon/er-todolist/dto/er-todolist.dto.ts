import { ErTask } from '../../tasks/task.entity';
import { ErTaskDto } from '../../tasks/dto/task.dto';
import { ErSpace } from '../../er-space/entities/er-space.entity';

export class ErTodolistDto {
  id: number;
  title: string;
  space: ErSpace;
  tasks: ErTaskDto[];
  spaceId: number;
}
