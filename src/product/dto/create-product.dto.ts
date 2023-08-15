import { IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsString()
  readonly id: string;

  @IsString()
  readonly name: string;

  @IsString()
  readonly photo: string;

  @IsNumber()
  readonly price: number;

  @IsNumber()
  readonly quantity: number;

  @IsString({ each: true })
  readonly ingredients: string[];

  @IsString()
  readonly description: string;

  @IsString()
  readonly size: string;

  @IsString()
  readonly categorieId: string;

  @IsString()
  readonly essenceId: string;
}
