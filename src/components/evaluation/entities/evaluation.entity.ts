import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Evaluation extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  autonomyScore: number;

  @Column()
  deliveryScore: number;

  @Column()
  handlingScore: number;

  @Column()
  averageScore: number;

  @Column()
  pictureURL: string;

  @Column()
  creationDate: Date;
}
