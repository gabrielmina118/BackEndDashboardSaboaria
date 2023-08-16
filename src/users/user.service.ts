import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async findAll() {
    return await this.userRepository.find();
  }

  public async create(userDto: CreateUserDto) {
    const user = this.userRepository.create(userDto);
    return await this.userRepository.save(user);
  }

  public async findOne(id: string): Promise<User> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new NotFoundException(
        `Não foi possivel achar usuário com id: ${id}`,
      );
    }

    return user;
  }

  public async update(id: string, userDto: UpdateUserDto) {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new NotFoundException(
        `Não foi possível achar usuário com id: ${id}`,
      );
    }

    this.userRepository.merge(user, userDto);

    return this.userRepository.save(user);
  }

  public async delete(id: string) {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new NotFoundException(
        `Não foi possível achar usuário com id: ${id}`,
      );
    }

    await this.userRepository.remove(user);
    return `Usuário com id: ${id} removido com sucesso`;
  }
}
