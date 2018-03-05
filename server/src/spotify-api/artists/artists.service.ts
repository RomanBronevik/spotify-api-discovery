import { AxiosResponse, AxiosError } from 'axios';
import { Component } from '@nestjs/common';
import * as querystring from 'querystring';

import { SpotifyClient } from './../../http/spotify.client';
import { SpotifyAlbum } from './../albums/classes/spotify-album.class';
import { SpotifyTrack } from './../tracks/classes/spotify-track.class';
import { SpotifyArtist } from './classes/spotify-artist.class';

/**
 * Wrapper around artists catefory of spotify Web API service
 *
 * @export
 * @class ArtistsService
 */
@Component()
export class ArtistsService {
  /**
   * Creates an instance of ArtistsService.
   *
   * @param {SpotifyClient} spotifyClient
   * @memberof ArtistsService
   */
  constructor(private spotifyClient: SpotifyClient) {}

  /**
   * Get an Artist
   *
   * @param {string} accessToken
   * @param {string} id
   * @returns {Promise<Artist>}
   * @memberof ArtistsService
   */
  public async getArtist(
    accessToken: string,
    id: string
  ): Promise<SpotifyArtist> {
    let response: AxiosResponse<SpotifyArtist>;

    try {
      response = await this.spotifyClient.get<SpotifyArtist>(
        `/artists/${id}`,
        accessToken
      );
    } catch (error) {
      console.error(error);
    }

    return response.data;
  }

  /**
   * Get Several Artists
   *
   * @param {string} accessToken
   * @param {string} ids
   * @returns {Promise<SpotifyArtist[]>}
   * @memberof ArtistsService
   */
  public async getSeveralArtists(
    accessToken: string,
    ids: string
  ): Promise<SpotifyArtist[]> {
    let response: AxiosResponse<SpotifyArtist[]>;

    try {
      response = await this.spotifyClient.get<SpotifyArtist[]>(
        `/artists?ids=${ids}`,
        accessToken
      );
    } catch (error) {
      console.error(error);
    }

    return response.data;
  }

  /**
   * Get an Artist's Albums
   *
   * @param {string} accessToken
   * @param {string} id
   * @param {string} [albumType]
   * @param {string} [market]
   * @param {number} [limit]
   * @param {number} [offset]
   * @returns {Promise<SpotifyAlbum[]>}
   * @memberof ArtistsService
   */
  public async getArtistAlbums(
    accessToken: string,
    id: string,
    albumType?: string,
    market?: string,
    limit?: number,
    offset?: number
  ): Promise<SpotifyAlbum[]> {
    let response: AxiosResponse<SpotifyAlbum[]>;

    try {
      response = await this.spotifyClient.get<SpotifyAlbum[]>(
        `/artists/${id}/albums${
          albumType || market || limit || offset
            ? `?${querystring.stringify({
                albumType,
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
   * Get an Artist's Top Tracks
   *
   * @param {string} accessToken
   * @param {string} id
   * @param {string} [country]
   * @returns {Promise<SpotifyTrack[]>}
   * @memberof ArtistsService
   */
  public async getArtistTopTracks(
    accessToken: string,
    id: string,
    country?: string
  ): Promise<SpotifyTrack[]> {
    let response: AxiosResponse<SpotifyTrack[]>;

    try {
      response = await this.spotifyClient.get<SpotifyTrack[]>(
        `artists/${id}/top-tracks${country ? `?country=${country}` : ''}`,
        accessToken
      );
    } catch (error) {
      console.error(error);
    }

    return response.data;
  }

  /**
   * Get an Artist's Related Artists
   *
   * @param {string} accessToken
   * @param {string} id
   * @returns {Promise<SpotifyArtist[]>}
   * @memberof ArtistsService
   */
  public async getArtistRelatedArtists(
    accessToken: string,
    id: string
  ): Promise<SpotifyArtist[]> {
    let response: AxiosResponse<SpotifyArtist[]>;

    try {
      response = await this.spotifyClient.get<SpotifyArtist[]>(
        `/artists/${id}/related-artists`,
        accessToken
      );
    } catch (error) {
      console.error(error);
    }

    return response.data;
  }
}
