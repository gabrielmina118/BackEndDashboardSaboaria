import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Ingredients } from './entities/ingredients.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Product, Ingredients])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
