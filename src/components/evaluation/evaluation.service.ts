import { Injectable } from "@nestjs/common";
import { CreateEvaluationDto } from "./dto/create-evaluation.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { EvaluationRepository } from "./evaluation.repository";
import { InjectS3, S3 } from "nestjs-s3";
import { Evaluation } from './entities/evaluation.entity';

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

  async findAll() {
    const evaluations: Evaluation[] = await this.evaluationRepository.getAll().then(evals => {
      return evals;
    });

    return evaluations.sort((n1,n2) => n2.creationDate.getTime() - n1.creationDate.getTime());
  }

  findOne(id: number) {
    return this.evaluationRepository.findOne(id);
  }

  remove(id: number) {
    return this.evaluationRepository.delete(id);
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

  async findAverage() {
    const evaluations: Evaluation[] = await this.evaluationRepository.getAll();
    const sum = evaluations.map(({ averageScore }) => {
      return averageScore
    })
      .reduce((a, b) => a + b, 0);

    return sum / evaluations.length;
  }
}
