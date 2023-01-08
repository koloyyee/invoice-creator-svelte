import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/users/schema/users.schema';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<IUser> {
    const createUser = await this.userModel.create(createUserDto);
    return createUser;
  }

  async findAll(): Promise<IUser[]> {
    return this.userModel.find().exec();
  }

  /**
   *
   * @param {string} username: user's username
   * @returns {IUser}: user with correct username
   */
  async findOne(username: string): Promise<IUser> {
    console.log(username);
    return this.userModel.findOne({ username: username }).exec();
  }

  /**
   *
   * @param {string }userId: user id
   * @returns {IUser}: the user with the id
   */
  async findOneById(userId: string): Promise<IUser> {
    return this.userModel.findOne({ id: userId }).exec();
  }

  async updateOne(userId: string, updateUserDto: UpdateUserDto): Promise<void> {
    this.userModel.findOneAndUpdate(
      { id: userId },
      updateUserDto,
      function (err, user) {
        if (err) return console.log(err);
        return console.log(`successfully updated user ${user.id}.`);
      },
    );
  }
  async deleteOne(userId: string): Promise<any> {
    return this.userModel.deleteOne({ id: userId });
  }
}
