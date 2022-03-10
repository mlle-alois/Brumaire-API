import { Module } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { EvaluationController } from './evaluation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvaluationRepository } from './evaluation.repository';
import { MailingModule } from '../../mailing/mailing.module';

@Module({
  imports: [TypeOrmModule.forFeature([EvaluationRepository]), MailingModule],
  controllers: [EvaluationController],
  providers: [EvaluationService],
})
export class EvaluationModule {
}
