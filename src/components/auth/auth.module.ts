import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminRepository } from "./admin.repository";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./strategy/jwt.strategy";

@Module({
    imports:[ 
        PassportModule.register({ defaultStrategy: "jwt" }) ,
        JwtModule.register({
            secret: process.env.SECRET,
            signOptions: {
                expiresIn: 36000
            }
        }),
        TypeOrmModule.forFeature([AdminRepository])
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    exports: [JwtStrategy, PassportModule]
})
export class AuthModule {}