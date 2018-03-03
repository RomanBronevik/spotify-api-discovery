import { Request } from 'express';
import { Model } from 'mongoose';

import { SpotifyClient } from './../http/spotify.client';

import { CreateUserDto } from './dto/create-user.dto';
import { UserModelToken } from './../../constants';
import { User } from './interfaces/user.interface';
import { Component, Inject } from '@nestjs/common';

/**
 * Users utility service
 *
 * @export
 * @class UsersService
 */
@Component()
export class UsersService {
  private readonly currentUserEndpoint: string;

  /**
   * Creates an instance of UsersService.
   *
   * @param {Model<User>} userModel
   * @param {SpotifyClient} spotifyClient
   * @memberof UsersService
   */
  constructor(
    @Inject(UserModelToken) private readonly userModel: Model<User>,
    private readonly spotifyClient: SpotifyClient
  ) {}

  /**
   * Create a user
   *
   * @param {CreateUserDto} createUserDto
   * @returns {Promise<User>}
   * @memberof UsersService
   */
  public async create(createUserDto: CreateUserDto): Promise<User> {
    const createUser = new this.userModel(createUserDto);

    try {
      return await createUser.save();
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * Return all users
   *
   * @returns {Promise<User[]>}
   * @memberof UsersService
   */
  public async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  /**
   * Find a user based on its spotify ID
   *
   * @param {any} id
   * @returns {Promise<User>}
   * @memberof UsersService
   */
  public async findBySpotifyId(id): Promise<User> {
    return await this.userModel.findOne({ id }).exec();
  }

  /**
   * Find a user based on its spotify ID or create it.
   *
   * @param {CreateUserDto} createUserDto
   * @returns {Promise<User>}
   * @memberof UsersService
   */
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

  /**
   * Fetch current user and save it to session
   *
   * @param {Request} request
   * @returns {Promise<User>}
   * @memberof UsersService
   */
  public async fetchCurrentUser(request: Request): Promise<User> {
    if (request.session.user) {
      return request.session.user;
    }

    let response;
    try {
      response = await this.spotifyClient.get<User>(
        '/me',
        request.session.accessToken
      );
    } catch (error) {
      console.error(error);

      return null;
    }

    const createUserDto = new CreateUserDto(response.data);
    const user = await this.findOrCreate(createUserDto);
    request.session.user = user;

    return user;
  }
}
