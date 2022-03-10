import { Module } from '@nestjs/common';
import { FaqTypeService } from './faq-type.service';
import { FaqTypeController } from './faq-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FaqTypeRepository } from './faq-type.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FaqTypeRepository])],
  controllers: [FaqTypeController],
  providers: [FaqTypeService]
})
export class FaqTypeModule {}
