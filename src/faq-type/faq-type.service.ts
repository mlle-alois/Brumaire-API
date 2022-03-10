import { Injectable } from '@nestjs/common';
import { CreateFaqTypeDto } from './dto/create-faq-type.dto';
import { UpdateFaqTypeDto } from './dto/update-faq-type.dto';

@Injectable()
export class FaqTypeService {
  create(createFaqTypeDto: CreateFaqTypeDto) {
    return 'This action adds a new faqType';
  }

  findAll() {
    return `This action returns all faqType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} faqType`;
  }

  update(id: number, updateFaqTypeDto: UpdateFaqTypeDto) {
    return `This action updates a #${id} faqType`;
  }

  remove(id: number) {
    return `This action removes a #${id} faqType`;
  }
}
