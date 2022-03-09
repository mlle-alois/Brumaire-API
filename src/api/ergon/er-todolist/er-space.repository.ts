import { EntityRepository, getRepository, Repository } from 'typeorm';

import { Logger } from '@nestjs/common';
import { ErTodolist } from './entities/er-todolist.entity';
import { ErTodolistDto } from './dto/er-todolist.dto';
import { ErSpace } from '../er-space/entities/er-space.entity';

@EntityRepository(ErTodolist)
export class ErTodolistRepository extends Repository<ErTodolist> {
  private logger = new Logger('ErUserController');
  async getAll(): Promise<ErTodolist[]> {
    return await getRepository(ErTodolist, 'java').find();
  }

  async createTodolist(erTodolistDto: ErTodolistDto): Promise<ErTodolist> {
    const { title, spaceId } = erTodolistDto;

    const erTodolist = new ErTodolist();
    erTodolist.space = await getRepository(ErSpace, 'java').findOne({
      where: { id: spaceId },
    });
    erTodolist.title = title;

    try {
      await getRepository(ErTodolist, 'java').save(erTodolist);
      this.logger.debug(`Successfully Saved Space!`);
      return erTodolist;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
