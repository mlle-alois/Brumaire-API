import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MailingService } from "../../mailing/mailing.service";
import { MailingModule } from "../../mailing/mailing.module";
import { BuyerController } from "./buyer.controller";
import { BuyerRepository } from "./buyer.repository";
import { BuyerService } from "./buyer.service";
import { JwtStrategy } from "./strategy/jwt.strategy";

@Module({
    imports: [
        MailingModule,
        PassportModule.register({ defaultStrategy: 'jwt' }),
        TypeOrmModule.forFeature([BuyerRepository]),
        JwtModule.register({
            secret: process.env.SECRET,
            signOptions: {
              expiresIn: 3 * 60,
            },
        }),
    ],
    controllers: [BuyerController],
    providers: [BuyerService, JwtStrategy],
    exports: [JwtStrategy, PassportModule]
})
export class BuyerModule {}