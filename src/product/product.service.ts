import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Ingredients } from './entities/ingredients.entity';
@Injectable()
export class ProductService {
  // O repositório é quem possui os métodos para manipular os dados
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(Ingredients)
    private readonly ingredientRepository: Repository<Ingredients>,
  ) {}

  public async findAll() {
    // Find quando nao recebe nenhum parâmetro , busca todos os dados(findAll) e assume a relação da tabela com outros dados

    return await this.productRepository.find({
      relations: ['ingredients'],
    });
  }

  public async findOne(id: string) {
    const product = await this.productRepository.findOne(id, {
      relations: ['ingredients'],
    });

    if (!product) {
      throw new NotFoundException(
        `Não foi possível achar produto com id:${id}`,
      );
    }

    return product;
  }

  public async create(productDto: any) {
    const ingredients = await Promise.all(
      productDto.ingredients.map((name) => this.preloadIngredientByName(name)),
    );

    // Cria o objeto do repositório e depois salva
    const product = this.productRepository.create({
      ...productDto,
      ingredients,
    });
    return await this.productRepository.save(product);
  }

  async update(id: string, productDto: any) {
    const product = await this.productRepository.findOne(id);

    if (!product) {
      throw new NotFoundException(
        `Não foi possível achar produto com id: ${id}`,
      );
    }

    const ingredients = await Promise.all(
      productDto.ingredients.map((name) => this.preloadIngredientByName(name)),
    );

    this.productRepository.merge(product, {
      ...productDto,
      ingredients,
    });

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

  private async preloadIngredientByName(name: string): Promise<Ingredients> {
    const ingredient = await this.ingredientRepository.findOne({ name });

    if (ingredient) {
      return ingredient;
    }

    return this.ingredientRepository.create({ name });
  }
}
