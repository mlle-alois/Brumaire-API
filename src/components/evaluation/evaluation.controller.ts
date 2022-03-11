import { Body, Controller, Delete, Get, Param, Post, Query, Req, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { getRepository } from 'typeorm';
import { Evaluation } from './entities/evaluation.entity';

@Controller("evaluation")
export class EvaluationController {
  constructor(
    private readonly evaluationService: EvaluationService,
    private readonly jwtService: JwtService
  ) {}

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

  @Get("/check")
  async checkToken(@Res() res: Response, @Query("token") token: string) {
    try {
      if (!token) {
        res.status(301).redirect(process.env.FRONT_RATINGS + "accessError");
        return;
      }

      const user = await this.jwtService.verifyAsync(token);
      const check = await getRepository(Evaluation).findOne({ id: user.id });
      if (!check) {
        res.status(301).redirect(301, process.env.FRONT_RATINGS + "ratings?token=" + token);
        return;
      }
      res.status(301).redirect(301, process.env.FRONT_RATINGS + "commentError");

    } catch(e) {
      console.error(e)
      res.status(301).redirect(301, process.env.FRONT_RATINGS + "accessError");
    }
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
