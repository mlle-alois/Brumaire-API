import { ConflictException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { Buyer } from "./buyer.entity";

@EntityRepository(Buyer)
export class BuyerRepository extends Repository<Buyer> {
    async add(firstname: string, lastname: string, email: string): Promise<void> {
        const buyer = new Buyer();
        buyer.fistname = firstname;
        buyer.lastname = lastname;
        buyer.email = email;

        try {
            await buyer.save();
        } catch (e) {
            throw new ConflictException("Email already used.");
        }
    }
}