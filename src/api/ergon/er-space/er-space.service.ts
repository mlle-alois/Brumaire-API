import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';

import { UpdateErSpaceDto } from './dto/update-er-space.dto';
import { ErSpaceDTO } from './dto/er-space.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ErSpaceRepository } from './er-space.repository';
import { ErSpaceListDTO } from './dto/er-spacelist.dto';
import { ErSpace } from './entities/er-space.entity';
import { ErUser } from '../er-user/entities/er-user.entity';
import { ErTodolist } from '../er-todolist/entities/er-todolist.entity';
import { ErTask } from '../tasks/task.entity';
import { getConnection, getRepository } from 'typeorm';

@Injectable()
export class ErSpaceService {
  private logger = new Logger('ErUserService');
  constructor(
    @InjectRepository(ErSpaceRepository, 'java')
    private erSpaceRepository: ErSpaceRepository,
  ) {}

  async create(erSpaceDto: ErSpaceDTO) {
    return this.erSpaceRepository.createSpace(erSpaceDto);
  }

  async findAll(): Promise<ErSpaceListDTO> {
    const spaces = await this.erSpaceRepository.getAll();

    const response: ErSpaceDTO[] = [];
    if (spaces != null) {
      spaces.forEach(space => {
        response.push({ ...space });
      });
      const result: ErSpaceListDTO = new ErSpaceListDTO();
      result.spaces = response;
      return result;
    }
    throw new BadRequestException('Invalid user');
  }

  findOne(id: number) {
    return `This action returns a #${id} erSpace`;
  }

  async update(id: number, updateErSpaceDto: UpdateErSpaceDto) {
    const updatedSpace: ErSpace = await getRepository(ErSpace, 'java').findOne({
      id,
    });
    updatedSpace.visibility = updateErSpaceDto.visibility;
    updatedSpace.tag = updateErSpaceDto.tag;
    updatedSpace.name = updateErSpaceDto.name;
    updatedSpace.description = updateErSpaceDto.description;

    return `This action update a #${id} erSpace`;
  }

  remove(id: number) {
    return `This action removes a #${id} erSpace`;
  }
}
