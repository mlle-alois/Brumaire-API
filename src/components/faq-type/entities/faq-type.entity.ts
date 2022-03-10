import { Faq } from '../../faq/entities/faq.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FaqType {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  libelle: string;

  @OneToMany(() => Faq, faq => faq.faqType)
  faq: Faq[];
}
