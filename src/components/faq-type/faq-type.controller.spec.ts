import { Test, TestingModule } from '@nestjs/testing';
import { FaqTypeController } from './faq-type.controller';
import { FaqTypeService } from './faq-type.service';

describe('FaqTypeController', () => {
  let controller: FaqTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FaqTypeController],
      providers: [FaqTypeService],
    }).compile();

    controller = module.get<FaqTypeController>(FaqTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
