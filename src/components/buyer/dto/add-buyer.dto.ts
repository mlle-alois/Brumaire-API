import { IsEmail, IsNotEmpty } from "class-validator";

export class AddBuyer {
    @IsNotEmpty()
    firstname: string;
    @IsNotEmpty()
    lastname: string;
    @IsNotEmpty()
    @IsEmail()
    email: string;
}