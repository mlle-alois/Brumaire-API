import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { HttpService } from '@nestjs/axios';
import { MailingService } from '../../mailing/mailing.service';

@Controller('evaluation')
export class EvaluationController {
  constructor(private readonly evaluationService: EvaluationService, private mailingService: MailingService) {
  }

  @Post()
  @UseInterceptors(FileInterceptor('picture'))
  create(@UploadedFile() file: Express.Multer.File, @Body() createEvaluationDto: CreateEvaluationDto) {
    return this.evaluationService.create(createEvaluationDto, file);
  }

  @Get()
  findAll() {

    const email = 'paolo.manaois@yahoo.fr';
    const userFirstName = 'Paolo';
    const deeplink = 'https://www.google.com';

    this.mailingService.sendReceivedOrderMail(email, userFirstName, deeplink);




    return this.evaluationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.evaluationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEvaluationDto: UpdateEvaluationDto) {
    return this.evaluationService.update(+id, updateEvaluationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.evaluationService.remove(+id);
  }
}
