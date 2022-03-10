import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Buyer } from "../buyer.entity";
import { BuyerRepository } from "../buyer.repository";
import { JwtPayload } from "../interfaces/jwt-payload.dto";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(BuyerRepository)
    private readonly repository: BuyerRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET,
    });
  }

  async validate(payload: JwtPayload): Promise<Buyer> {
    const { id } = payload;
    const buyer = await this.repository.findOne({ id });
    if (!buyer) throw new UnauthorizedException('Invalid credentials.');
    return buyer;
  }
}