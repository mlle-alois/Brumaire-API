import { EntityRepository, getRepository, Repository } from 'typeorm';
import { ErSpace } from './entities/er-space.entity';
import { ErUser } from '../er-user/entities/er-user.entity';
import { ErSpaceDTO } from './dto/er-space.dto';
import { Logger } from '@nestjs/common';

@EntityRepository(ErSpace)
export class ErSpaceRepository extends Repository<ErSpace> {
  private logger = new Logger('ErUserController');
  async getAll(): Promise<ErSpace[]> {
    return await getRepository(ErSpace, 'java').find();
  }

  async createSpace(erSpaceDTO: ErSpaceDTO): Promise<ErSpace> {
    const { author, description, name, tag, visibility } = erSpaceDTO;

    const erSpace = new ErSpace();
    erSpace.author = await getRepository(ErUser, 'java').findOne({
      where: { username: author.username },
    });
    erSpace.description = description;
    erSpace.lastUpdatedDate = new Date(Date.now());
    erSpace.name = name;
    erSpace.tag = tag;
    erSpace.visibility = visibility;

    try {
      await getRepository(ErSpace, 'java').save(erSpace);
      this.logger.debug(`Successfully Saved Space!`);
      return erSpace;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
