import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ErUser } from '../../er-user/entities/er-user.entity';
import { ErSpace } from '../../er-space/entities/er-space.entity';
import { ErTask } from '../../tasks/task.entity';

@Entity()
export class ErTodolist extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(
    type => ErSpace,
    erSpace => erSpace.todolists,
  )
  space: ErSpace;

  @OneToMany(
    type => ErTask,
    erTask => erTask.todolist,
    { eager: true, cascade: true },
  )
  tasks: ErTask[];
}
