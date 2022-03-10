import { IsNotEmpty } from "class-validator";

export class AddBuyer {
    @IsNotEmpty()
    firstname: string;
    @IsNotEmpty()
    lastname: string;
    @IsNotEmpty()
    email: string;
}