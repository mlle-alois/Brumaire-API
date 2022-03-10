import { Test, TestingModule } from '@nestjs/testing';
import { FaqTypeService } from './faq-type.service';

describe('FaqTypeService', () => {
  let service: FaqTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FaqTypeService],
    }).compile();

    service = module.get<FaqTypeService>(FaqTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
