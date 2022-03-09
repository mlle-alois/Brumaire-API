import { Test, TestingModule } from '@nestjs/testing';
import { ErSpaceController } from './er-space.controller';
import { ErSpaceService } from './er-space.service';

describe('ErSpaceController', () => {
  let controller: ErSpaceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ErSpaceController],
      providers: [ErSpaceService],
    }).compile();

    controller = module.get<ErSpaceController>(ErSpaceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
