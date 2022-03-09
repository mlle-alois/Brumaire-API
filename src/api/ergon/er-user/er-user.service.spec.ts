import { Test, TestingModule } from '@nestjs/testing';
import { ErUserService } from './er-user.service';

describe('ErUserService', () => {
  let service: ErUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ErUserService],
    }).compile();

    service = module.get<ErUserService>(ErUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
