import { EntityRepository, getRepository, Repository } from 'typeorm';
import { Logger } from '@nestjs/common';
import { Evaluation } from './entities/evaluation.entity';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';

@EntityRepository(Evaluation)
export class EvaluationRepository extends Repository<Evaluation> {
  private logger = new Logger('EvaluationController');

  async getAll(): Promise<Evaluation[]> {
    return await getRepository(Evaluation).find();
  }

  async createEvaluation(createEvaluationDto: CreateEvaluationDto): Promise<Evaluation> {
    const {title, content, score, pictureURL} = createEvaluationDto;

    const evaluation = new Evaluation();
    evaluation.title = title;
    evaluation.content = content;
    evaluation.score = score;
    evaluation.pictureURL = pictureURL;
    evaluation.creationDate = new Date(Date.now());

    try {
      await getRepository(Evaluation).save(evaluation);
      this.logger.debug(`Successfully Saved Evaluation!`);
      return evaluation;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

}
