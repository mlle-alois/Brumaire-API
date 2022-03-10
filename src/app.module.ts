import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EvaluationModule } from "./components/evaluation/evaluation.module";
import { FaqModule } from "./components/faq/faq.module";
import { Evaluation } from "./components/evaluation/entities/evaluation.entity";
import { S3Module } from "nestjs-s3";
import { Faq } from "./components/faq/entities/faq.entity";
import { FaqType } from "./faq-type/entities/faq-type.entity";

@Module({
  imports: [
    S3Module.forRoot({
      config: {
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET_KEY,
        endpoint: process.env.ENDPOINT,
        s3ForcePathStyle: true,
        signatureVersion: "v4"
      }
    }),
    TypeOrmModule.forRoot({
      url: process.env.DATABASE_URL,
      type: "postgres",
      ssl: {
        rejectUnauthorized: false
      },
      entities: [
        Evaluation,
        Faq,
        FaqType
      ],
      synchronize: true, // This for development
      autoLoadEntities: true
    }),
    EvaluationModule,
    FaqModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {
}
