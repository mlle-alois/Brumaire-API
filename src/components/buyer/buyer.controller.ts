import { Body, Controller, Post } from "@nestjs/common";
import { BuyerService } from "./buyer.service";
import { AddBuyer } from "./dto/add-buyer.dto";

@Controller("buyers")
export class BuyerController {
    constructor(private readonly service: BuyerService) {}

    @Post()
    async add(@Body() body: AddBuyer): Promise<void> {
        return this.service.add(body);
    }
}