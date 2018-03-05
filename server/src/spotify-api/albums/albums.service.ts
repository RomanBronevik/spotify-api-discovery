import { Component } from '@nestjs/common';
import * as querystring from 'querystring';

import { SpotifyAlbum } from './classes/spotify-album.class';
import { SpotifyClient } from './../../http/spotify.client';
import { SpotifyTrack } from '../tracks/classes/spotify-track.class';
import { AxiosResponse } from 'axios';

/**
 * Wrapper around albums catefory of spotify Web API service
 *
 * @export
 * @class AlbumsService
 */
@Component()
export class AlbumsService {
  /**
   * Creates an instance of AlbumsService.
   *
   * @param {SpotifyClient} spotifyClient
   * @memberof AlbumsService
   */
  constructor(private readonly spotifyClient: SpotifyClient) {}

  /**
   * Get an Album
   *
   * @param {string} accessToken
   * @param {string} albumId
   * @param {string} [market]
   * @returns {Promise<SpotifyAlbum>}
   * @memberof AlbumsService
   */
  public async getAlbum(
    accessToken: string,
    albumId: string,
    market?: string
  ): Promise<SpotifyAlbum> {
    let response: AxiosResponse<SpotifyAlbum>;
    try {
      response = await this.spotifyClient.get<SpotifyAlbum>(
        `/albums/${albumId}${market ? `?market=${market}` : ''}`,
        accessToken
      );
    } catch (error) {
      console.error(error);
    }

    return response.data;
  }

  /**
   * Get an Album's Tracks
   *
   * @param {string} accessToken
   * @param {string} albumId
   * @param {string} [market]
   * @param {number} [limit]
   * @param {number} [offset]
   * @returns {Promise<SpotifyTrack[]>}
   * @memberof AlbumsService
   */
  public async getAlbumTracks(
    accessToken: string,
    albumId: string,
    market?: string,
    limit?: number,
    offset?: number
  ): Promise<SpotifyTrack[]> {
    let response: AxiosResponse<SpotifyTrack[]>;
    try {
      response = await this.spotifyClient.get<SpotifyTrack[]>(
        `/albums/${albumId}/tracks${
          market || limit || offset
            ? `?${querystring.stringify({
                market,
                limit,
                offset
              })}`
            : ''
        }`,
        accessToken
      );
    } catch (error) {
      console.error(error);
    }

    return response.data;
  }

  /**
   * Get Several Albums
   *
   * @param {string} accessToken
   * @param {string} ids
   * @param {string} [market]
   * @returns {Promise<SpotifyAlbum[]>}
   * @memberof AlbumsService
   */
  public async getSeveralAlbums(
    accessToken: string,
    ids: string,
    market?: string
  ): Promise<SpotifyAlbum[]> {
    let response: AxiosResponse<SpotifyAlbum[]>;
    try {
      response = await this.spotifyClient.get<SpotifyAlbum[]>(
        `/albums?ids=${ids}${market ? `market=${market}` : ''}`,
        accessToken
      );
    } catch (error) {
      console.error(error);
    }

    return response.data;
  }
}
