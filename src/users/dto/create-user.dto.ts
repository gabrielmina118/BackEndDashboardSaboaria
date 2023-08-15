import { IsString, IsNumber, IsEmail } from 'class-validator';

// Define o tipo de manipulção de dados.
export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly age: number;

  @IsEmail({}, { each: true })
  readonly email: string[];
}

// Valida os dados com decorators
