import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  IsNull,
} from 'typeorm';
import { ErUser } from '../er-user/entities/er-user.entity';
import { ErTodolist } from '../er-todolist/entities/er-todolist.entity';

@Entity()
export class ErTask extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: string;

  @Column()
  deadline: Date;

  @Column({
    nullable: true,
  })
  finishedDate: Date;

  @Column()
  limitDescription: number;

  @Column({
    nullable: true,
  })
  userId: number;

  @ManyToOne(
    type => ErUser,
    erUser => erUser.tasks,
  )
  user: ErUser;

  @ManyToOne(
    type => ErTodolist,
    erTodolist => erTodolist.tasks,
    { onDelete: 'CASCADE' },
  )
  todolist: ErTodolist;
}
