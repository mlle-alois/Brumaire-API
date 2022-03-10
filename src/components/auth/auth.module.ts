import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminRepository } from "./admin.repository";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
    imports:[ 
        JwtModule.register({
            secret: process.env.SECRET,
            signOptions: {
                expiresIn: 36000
            }
        }),
        TypeOrmModule.forFeature([AdminRepository])
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}