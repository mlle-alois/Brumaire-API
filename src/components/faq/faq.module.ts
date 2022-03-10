import { Module } from '@nestjs/common';
import { FaqService } from './faq.service';
import { FaqController } from './faq.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FaqRepository } from './faq.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FaqRepository])],
  controllers: [FaqController],
  providers: [FaqService],
})
export class FaqModule {
}
