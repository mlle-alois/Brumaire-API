import { Module } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { EvaluationController } from './evaluation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvaluationRepository } from './evaluation.repository';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forFeature([EvaluationRepository]), PassportModule.register({ defaultStrategy: "jwt" })],
  controllers: [EvaluationController],
  providers: [EvaluationService],
})
export class EvaluationModule {
}
