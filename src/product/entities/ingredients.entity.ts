import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  CreateDateColumn,
  Column,
  BeforeInsert,
} from 'typeorm';
import { Product } from './product.entity';
import { v4 as uuidV4 } from 'uuid';

@Entity('ingredients')
export class Ingredients {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Product, (product) => product.ingredients)
  product: Product[];

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
