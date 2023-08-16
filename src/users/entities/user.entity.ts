import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// Nome da tabela no banco de dados
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column('json', { nullable: true })
  email: string[];
}
