import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FaqType } from '../../faq-type/entities/faq-type.entity';

@Entity()
export class Faq {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @Column()
  answer: string;

  @ManyToOne(() => FaqType, { eager: true })
  faqType: FaqType;

  @Column()
  createDate: Date;
}
