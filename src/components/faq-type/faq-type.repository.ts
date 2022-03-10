import { EntityRepository, getRepository, Repository } from 'typeorm';
import { Logger } from '@nestjs/common';
import { FaqType } from './entities/faq-type.entity';
import { CreateFaqTypeDto } from './dto/create-faq-type.dto';

@EntityRepository(FaqType)
export class FaqTypeRepository extends Repository<FaqType> {
  private logger = new Logger('FaqTypeController');

  async getAll(): Promise<FaqType[]> {
    return await getRepository(FaqType).find();
  }

  async getById(id: number): Promise<FaqType> {
    return await getRepository(FaqType).findOne(id);
  }

  async createFaqType(createFaqTypeDto: CreateFaqTypeDto): Promise<FaqType> {
    const {faqType} = createFaqTypeDto;

    const type = new FaqType();
    type.libelle = faqType;

    try {
      await getRepository(FaqType).save(type);
      this.logger.debug(`Successfully Saved FAQ Type!`);
      return type;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async deleteById(id: number): Promise<void> {
    await getRepository(FaqType).delete(id);
    this.logger.debug(`Successfully Deleted FAQ Type!`);
    return;
  }

}
