import { Test, TestingModule } from '@nestjs/testing';
import { ErUserController } from './er-user.controller';
import { ErUserService } from './er-user.service';

describe('ErUserController', () => {
  let controller: ErUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ErUserController],
      providers: [ErUserService],
    }).compile();

    controller = module.get<ErUserController>(ErUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
