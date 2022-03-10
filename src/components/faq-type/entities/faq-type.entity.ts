import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FaqType {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  libelle: string;

}
