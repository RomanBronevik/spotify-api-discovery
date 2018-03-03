import { Request, Response } from 'express';

import { User } from './interfaces/user.interface';
import { Controller, Get, Res, Req } from '@nestjs/common';
import { environment } from '../../environments/environment';
import { UsersService } from './users.service';

/**
 * Users controller
 *
 * @export
 * @class UsersController
 */
@Controller('users')
export class UsersController {
  /**
   * Creates an instance of UsersController.
   *
   * @param {UsersService} usersService
   * @memberof UsersController
   */
  constructor(private readonly usersService: UsersService) {}

  /**
   * Get current user
   *
   * @param {Request} request
   * @param {Response} response
   * @returns {Promise<User>}
   * @memberof UsersController
   */
  @Get('me')
  async getCurrentUser(@Req() request: Request): Promise<User> {
    return await this.usersService.fetchCurrentUser(request);
  }
}
