import { Injectable } from '@nestjs/common';
import { CreateFaqTypeDto } from './dto/create-faq-type.dto';
import { UpdateFaqTypeDto } from './dto/update-faq-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FaqTypeRepository } from './faq-type.repository';

@Injectable()
export class FaqTypeService {


  constructor(@InjectRepository(FaqTypeRepository) private faqTypeRepository: FaqTypeRepository) {
  }

  create(createFaqTypeDto: CreateFaqTypeDto) {
    return this.faqTypeRepository.createFaqType(createFaqTypeDto);
  }

  findAll() {
    return this.faqTypeRepository.getAll();
  }

  findOne(id: number) {
    return this.faqTypeRepository.getById(id);
  }

  remove(id: number) {
    return this.faqTypeRepository.deleteById(id);
  }
}
