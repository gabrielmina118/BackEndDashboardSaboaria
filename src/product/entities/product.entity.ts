import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  photo: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @Column('json', { nullable: true })
  ingredients: string[];

  @Column()
  description: string;

  @Column()
  size: string;

  @Column()
  categorieId: string;

  @Column()
  essenceId: string;
}
