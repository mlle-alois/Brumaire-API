import { Module } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { EvaluationController } from './evaluation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvaluationRepository } from './evaluation.repository';

@Module({
  imports: [TypeOrmModule.forFeature([EvaluationRepository])],
  controllers: [EvaluationController],
  providers: [EvaluationService],
})
export class EvaluationModule {
}
