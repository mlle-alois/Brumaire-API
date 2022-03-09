import { Controller, Get, Logger } from '@nestjs/common';
import { testDto } from './test.dto';

@Controller('test')
export class TestController {
  private logger = new Logger('TestController');
  constructor() {}

  @Get()
  getTest(): testDto {
    this.logger.verbose(`request received. `);
    const test = new testDto();
    test.test = 'IT S ALL GOOD API WORK';

    return test;
  }
}
