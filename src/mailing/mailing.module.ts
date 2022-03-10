import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MailingService } from './mailing.service';

@Module({
  imports: [HttpModule],
  providers: [MailingService],
  exports: [MailingService]
})
export class MailingModule {
}
