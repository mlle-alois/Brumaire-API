import { compare, hash } from 'bcrypt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminRepository } from './admin.repository';
import { IdentitfySelfDto } from './dto/identifySelf.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AdminRepository)
    private readonly respository: AdminRepository,
    private readonly jwtService: JwtService,
  ) {
  }

  async signUp(dto: IdentitfySelfDto): Promise<void> {
    const hashedPassword = await hash(dto.password, 10);
    await this.respository.signUp(dto.email, hashedPassword);
  }

  async signIn(dto: IdentitfySelfDto): Promise<string> {
    const admin = await this.respository.signIn(dto.email);
    if (!await compare(dto.password, admin.password)) {
      throw new UnauthorizedException('Invalid credentials.');
    }

    const payload: JwtPayload = {
      id: admin.id,
      email: admin.email,
    };

    return this.jwtService.signAsync(payload);
  }
}
