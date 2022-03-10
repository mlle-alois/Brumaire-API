import { Body, Controller, Delete, Get, Param, Post, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '@nestjs/passport';

@Controller("evaluation")
export class EvaluationController {
  constructor(private readonly evaluationService: EvaluationService) {
  }

  @Post()
  @UseGuards(AuthGuard())
  @UseInterceptors(FileInterceptor("picture"))
  create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createEvaluationDto: CreateEvaluationDto,
    @Req() req
  ) {
    const user = req.user;
    return this.evaluationService.create(createEvaluationDto, file, user.id);
  }

  @Get()
  findAll() {
    return this.evaluationService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.evaluationService.findOne(+id);
  }

  @Get("/average")
  findAverage() {
    return this.evaluationService.findAverage();
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.evaluationService.remove(+id);
  }
}
