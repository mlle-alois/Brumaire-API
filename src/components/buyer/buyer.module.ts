import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MailingModule } from "src/mailing/mailing.module";
import { MailingService } from "src/mailing/mailing.service";
import { BuyerController } from "./buyer.controller";
import { BuyerRepository } from "./buyer.repository";
import { BuyerService } from "./buyer.service";
import { JwtStrategy } from "./strategy/jwt.strategy";

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        TypeOrmModule.forFeature([BuyerRepository]),
        JwtModule.register({
            secret: process.env.SECRET,
            signOptions: {
              expiresIn: 3 * 60,
            },
        }),
        MailingModule
    ],
    controllers: [BuyerController],
    providers: [BuyerService, JwtService, MailingService],
    exports: [JwtStrategy, PassportModule]
})
export class BuyerModule {}