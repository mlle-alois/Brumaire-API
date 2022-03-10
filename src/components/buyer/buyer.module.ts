import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BuyerController } from "./buyer.controller";
import { BuyerRepository } from "./buyer.repository";
import { BuyerService } from "./buyer.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([BuyerRepository])
    ],
    controllers: [BuyerController],
    providers: [BuyerService]
})
export class BuyerModule {}