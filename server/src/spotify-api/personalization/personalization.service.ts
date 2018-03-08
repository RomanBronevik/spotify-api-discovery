import { SpotifyTimeRange } from './../types/types/spotify-time-range.type';
import { AxiosResponse } from 'axios';
import { SpotifyTrackAPIResponse } from './../tracks/interfaces/spotify-track-api-response.interface';
import { SpotifyArtistAPIResponse } from './../artists/interfaces/spotify-artist-api-response.interface';
import { SpotifyPagingAPIResponse } from './../types/interfaces/spotify-paging-api-response.interface';
import { Component } from '@nestjs/common';

import { SpotifyClient } from '../../http/spotify.client';
import { SpotifyArtist } from '../artists/classes/spotify-artist.class';
import { SpotifyTrack } from '../tracks/classes/spotify-track.class';
import { SpotifyPaging } from '../types/classes/spotify-paging.class';
import { SpotifyEntityType } from '../types/types/spotify-entity-type.type';

/**
 * PersonalizationService
 *
 * @export
 * @class PersonalizationService
 */
@Component()
export class PersonalizationService {
  /**
   * Creates an instance of PersonalizationService.
   *
   * @param {SpotifyClient} spotifyClient
   * @memberof PersonalizationService
   */
  constructor(private readonly spotifyClient: SpotifyClient) {}

  /**
   * Get User top Artists
   *
   * @param {string} accessToken
   * @param {number} [limit]
   * @param {number} [offset]
   * @param {SpotifyTimeRange} [timeRange]
   * @returns {Promise<SpotifyPaging<SpotifyArtist>>}
   * @memberof PersonalizationService
   */
  public async getUserTopArtists(
    accessToken: string,
    limit?: number,
    offset?: number,
    timeRange?: SpotifyTimeRange
  ): Promise<SpotifyPaging<SpotifyArtist>> {
    let response: AxiosResponse<
      SpotifyPagingAPIResponse<SpotifyArtistAPIResponse>
    >;

    try {
      response = await this.spotifyClient.get<
        SpotifyPagingAPIResponse<SpotifyArtistAPIResponse>
      >(`/me/top/artists`, accessToken);
    } catch (error) {
      console.error(error);
    }

    const topArtists = SpotifyPaging.fromJSON<
      SpotifyArtist,
      SpotifyArtistAPIResponse
    >(
      response.data,
      response.data.items.map(item => SpotifyArtist.fromJSON(item))
    );

    return topArtists;
  }

  /**
   * Get User top Tracks
   *
   * @param {string} accessToken
   * @param {number} [limit]
   * @param {number} [offset]
   * @param {SpotifyTimeRange} [timeRange]
   * @returns {Promise<SpotifyPaging<SpotifyTrack>>}
   * @memberof PersonalizationService
   */
  public async getUserTopTracks(
    accessToken: string,
    limit?: number,
    offset?: number,
    timeRange?: SpotifyTimeRange
  ): Promise<SpotifyPaging<SpotifyTrack>> {
    let response: AxiosResponse<
      SpotifyPagingAPIResponse<SpotifyTrackAPIResponse>
    >;

    try {
      response = await this.spotifyClient.get<
        SpotifyPagingAPIResponse<SpotifyTrackAPIResponse>
      >(`/me/top/artists`, accessToken);
    } catch (error) {
      console.error(error);
    }

    const topTracks = SpotifyPaging.fromJSON<
      SpotifyTrack,
      SpotifyTrackAPIResponse
    >(
      response.data,
      response.data.items.map(item => SpotifyTrack.fromJSON(item))
    );

    return topTracks;
  }
}
