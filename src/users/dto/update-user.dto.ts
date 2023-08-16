import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

// Extende a classe de criação , com todas as validações. Assim fica otimizado.
// O partial indica que as opções são opcionais
export class UpdateUserDto extends PartialType(CreateUserDto) {}
