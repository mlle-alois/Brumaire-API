import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvaluationModule } from './components/evaluation/evaluation.module';
import { Evaluation } from './components/evaluation/entities/evaluation.entity';
import { FaqModule } from './components/faq/faq.module';
import { Faq } from './components/faq/entities/faq.entity';
import { FaqType } from './components/faq-type/entities/faq-type.entity';
import { FaqTypeModule } from './components/faq-type/faq-type.module';
import { S3Module } from 'nestjs-s3';
import { MailingService } from './mailing/mailing.service';
import { HttpModule } from '@nestjs/axios';
import { Buyer } from './components/buyer/buyer.entity';
import { BuyerModule } from './components/buyer/buyer.module';
import { MailingModule } from './mailing/mailing.module';

@Module({
  imports: [
    S3Module.forRoot({
      config: {
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET_KEY,
        endpoint: process.env.ENDPOINT,
        s3ForcePathStyle: true,
        signatureVersion: "v4",
      },
    }),
    TypeOrmModule.forRoot({
      url: process.env.DATABASE_URL,
      type: 'postgres',
      ssl: {
        rejectUnauthorized: false,
      },
      entities: [
        Buyer,
        Evaluation,
        Faq,
        FaqType
      ],
      synchronize: true, // This for development
      autoLoadEntities: true,
    }),
    BuyerModule,
    EvaluationModule,
    FaqModule,
    FaqTypeModule,
    HttpModule
  ],
  controllers: [],
  providers: [MailingService],
})
export class AppModule {}
