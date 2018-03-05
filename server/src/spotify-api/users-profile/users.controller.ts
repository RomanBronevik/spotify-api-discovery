import { SpotifyUser } from './classes/spotify-user.class';
import { AccessToken } from './../../authentication/access-token.decorator';
import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

/**
 * UsersController
 *
 * @export
 * @class UsersController
 */
@Controller()
export class UsersController {
  /**
   * Creates an instance of UsersController.
   *
   * @param {UsersService} usersService
   * @memberof UsersController
   */
  constructor(private readonly usersService: UsersService) {}

  /**
   * Get Current User's Profile
   *
   * @param {string} accessToken
   * @returns {Promise<SpotifyUser>}
   * @memberof UsersController
   */
  @Get('me')
  async getCurrentUser(
    @AccessToken() accessToken: string
  ): Promise<SpotifyUser> {
    return await this.usersService.getCurrentUser(accessToken);
  }

  /**
   * Get a User's Profile
   *
   * @param {string} accessToken
   * @param {string} id
   * @returns {Promise<SpotifyUser>}
   * @memberof UsersController
   */
  @Get('users/:id')
  async getUser(
    @AccessToken() accessToken: string,
    @Param('id') id: string
  ): Promise<SpotifyUser> {
    return await this.usersService.getUser(accessToken, id);
  }
}
