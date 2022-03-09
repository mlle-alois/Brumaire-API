import { IsNotEmpty } from 'class-validator';

export class testDto {
  @IsNotEmpty()
  test: string;
}
