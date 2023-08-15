import { CreateProductDto } from 'src/product/dto/create-product.dto';

export interface IUser {
  id: string;
  name: string;
  age: number;
}

export const users: IUser[] = [
  {
    id: '1',
    name: 'Jose',
    age: 30,
  },
  {
    id: '2',
    name: 'Maria',
    age: 70,
  },
  {
    id: '3',
    name: 'Ana',
    age: 20,
  },
];

export const products: CreateProductDto[] = [
  {
    id: '123',
    name: 'Sais de banho para chuveiro',
    photo:
      'https://http2.mlstatic.com/D_NQ_NP_743879-MLA70239345135_062023-O.webp',
    price: 20,
    quantity: 10,
    ingredients: [
      'Voluptatem accusantium, Rem aperiam eaque, Eaque ipsa, Vitae dicta sun…',
    ],
    description:
      'Uma luxuosa mistura que combina a essência delicada da flor de cerejei…',
    size: '200g',
    categorieId: '64a45d16a3a844084db823b8',
    essenceId: '6406768ffe8c0a7114c961a3',
  },
];
