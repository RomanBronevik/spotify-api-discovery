import { UserModelToken } from './../../constants';
import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Component()
export class UsersService {
  constructor(
    @Inject(UserModelToken) private readonly userModel: Model<User>
  ) {}

  public async create(createUserDto: CreateUserDto): Promise<User> {
    const createUser = new this.userModel(createUserDto);

    try {
      return await createUser.save();
    } catch (e) {
      console.error(e);
    }
  }

  public async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  public async findBySpotifyId(id): Promise<User> {
    return await this.userModel.findOne({ id }).exec();
  }

  public async findOrCreate(createUserDto: CreateUserDto): Promise<User> {
    let user;
    try {
      user = await this.findBySpotifyId(createUserDto.id);
    } catch (error) {
      console.error(error);
    }

    if (!user) {
      return await this.create(createUserDto);
    } else {
      return user;
    }
  }
}
