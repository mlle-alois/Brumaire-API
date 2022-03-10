import { EntityRepository, getRepository, Repository } from "typeorm";
import { Logger } from "@nestjs/common";
import { Evaluation } from "./entities/evaluation.entity";
import { UpdateEvaluationDto } from "./dto/update-evaluation.dto";
import { CreateEvaluationWithPictureDto } from "./dto/create-evaluation-with-picture.dto";

@EntityRepository(Evaluation)
export class EvaluationRepository extends Repository<Evaluation> {
  private logger = new Logger("EvaluationController");

  async getAll(): Promise<Evaluation[]> {
    return await getRepository(Evaluation).find();
  }

  async getById(id: number): Promise<Evaluation> {
    return await getRepository(Evaluation).findOne(id);
  }

  async createEvaluation(createEvaluationDto: CreateEvaluationWithPictureDto): Promise<Evaluation> {
    const { strTitle, strContent, strPictureURL } = createEvaluationDto;
    let { intScore } = createEvaluationDto;

    if (intScore > 5)
      intScore = 5;
    if (intScore < 0)
      intScore = 0;

    const evaluation = new Evaluation();
    evaluation.title = strTitle;
    evaluation.content = strContent;
    evaluation.score = intScore;
    evaluation.pictureURL = strPictureURL;
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

  async updateEvaluation(id: number, updateEvaluation: UpdateEvaluationDto): Promise<Evaluation> {
    const { strTitle, strContent, intScore } = updateEvaluation;

    const evaluation = await getRepository(Evaluation).findOne(id);
    evaluation.title = strTitle === null ? evaluation.title : strTitle;
    evaluation.content = strContent === null ? evaluation.content : strContent;
    evaluation.score = intScore === null ? evaluation.score : intScore;
    evaluation.pictureURL = "strPictureURL" === null ? evaluation.pictureURL : "strPictureURL";
    evaluation.creationDate = new Date(Date.now());

    try {
      await getRepository(Evaluation).save(evaluation);
      this.logger.debug(`Successfully Updated Evaluation!`);
      return evaluation;
    } catch (err) {
      console.log(err);
      return err;
    }
  }


}
