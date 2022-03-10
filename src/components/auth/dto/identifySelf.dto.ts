import { IsNotEmpty, IsEmail, MinLength, MaxLength, Validate } from 'class-validator';
import { PasswordValidator } from './password.validator';

export class IdentitfySelfDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Validate(PasswordValidator)
    password: string;    
}