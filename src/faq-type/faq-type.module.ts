import { Module } from '@nestjs/common';
import { FaqTypeService } from './faq-type.service';
import { FaqTypeController } from './faq-type.controller';

@Module({
  controllers: [FaqTypeController],
  providers: [FaqTypeService]
})
export class FaqTypeModule {}
