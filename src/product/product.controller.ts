import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('all')
  async findAll(@Res() response) {
    const allProducts = await this.productService.findAll();
    return response.status(200).json(allProducts);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() response) {
    const product = await this.productService.findOne(id);
    return response.status(200).send({ product });
  }

  @Post('create')
  async create(@Body() createProductDto: CreateProductDto, @Res() response) {
    const product = await this.productService.create(createProductDto);
    return response.status(201).send(product);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() response) {
    const product = await this.productService.delete(id);

    return response.status(200).json({ message: product });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
    @Res() response,
  ) {
    const updateProduct = await this.productService.update(
      id,
      updateProductDto,
    );
    return response.status(200).json(updateProduct);
  }
}
