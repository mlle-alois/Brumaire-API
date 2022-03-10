import { Buyer } from '../../buyer/buyer.entity';
import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column("DOUBLE")
  averageScore: number;

  @Column({
    nullable: true
  })
  pictureURL: string;

  @Column()
  creationDate: Date;

  @OneToOne(() => Buyer)
  @JoinColumn()
  buyer: Buyer;
}
