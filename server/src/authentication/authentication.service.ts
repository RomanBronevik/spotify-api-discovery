import { Response } from 'express';
import { Component } from '@nestjs/common';
import * as querystring from 'querystring';

import { environment } from './../../environments/environment';
import { UsersService } from './../users/users.service';
import { HttpService } from './../http/http.service';
import { SpotifyApplicationScopes } from './../../constants';

@Component()
export class AuthenticationService {
  private readonly authorizeURL: string;
  private readonly redirectURI: string;
  private readonly sucessAuthenticationURL: string;
  private readonly tokenURL: string;
  private readonly refreshTokenURL: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly usersService: UsersService
  ) {
    this.authorizeURL = `${environment.spotify.accountsBaseURL}/authorize?`;
    this.redirectURI = `${environment.server.url}/auth/spotify/callback`;
    this.sucessAuthenticationURL = `${environment.front.url}/login/success`;
    this.tokenURL = `${environment.spotify.accountsBaseURL}/api/token`;
  }

  public authorize(response: Response) {
    response.redirect(
      this.authorizeURL +
        querystring.stringify({
          client_id: environment.spotify.clientId,
          response_type: 'code',
          redirect_uri: this.redirectURI,
          scope: SpotifyApplicationScopes.reduce(
            (acc, value) => `${acc} ${value}`,
            ''
          )
        })
    );
  }

  // @TODO implement state mismatch checking to avoid man in the middle
  public async getToken(response: Response, code: string) {
    let responseBody;

    try {
      responseBody = await this.httpService.post(
        this.tokenURL,
        querystring.stringify({
          code,
          grant_type: 'authorization_code',
          redirect_uri: this.redirectURI
        }),
        {
          headers: {
            Authorization: `Basic ${Buffer.from(
              `${environment.spotify.clientId}:${
                environment.spotify.clientSecret
              }`
            ).toString('base64')}`
          }
        }
      );
    } catch (error) {
      console.error(error);
    }

    // @TODO move to usersService
    let userResponse;
    try {
      userResponse = await this.httpService.get(
        `${environment.spotify.apiBaseURL}/me`,
        {
          headers: {
            Authorization: `Bearer ${responseBody.data.access_token}`
          }
        }
      );
    } catch (error) {
      console.error(error);
    }

    console.log(userResponse.data);

    response.redirect(this.sucessAuthenticationURL);
  }
}
