import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ErTodolistDto } from './dto/er-todolist.dto';
import { UpdateErTodolistDto } from './dto/update-er-todolist.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ErSpaceRepository } from '../er-space/er-space.repository';
import { ErTodolistRepository } from './er-space.repository';

@Injectable()
export class ErTodolistService {
  private logger = new Logger('ErTodolistService');
  constructor(
    @InjectRepository(ErTodolistRepository, 'java')
    private erTodolistRepository: ErTodolistRepository,
  ) {}
  create(createErTodolistDto: ErTodolistDto) {
    return this.erTodolistRepository.createTodolist(createErTodolistDto);
  }

  findAll() {
    return `This action returns all erTodolist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} erTodolist`;
  }

  update(id: number, updateErTodolistDto: UpdateErTodolistDto) {
    return `This action updates a #${id} erTodolist`;
  }

  async remove(id: number) {
    const result = await this.erTodolistRepository.delete({ id: id });

    if (result.affected === 0) {
      throw new NotFoundException(`Todolist with id ${id} not found`);
    }
  }
}
