import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvaluationModule } from './components/evaluation/evaluation.module';
import { Evaluation } from './components/evaluation/entities/evaluation.entity';
import { FaqTypeModule } from './faq-type/faq-type.module';
import { Faq } from './components/faq/entities/faq.entity';
import { FaqType } from './faq-type/entities/faq-type.entity';
import { FaqModule } from './components/faq/faq.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            url: process.env.DATABASE_URL,
            type: 'postgres',
            ssl: {
                rejectUnauthorized: false,
            },
            entities: [
                Evaluation,
                FAQ,
                FAQType
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
