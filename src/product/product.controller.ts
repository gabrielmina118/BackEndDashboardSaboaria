import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { products } from 'src/mock/users';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('all')
  findAll(@Res() response) {
    return response.status(200).json(products);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Res() response) {
    const product = this.productService.findOne(id);
    return response.status(200).send({ product });
  }

  @Post('create')
  create(@Body() createProductDto: CreateProductDto, @Res() response) {
    const product = this.productService.create(createProductDto);
    return response.status(201).send(product);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() response) {
    const product = this.productService.delete(id);

    return response.status(200).json({ product });
  }
}
