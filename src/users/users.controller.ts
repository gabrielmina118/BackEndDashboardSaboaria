import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  Patch,
  Delete,
} from '@nestjs/common';
import { IUser, users } from 'src/mock/users';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  findAll(@Res() response): IUser[] {
    return response.status(200).json(users);
  }

  // desestruturação de id
  @Get(':id')
  findOne(@Param('id') id: string, @Res() response): string | IUser {
    const findUser = this.userService.findOne(id);

    return response.status(200).send({ message: findUser });
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() response): IUser[] {
    const removeuser = this.userService.delete(id);

    return response.status(200).json({ users: removeuser });
  }

  @Post('create')
  create(@Body() createUserDto: CreateUserDto, @Res() response) {
    this.userService.create(createUserDto);
    return response.status(201).send(createUserDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateCourseDto,
    @Res() response,
  ) {
    const updateUsers = this.userService.update(id, updateUserDto);
    return response.status(200).send({ message: updateUsers });
  }
}
