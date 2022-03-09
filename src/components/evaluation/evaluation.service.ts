import { Injectable } from '@nestjs/common';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EvaluationRepository } from './evaluation.repository';

@Injectable()
export class EvaluationService {

  constructor(@InjectRepository(EvaluationRepository)
              private evaluationRepository: EvaluationRepository) {
  }

  create(createEvaluationDto: CreateEvaluationDto) {
    return this.evaluationRepository.createEvaluation(createEvaluationDto);
  }

  findAll() {
    return this.evaluationRepository.getAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} evaluation`;
  }

  update(id: number, updateEvaluationDto: UpdateEvaluationDto) {
    return `This action updates a #${id} evaluation`;
  }

  remove(id: number) {
    return `This action removes a #${id} evaluation`;
  }
}
