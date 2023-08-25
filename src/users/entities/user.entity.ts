import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  JoinTable,
  ManyToMany,
  BeforeInsert,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { Email } from './email.entity';

// Nome da tabela no banco de dados
@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @JoinTable()
  @ManyToMany(() => Email, (email) => email.user, {
    cascade: true,
  })
  email: Email[];

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @BeforeInsert()
  genereatedId() {
    if (this.id) {
      return;
    }
    this.id = uuidV4();
  }
}
