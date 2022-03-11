import { Module } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { EvaluationController } from './evaluation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvaluationRepository } from './evaluation.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([EvaluationRepository]), 
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: {
        expiresIn: 3 * 60,
      },
  }),
  ],
  controllers: [EvaluationController],
  providers: [EvaluationService],
})
export class EvaluationModule {
}
