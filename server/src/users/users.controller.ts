import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { User } from './schema/users.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    if (!createUserDto) return;

    const hashed = await bcrypt.hash('password', 10);
    const isValid = await bcrypt.compare('password', hashed);
    console.log(isValid);

    // const saltOrRound = 10;
    // const hashedPassword = await bcrypt.hash(
    //   createUserDto.password,
    //   saltOrRound,
    // );
    // const body: CreateUserDto = {
    //   ...createUserDto,
    //   password: hashedPassword,
    // };
    // return this.usersService.create(body);
  }

  @Get(':username')
  async findOne(@Param() params): Promise<User> {
    console.log(params.username);
    return this.usersService.findOne(params.username);
  }

  //   @Get(':userId')
  //   async findOneById(@Param() params): Promise<User> {
  //     console.log(params.userId);
  //     return this.usersService.findOneById(params.userId);
  //   }

  @Get('')
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Patch(':userId')
  async updateOne(
    @Param() params,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<void> {
    if (!updateUserDto) return;
    return this.usersService.updateOne(params.userId, updateUserDto);
  }
  @Delete(':userId')
  async deleteOne(@Param() params): Promise<void> {
    return this.usersService.deleteOne(params.userId);
  }
}
