import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { products } from 'src/mock/users';

@Injectable()
export class ProductService {
  create(productDto: CreateProductDto) {
    const newProduct = { id: '123', ...productDto };
    products.push(newProduct);
    return newProduct;
  }

  findOne(id: string) {
    const product = products.find((product) => product.id === id);

    if (!product) {
      throw new HttpException(
        `Não foi possível achar produto com id:${id}`,
        HttpStatus.NOT_FOUND,
      );
    }

    return product;
  }

  delete(id: string) {
    const findProduct = products.find((product) => product.id === id);

    if (!findProduct) {
      throw new HttpException(
        `Não foi possível achar produto com id: ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }

    const productFilter = products.filter((product) => product.id !== id);
    return productFilter;
  }
}
