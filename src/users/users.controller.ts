import {
  // Body,
  Controller,
  Get,
  Post,
  Body,
  Param,
  Res,
  Patch,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  async findAll(@Res() response) {
    const users = await this.userService.findAll();
    return response.status(200).json(users);
  }

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto, @Res() response) {
    const user = await this.userService.create(createUserDto);
    return response.status(201).send(user);
  }

  // desestruturação de id
  @Get(':id')
  async findOne(@Param('id') id: string, @Res() response) {
    const user = await this.userService.findOne(id);
    return response.status(200).send({ user });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Res() response,
  ) {
    const user = await this.userService.update(id, updateUserDto);
    return response.status(200).json({ user });
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() response) {
    const user = await this.userService.delete(id);
    return response.status(200).json({ message: user });
  }
}
