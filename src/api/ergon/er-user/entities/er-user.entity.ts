import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { ErSpace } from '../../er-space/entities/er-space.entity';
import { ErTask } from '../../tasks/task.entity';

const bcrypt = require('bcrypt');

@Entity()
@Unique(['username'])
export class ErUser extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  salt: string;

  @OneToMany(
    type => ErSpace,
    ErSpace => ErSpace.author,
  )
  spacesCreator: ErSpace[];

  @OneToMany(
    type => ErTask,
    ErTask => ErTask.user,
  )
  tasks: ErTask[];

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
