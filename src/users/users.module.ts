import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Email } from './entities/email.entity';
@Module({
  imports: [TypeOrmModule.forFeature([User, Email])],
  controllers: [UsersController],
  providers: [UserService],
})
export class UsersModule {}
