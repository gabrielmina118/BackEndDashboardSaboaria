import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
@Injectable()
export class ProductService {
  // O repositório é quem possui os métodos para manipular os dados
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  public async findAll() {
    // Find quando nao recebe nenhum parâmetro , busca todos os dados(findAll)
    return await this.productRepository.find();
  }

  public async create(productDto: CreateProductDto) {
    // Cria o objeto do repositório e depois salva
    const product = this.productRepository.create(productDto);
    return await this.productRepository.save(product);
  }

  public async findOne(id: string) {
    const product = await this.productRepository.findOne(id);

    if (!product) {
      throw new NotFoundException(
        `Não foi possível achar produto com id:${id}`,
      );
    }

    return product;
  }

  async update(id: string, productDto: UpdateProductDto) {
    const product = await this.productRepository.findOne(id);

    if (!product) {
      throw new NotFoundException(
        `Não foi possível achar produto com id: ${id}`,
      );
    }
    this.productRepository.merge(product, productDto);

    return this.productRepository.save(product);
  }

  async delete(id: string) {
    const product = await this.productRepository.findOne(id);

    if (!product) {
      throw new NotFoundException(
        `Não foi possível achar produto com id: ${id}`,
      );
    }
    await this.productRepository.remove(product);
    return `Produto com id: ${id} removido com sucesso`;
  }
}
