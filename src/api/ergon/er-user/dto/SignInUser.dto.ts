import { IsNotEmpty } from 'class-validator';

export class SignInUserDTO {
  id: number;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}
