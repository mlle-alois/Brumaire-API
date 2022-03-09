import { IsNotEmpty } from 'class-validator';

export class ErTaskDto {
  id: number;
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  status: string;

  deadLine: string;

  finishedDate: string;

  limitDescription: number;

  todolistId: number;

  userId: number;
}
