import { SpotifyUserAPIResponse } from './interfaces/spotify-user-api-response.interface';
import { SpotifyUser } from './classes/spotify-user.class';
import { AxiosResponse } from 'axios';
import { SpotifyClient } from './../../http/spotify.client';
import { Component } from '@nestjs/common';

/**
 * UsersService
 *
 * @export
 * @class UsersService
 */
@Component()
export class UsersService {
  /**
   * Creates an instance of UsersService.
   *
   * @param {SpotifyClient} spotifyClient
   * @memberof UsersService
   */
  constructor(private readonly spotifyClient: SpotifyClient) {}

  /**
   * Get Current User's Profile
   *
   * @param {string} accessToken
   * @returns {Promise<SpotifyUser>}
   * @memberof UsersService
   */
  public async getCurrentUser(accessToken: string): Promise<SpotifyUser> {
    let response: AxiosResponse<SpotifyUserAPIResponse>;

    try {
      response = await this.spotifyClient.get<SpotifyUserAPIResponse>(
        '/me',
        accessToken
      );
    } catch (error) {
      console.error(error);
    }

    const user = new SpotifyUser(response.data);

    return user;
  }

  /**
   * Get a User's Profile
   *
   * @param {string} accessToken
   * @param {string} id
   * @returns {Promise<SpotifyUser>}
   * @memberof UsersService
   */
  public async getUser(accessToken: string, id: string): Promise<SpotifyUser> {
    let response: AxiosResponse<SpotifyUserAPIResponse>;

    try {
      response = await this.spotifyClient.get<SpotifyUserAPIResponse>(
        `/users/${id}`,
        accessToken
      );
    } catch (error) {
      console.error(error);
    }

    const user = new SpotifyUser(response.data);

    return user;
  }
}
