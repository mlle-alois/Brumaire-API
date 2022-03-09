import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ErUser } from '../../er-user/entities/er-user.entity';
import { ErTodolist } from '../../er-todolist/entities/er-todolist.entity';

@Entity()
export class ErSpace extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(
    type => ErUser,
    erUser => erUser.spacesCreator,
    { eager: true },
  )
  author: ErUser;

  @Column()
  visibility: string;

  @Column()
  tag: string;

  @Column()
  description: string;

  @Column()
  @UpdateDateColumn()
  lastUpdatedDate: Date;

  @OneToMany(
    type => ErTodolist,
    erTodolist => erTodolist.space,
    { eager: true },
  )
  todolists: ErTodolist[];
}
