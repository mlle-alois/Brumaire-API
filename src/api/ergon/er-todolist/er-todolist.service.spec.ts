import { Test, TestingModule } from '@nestjs/testing';
import { ErTodolistService } from './er-todolist.service';

describe('ErTodolistService', () => {
  let service: ErTodolistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ErTodolistService],
    }).compile();

    service = module.get<ErTodolistService>(ErTodolistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
