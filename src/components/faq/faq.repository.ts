import { EntityRepository, getRepository, Repository } from 'typeorm';
import { Logger } from '@nestjs/common';
import { Evaluation } from './entities/evaluation.entity';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { Faq } from './entities/faq.entity';

@EntityRepository(Faq)
export class EvaluationRepository extends Repository<Faq> {
  private logger = new Logger('FaqController');

  async getAll(): Promise<Faq[]> {
    return await getRepository(Faq).find();
  }

  async getById(id: number): Promise<Faq> {
    return await getRepository(Faq).findOne(id);
  }




}
