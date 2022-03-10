import { Injectable } from "@nestjs/common";
import { CreateEvaluationDto } from "./dto/create-evaluation.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { EvaluationRepository } from "./evaluation.repository";
import { InjectS3, S3 } from "nestjs-s3";

@Injectable()
export class EvaluationService {

  constructor(@InjectRepository(EvaluationRepository)
              private evaluationRepository: EvaluationRepository,
              @InjectS3() private readonly s3: S3) {
  }

  async create(createEvaluationDto: CreateEvaluationDto, file: Express.Multer.File) {
    const data = {
      ...createEvaluationDto,
      strPictureURL: await this.uploadFile(file),
    };
    return this.evaluationRepository.createEvaluation(data);
  }

  findAll() {
    return this.evaluationRepository.getAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} evaluation`;
  }

  remove(id: number) {
    return `This action removes a #${id} evaluation`;
  }

  private async uploadFile(file: Express.Multer.File): Promise<string> {
    const key = `${new Date().getTime()}_${file.originalname}`;
    await this.s3.upload({
      Bucket: process.env.BUCKET,
      Key: key,
      Body: file.buffer,
    }).promise();

    return this.s3.getSignedUrlPromise(
      'getObject', {
        Bucket: process.env.BUCKET,
        Key: key,
        Expires: 60 * 60 * 24 * 7,
      },
    );
  }
}
