import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BuyerRepository } from "./buyer.repository";
import { AddBuyer } from "./dto/add-buyer.dto";

@Injectable()
export class BuyerService {
    constructor(
        @InjectRepository(BuyerRepository)
        private readonly repository: BuyerRepository
    ) {}

    async add(dto: AddBuyer): Promise<{ id: number, firstname: string, email: string }> {
        const check = await this.repository.findOne({ email: dto.email });
        if (!check) {
            const buyer = await this.repository.add(dto.firstname, dto.lastname, dto.email);
            return {
                id: buyer.id,
                firstname: buyer.firstname,
                email: buyer.email
            }
        }

        return {
            id: check.id,
            firstname: check.firstname,
            email: check.email
        }
    }
}