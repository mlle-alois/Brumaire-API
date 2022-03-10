import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EvaluationModule } from "./components/evaluation/evaluation.module";
import { FaqModule } from "./components/faq/faq.module";
import { Evaluation } from "./components/evaluation/entities/evaluation.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      url: "postgres://yeuyhasaikjkjk:c0af6240cd84dac46d1c314d35cc26a2ca235ef8a6f6ba2ca5b037b2460c1c6a@ec2-52-211-158-144.eu-west-1.compute.amazonaws.com:5432/d8op4r9kec8sjd",
      type: 'postgres',
      ssl: {
        rejectUnauthorized: false,
      },
      entities: [
        Evaluation
      ],
      synchronize: true, // This for development
      autoLoadEntities: true,
    }),
    EvaluationModule,
    FaqModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {
}
