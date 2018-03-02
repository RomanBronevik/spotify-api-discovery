import { Response, Request } from 'express';

import { UsersService } from './../users/users.service';
import { SpotifyApplicationScopes } from './../../constants';
import { Controller, Get, Res, Req, Query } from '@nestjs/common';
import { environment } from '../../environments/environment';
import axios from 'axios';
import * as querystring from 'querystring';
import { AuthenticationService } from './authentication.service';

@Controller('auth')
export class AuthenticationController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authenticationService: AuthenticationService
  ) {}

  @Get('spotify')
  authorize(@Req() request: Request, @Res() response: Response) {
    this.authenticationService.authorize(response);
  }

  @Get('spotify/callback')
  authorizeCallback(@Req() request, @Res() response, @Query() params) {
    this.authenticationService.getToken(response, params.code);
  }
}
