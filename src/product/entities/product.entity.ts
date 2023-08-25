import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  ManyToMany,
  CreateDateColumn,
  BeforeInsert,
} from 'typeorm';
import { Ingredients } from './ingredients.entity';
import { v4 as uuidV4 } from 'uuid';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  photo: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  // Join table mosta qual é a entidade principal da relação
  @JoinTable()
  @ManyToMany(() => Ingredients, (ingredient) => ingredient.product, {
    cascade: true,
  })
  ingredients: Ingredients[];

  @Column()
  description: string;

  @Column()
  size: string;

  @Column()
  categorieId: string;

  @Column()
  essenceId: string;

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
