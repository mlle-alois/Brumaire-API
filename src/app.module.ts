import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {EvaluationModule} from "./components/evaluation/evaluation.module";
import {FaqModule} from "./components/faq/faq.module";
import {Evaluation} from "./components/evaluation/entities/evaluation.entity";
import {FAQ} from "./components/evaluation/entities/FAQ.entity";
import {FAQType} from "./components/evaluation/entities/FAQType.entity";

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
