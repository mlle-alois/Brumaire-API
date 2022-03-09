import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvaluationModule } from './components/evaluation/evaluation.module';
import { FaqModule } from './components/faq/faq.module';
import { Evaluation } from './components/evaluation/entities/evaluation.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'brumaireDB',
      entities: [Evaluation],
      synchronize: true,
      keepConnectionAlive: true,
    }),
    EvaluationModule,
    FaqModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
