import { EntityRepository, getRepository, Repository } from 'typeorm';
import { Logger } from '@nestjs/common';
import { Faq } from './entities/faq.entity';
import { CreateFaqDto } from './dto/create-faq.dto';
import { FaqType } from '../faq-type/entities/faq-type.entity';
import { UpdateFaqDto } from './dto/update-faq.dto';

@EntityRepository(Faq)
export class FaqRepository extends Repository<Faq> {
  private logger = new Logger('FaqController');

  async getAll(): Promise<Faq[]> {
    return await getRepository(Faq).find();
  }

  async getById(id: number): Promise<Faq> {
    return await getRepository(Faq).findOne(id);
  }

  async createEvaluation(createFaqDto: CreateFaqDto): Promise<Faq> {
    const {strQuestion, strAnswer, idFaqType} = createFaqDto;

    const faq = new Faq();
    faq.question = strQuestion;
    faq.answer = strAnswer;
    faq.faqType = await getRepository(FaqType).findOne(idFaqType);
    faq.createDate = new Date(Date.now());

    try {
      await getRepository(Faq).save(faq);
      this.logger.debug(`Successfully Saved FAQ!`);
      return faq;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async updateFaq(id: number, updateFaqDto: UpdateFaqDto): Promise<Faq> {
    const {strAnswer, strQuestion, idFaqType} = updateFaqDto;

    const faq = await getRepository(Faq).findOne(id);
    faq.question = strQuestion === null ? faq.question : strQuestion;
    faq.answer = strAnswer === null ? faq.answer : strAnswer;
    faq.faqType = idFaqType  === null ? faq.faqType : await getRepository(FaqType).findOne(idFaqType);
    faq.createDate = new Date(Date.now());

    try {
      await getRepository(Faq).save(faq);
      this.logger.debug(`Successfully Updated FAQ!`);
      return faq;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async deleteById(id: number): Promise<void> {
    await getRepository(Faq).delete(id);
    this.logger.debug(`Successfully Deleted FAQ!`);
    return;
  }

}
