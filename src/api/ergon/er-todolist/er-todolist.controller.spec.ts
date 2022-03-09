import { Test, TestingModule } from '@nestjs/testing';
import { ErTodolistController } from './er-todolist.controller';
import { ErTodolistService } from './er-todolist.service';

describe('ErTodolistController', () => {
  let controller: ErTodolistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ErTodolistController],
      providers: [ErTodolistService],
    }).compile();

    controller = module.get<ErTodolistController>(ErTodolistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
