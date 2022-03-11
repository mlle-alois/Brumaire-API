import { EntityRepository, getRepository, Repository } from 'typeorm';
import { BadRequestException, Logger } from '@nestjs/common';
import { Evaluation } from './entities/evaluation.entity';
import { CreateEvaluationWithPictureDto } from './dto/create-evaluation-with-picture.dto';

@EntityRepository(Evaluation)
export class EvaluationRepository extends Repository<Evaluation> {
  
  private logger = new Logger('EvaluationController');

  async getAll(): Promise<Evaluation[]> {
    return await getRepository(Evaluation).find();
  }

  async getById(id: number): Promise<Evaluation> {
    return await getRepository(Evaluation).findOne(id);
  }

  async createEvaluation(createEvaluationDto: CreateEvaluationWithPictureDto): Promise<Evaluation> {
    const { strTitle, strContent, strPictureURL } = createEvaluationDto;
    let { intAutonomyScore, intHandlingScore, intDeliveryScore } = createEvaluationDto;

    if (intAutonomyScore > 5) intAutonomyScore = 5;
    if (intAutonomyScore < 0) intAutonomyScore = 0;
    if (intHandlingScore > 5) intHandlingScore = 5;
    if (intHandlingScore < 0) intHandlingScore = 0;
    if (intDeliveryScore > 5) intDeliveryScore = 5;
    if (intDeliveryScore < 0) intDeliveryScore = 0;

    const average = +(((+intAutonomyScore) + (+intHandlingScore) + (+intDeliveryScore)) / 3).toFixed(2);
    console.log(average);

    const evaluation = new Evaluation();
    evaluation.title = strTitle;
    evaluation.content = strContent;
    evaluation.autonomyScore = intAutonomyScore;
    evaluation.handlingScore = intHandlingScore;
    evaluation.deliveryScore = intDeliveryScore;
    evaluation.averageScore = average;
    evaluation.pictureURL = strPictureURL;
    evaluation.creationDate = new Date(Date.now());
    evaluation.buyerId = createEvaluationDto.buyerId;

    try {
      await evaluation.save();
      this.logger.debug(`Successfully Saved Evaluation!`);
      return evaluation;
    } catch (err) {
      console.log(err);
      throw new BadRequestException();
    }
  }
}
