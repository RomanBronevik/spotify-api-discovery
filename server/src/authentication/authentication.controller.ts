import { Response, Request } from 'express';

import { UsersService } from './../users/users.service';
import { SpotifyApplicationScopes } from './../../constants';
import { Controller, Get, Res, Req, Query } from '@nestjs/common';
import { environment } from '../../environments/environment';
import axios from 'axios';
import * as querystring from 'querystring';
import { AuthenticationService } from './authentication.service';

/**
 * Authentication controller
 * Handles authorization and token requests
 *
 * @export
 * @class AuthenticationController
 */
@Controller('auth')
export class AuthenticationController {
  /**
   * Creates an instance of AuthenticationController.
   *
   * @param {UsersService} usersService
   * @param {AuthenticationService} authenticationService
   * @memberof AuthenticationController
   */
  constructor(
    private readonly usersService: UsersService,
    private readonly authenticationService: AuthenticationService
  ) {}

  /**
   * Authorize a user on Spotify API
   *
   * @param {Request} request
   * @param {Response} response
   * @memberof AuthenticationController
   */
  @Get('spotify')
  authorize(@Req() request: Request, @Res() response: Response) {
    this.authenticationService.authorize(request, response);
  }

  /**
   * Callback after authorization of the user on the Spotify API
   *
   * @param {Request} request
   * @param {Response} response
   * @memberof AuthenticationController
   */
  @Get('spotify/callback')
  authorizeCallback(@Req() request: Request, @Res() response: Response) {
    this.authenticationService.authorizeCallback(request, response);
  }
}
