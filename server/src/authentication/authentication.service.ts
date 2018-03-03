import { StringService } from './../utils/services/string.service';
import { Request, Response } from 'express';
import { Component } from '@nestjs/common';
import * as querystring from 'querystring';

import { environment } from './../../environments/environment';
import { UsersService } from './../users/users.service';
import { HttpService } from './../http/http.service';
import {
  SpotifyApplicationScopes,
  spotifyAuthorizeURL,
  spotifyCallbackURL,
  loginSuccessURL,
  loginFailureURL,
  spotifyTokenURL,
  spotifyAuthStateKey
} from './../../constants';

/**
 * @export
 * @class AuthenticationService
 */
@Component()
export class AuthenticationService {
  private readonly spotifyClientId: string;
  private readonly spotifyClientSecret: string;
  private readonly authorizeURL: string;
  private readonly redirectURI: string;
  private readonly sucessAuthenticationURL: string;
  private readonly failureAuthenticationURL: string;
  private readonly tokenURL: string;
  private readonly refreshTokenURL: string;
  private readonly stateKey: string;

  /**
   * Creates an instance of AuthenticationService.
   *
   * @param {HttpService} httpService
   * @param {UsersService} usersService
   * @param {StringService} stringService
   * @memberof AuthenticationService
   */
  constructor(
    private readonly httpService: HttpService,
    private readonly usersService: UsersService,
    private readonly stringService: StringService
  ) {
    this.spotifyClientId = environment.spotify.clientId;
    this.spotifyClientSecret = environment.spotify.clientSecret;
    this.authorizeURL = spotifyAuthorizeURL;
    this.redirectURI = spotifyCallbackURL;
    this.sucessAuthenticationURL = loginSuccessURL;
    this.failureAuthenticationURL = loginFailureURL;
    this.tokenURL = spotifyTokenURL;
    this.stateKey = spotifyAuthStateKey;
  }

  /**
   * Authorization to Spotify API
   *
   * @param {Request} request
   * @param {Response} response
   * @memberof AuthenticationService
   */
  public authorize(request: Request, response: Response) {
    const state = this.stringService.generateRandomString(16);
    request.session[this.stateKey] = state;

    response.redirect(
      `${this.authorizeURL}?${querystring.stringify({
        client_id: this.spotifyClientId,
        response_type: 'code',
        redirect_uri: this.redirectURI,
        scope: SpotifyApplicationScopes.reduce(
          (acc, value) => `${acc} ${value}`,
          ''
        ),
        state
      })}`
    );
  }

  /**
   * Authorize callback
   *
   * @param {Request} request
   * @param {Response} response
   * @returns
   * @memberof AuthenticationService
   */
  public async authorizeCallback(request: Request, response: Response) {
    let tokenResponse;

    const code = request.query.code || null;
    const state = request.query.state || null;
    const storedState = request.session ? request.session[this.stateKey] : null;

    if (state === null || state !== storedState) {
      response.redirect(
        `${this.failureAuthenticationURL}?error=state_mismatch`
      );
      return;
    }

    try {
      tokenResponse = await this.httpService.post(
        this.tokenURL,
        querystring.stringify({
          code,
          grant_type: 'authorization_code',
          redirect_uri: this.redirectURI
        }),
        {
          headers: {
            Authorization: `Basic ${Buffer.from(
              `${this.spotifyClientId}:${this.spotifyClientSecret}`
            ).toString('base64')}`
          }
        }
      );
    } catch (error) {
      console.error(error);
    }

    const { access_token, refresh_token } = tokenResponse.data;
    request.session.refreshToken = refresh_token;
    request.session.accessToken = access_token;
    response.redirect(
      `${
        this.sucessAuthenticationURL
      }?access_token=${access_token}&refresh_token=${refresh_token}`
    );
  }
}
