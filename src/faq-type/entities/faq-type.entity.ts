import { Faq } from '../../components/faq/entities/faq.entity';
import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export class FaqType {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  libelle: string;

  @OneToMany(() => Faq, faq => faq.faqType)
  faq: Faq[];
}
