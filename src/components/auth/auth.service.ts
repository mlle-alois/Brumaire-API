import { hash } from "bcrypt";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AdminRepository } from "./admin.repository";
import { IdentitfySelfDto } from "./dto/identifySelf.dto";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(AdminRepository)
        private readonly respository: AdminRepository
    ) {}

    async signUp(dto: IdentitfySelfDto): Promise<void> {
        const hashedPassword = await hash(dto.password, 10);
        await this.respository.signUp(dto.email, hashedPassword);
    }
}