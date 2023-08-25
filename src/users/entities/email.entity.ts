import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  JoinTable,
  BeforeInsert,
  Column,
  ManyToMany,
} from 'typeorm';
import { User } from './user.entity';
import { v4 as uuidV4 } from 'uuid';

@Entity()
export class Email {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => User, (user) => user.email)
  user: User[];

  @BeforeInsert()
  genereatedId() {
    if (this.id) {
      return;
    }
    this.id = uuidV4();
  }
}
