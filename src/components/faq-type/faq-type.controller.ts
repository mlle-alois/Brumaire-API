import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { FaqTypeService } from './faq-type.service';
import { CreateFaqTypeDto } from './dto/create-faq-type.dto';

@Controller('faq-type')
export class FaqTypeController {
  constructor(private readonly faqTypeService: FaqTypeService) {
  }

  @Post()
  create(@Body() createFaqTypeDto: CreateFaqTypeDto) {
    return this.faqTypeService.create(createFaqTypeDto);
  }

  @Get()
  findAll() {
    return this.faqTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.faqTypeService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.faqTypeService.remove(+id);
  }
}
