import { Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FaqType } from '../../../faq-type/entities/faq-type.entity';

export class Faq {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @Column()
  answer: string;

  @OneToOne(() => FaqType)
  @JoinColumn()
  faqType: FaqType;
}
