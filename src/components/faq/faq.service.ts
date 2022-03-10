import { Injectable } from '@nestjs/common';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FaqRepository } from './faq.repository';

@Injectable()
export class FaqService {

  constructor(@InjectRepository(FaqRepository)
              private faqRepository: FaqRepository) {
  }

  create(createFaqDto: CreateFaqDto) {
    return this.faqRepository.createEvaluation(createFaqDto);
  }

  findAll() {
    return this.faqRepository.getAll();
  }

  findOne(id: number) {
    return this.faqRepository.getById(id);
  }

  update(id: number, updateFaqDto: UpdateFaqDto) {
    return this.faqRepository.updateFaq(id, updateFaqDto);
  }

  remove(id: number) {
    return this.faqRepository.deleteById(id);
  }
}
