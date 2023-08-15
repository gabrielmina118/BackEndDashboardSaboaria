import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { users } from 'src/mock/users';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class UserService {
  findAll() {
    return users;
  }

  findOne(id: string) {
    const user = users.find((user) => user.id === id);

    if (!user) {
      throw new HttpException(
        `Não foi possivel achar usuário com id: ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }

    return user;
  }

  create(userDto: CreateUserDto) {
    users.push({ ...userDto, id: Date.now().toString() });
    return users;
  }

  update(id: string, userDto: UpdateCourseDto) {
    const updateUsers = users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          ...userDto,
        };
      }
      return user;
    });

    return updateUsers;
  }

  delete(id: string) {
    const userFilter = users.filter((user) => {
      return user.id !== id;
    });

    return userFilter;
  }
}
