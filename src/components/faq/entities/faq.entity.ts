import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Faq {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @Column()
  answer: string;

  @Column()
  faqType: number;

  @Column()
  createDate: Date;
}
