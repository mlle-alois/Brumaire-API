import { Test, TestingModule } from '@nestjs/testing';
import { ErSpaceService } from './er-space.service';

describe('ErSpaceService', () => {
  let service: ErSpaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ErSpaceService],
    }).compile();

    service = module.get<ErSpaceService>(ErSpaceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
