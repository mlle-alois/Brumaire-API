import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { IdentitfySelfDto } from "./dto/identifySelf.dto";

@Controller("auth")
export class AuthController {
    constructor(private readonly service: AuthService) {}

    @Post("/signup")
    async signUp(@Body() body: IdentitfySelfDto): Promise<void> {
        return this.service.signUp(body);
    }

    @Post("/signin")
    async signIn(@Body() body: IdentitfySelfDto): Promise<{ token: string }> {
        const token = await this.service.signIn(body);
        return { token };
    }
}