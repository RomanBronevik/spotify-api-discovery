import { SpotifyTrackAPIResponse } from './interfaces/spotify-track-api-response.interface';
import { AxiosResponse } from 'axios';
import { Component } from '@nestjs/common';

import { SpotifyClient } from './../../http/spotify.client';
import { SpotifyTrack } from './classes/spotify-track.class';

/**
 * TracksService
 *
 * @export
 * @class TracksService
 */
@Component()
export class TracksService {
  /**
   * Creates an instance of TracksService.
   *
   * @param {SpotifyClient} spotifyClient
   * @memberof TracksService
   */
  constructor(private readonly spotifyClient: SpotifyClient) {}

  /**
   * Get a Track
   *
   * @param {string} accessToken
   * @param {string} id
   * @param {string} [market]
   * @returns {Promise<SpotifyTrack>}
   * @memberof TracksController
   */
  public async getTrack(
    accessToken: string,
    id: string,
    market?: string
  ): Promise<SpotifyTrack> {
    let response: AxiosResponse<SpotifyTrackAPIResponse>;

    try {
      response = await this.spotifyClient.get<SpotifyTrackAPIResponse>(
        `/tracks?id=${id}${market ? `?market=${market}` : ''}`,
        accessToken
      );
    } catch (error) {
      console.error(error);
    }

    const track = new SpotifyTrack(response.data);

    return track;
  }

  /**
   * Get Several Tracks
   *
   * @param {string} accessToken
   * @param {string} ids
   * @param {string} [market]
   * @returns {Promise<SpotifyTrack>}
   * @memberof TracksController
   */
  public async getSeveralTracks(
    accessToken: string,
    ids: string,
    market?: string
  ): Promise<SpotifyTrack[]> {
    let response: AxiosResponse<{ tracks: SpotifyTrackAPIResponse[] }>;

    try {
      response = await this.spotifyClient.get<{
        tracks: SpotifyTrackAPIResponse[];
      }>(`/tracks?ids=${ids}${market ? `?market=${market}` : ''}`, accessToken);
    } catch (error) {
      console.error(error);
    }

    const tracks = response.data.tracks.map(track => new SpotifyTrack(track));

    return tracks;
  }
}
