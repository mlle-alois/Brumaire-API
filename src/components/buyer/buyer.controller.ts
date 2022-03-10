import { Body, Controller, Post } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { MailingService } from "src/mailing/mailing.service";
import { BuyerService } from "./buyer.service";
import { AddBuyer } from "./dto/add-buyer.dto";

@Controller("buyers")
export class BuyerController {
    constructor(
        private readonly service: BuyerService,
        private readonly mailing: MailingService,
        private readonly jwt: JwtService
    ) {}

    @Post()
    async add(@Body() body: AddBuyer): Promise<void> {
        const data = await this.service.add(body);
        const token = await this.jwt.signAsync({
            id: data.id,
            email: data.email
        });

        const redirectionUrl = process.env.FRONT_REVIEWS + "?token=" + token;

        await this.mailing.sendReceivedOrderMail(data.email, data.firstname, redirectionUrl);
    }
}
