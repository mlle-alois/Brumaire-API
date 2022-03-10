import { Body, Controller, Delete, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller("evaluation")
export class EvaluationController {
  constructor(private readonly evaluationService: EvaluationService) {
  }

  @Post()
  @UseInterceptors(FileInterceptor("picture"))
  create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createEvaluationDto: CreateEvaluationDto
  ) {
    return this.evaluationService.create(createEvaluationDto, file);
  }

  @Get()
  findAll() {
    return this.evaluationService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.evaluationService.findOne(+id);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.evaluationService.remove(+id);
  }
}
