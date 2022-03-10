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

    async add(dto: AddBuyer): Promise<void> {
        return this.repository.add(dto.firstname, dto.lastname, dto.email);
    }
}