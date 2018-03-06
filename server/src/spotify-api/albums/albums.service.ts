import { SpotifyAlbumAPIResponse } from './interfaces/spotify-album-api-response.interface';
import { SpotifyPagingAPIResponse } from './../types/interfaces/spotify-paging-api-response.interface';
import { SpotifyTrackAPIResponse } from './../tracks/interfaces/spotify-track-api-response.interface';
import { SpotifyPaging } from './../types/classes/spotify-paging.class';
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
    let response: AxiosResponse<SpotifyAlbumAPIResponse>;
    try {
      response = await this.spotifyClient.get<SpotifyAlbumAPIResponse>(
        `/albums/${albumId}${market ? `?market=${market}` : ''}`,
        accessToken
      );
    } catch (error) {
      console.error(error);
    }

    const album = SpotifyAlbum.fromJSON(response.data);

    return album;
  }

  /**
   * Get an Album's Tracks
   *
   * @param {string} accessToken
   * @param {string} albumId
   * @param {string} [market]
   * @param {number} [limit]
   * @param {number} [offset]
   * @returns {Promise<SpotifyPaging<SpotifyTrack>>}
   * @memberof AlbumsService
   */
  public async getAlbumTracks(
    accessToken: string,
    albumId: string,
    market?: string,
    limit?: number,
    offset?: number
  ): Promise<SpotifyPaging<SpotifyTrack>> {
    let response: AxiosResponse<
      SpotifyPagingAPIResponse<SpotifyTrackAPIResponse>
    >;

    try {
      response = await this.spotifyClient.get<
        SpotifyPagingAPIResponse<SpotifyTrackAPIResponse>
      >(
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

    const tracks = SpotifyPaging.fromJSON<
      SpotifyTrack,
      SpotifyTrackAPIResponse
    >(
      response.data,
      response.data.items.map(item => SpotifyTrack.fromJSON(item))
    );

    return tracks;
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
    let response: AxiosResponse<{ albums: SpotifyAlbumAPIResponse[] }>;

    try {
      response = await this.spotifyClient.get<{
        albums: SpotifyAlbumAPIResponse[];
      }>(`/albums?ids=${ids}${market ? `market=${market}` : ''}`, accessToken);
    } catch (error) {
      console.error(error);
    }

    const albums = response.data.albums.map(album =>
      SpotifyAlbum.fromJSON(album)
    );

    return albums;
  }
}
