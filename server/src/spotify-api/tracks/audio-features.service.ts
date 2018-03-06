import { Component } from '@nestjs/common';
import { AxiosResponse } from 'axios';

import { SpotifyClient } from './../../http/spotify.client';
import { SpotifyAudioFeatures } from './classes/spotify-audio-features.class';
import { SpotifyAudioFeaturesAPIResponse } from './interfaces/spotify-audio-features-api-response.interface';

/**
 * AudioFeaturesService
 *
 * @export
 * @class AudioFeaturesService
 */
@Component()
export class AudioFeaturesService {
  /**
   * Creates an instance of AudioFeaturesService.
   *
   * @param {SpotifyClient} spotifyClient
   * @memberof AudioFeaturesService
   */
  constructor(private readonly spotifyClient: SpotifyClient) {}

  /**
   * Get Audio Features for a Track
   *
   * @param {string} accessToken
   * @param {string} id
   * @returns {Promise<SpotifyAudioFeatures>}
   * @memberof AudioFeaturesService
   */
  public async getTrackAudioFeatures(
    accessToken: string,
    id: string
  ): Promise<SpotifyAudioFeatures> {
    let response: AxiosResponse<SpotifyAudioFeaturesAPIResponse>;

    try {
      response = await this.spotifyClient.get<SpotifyAudioFeaturesAPIResponse>(
        `/audio-features/${id}`,
        accessToken
      );
    } catch (error) {
      console.error(error);
    }

    const audioFeatures = SpotifyAudioFeatures.fromJSON(response.data);

    return audioFeatures;
  }

  /**
   * Get Audio Features for Several Tracks
   *
   * @param {string} accessToken
   * @param {string} id
   * @returns {Promise<SpotifyAudioFeatures>}
   * @memberof AudioFeaturesService
   */
  public async getSeveralTracksAudioFeatures(
    accessToken: string,
    ids: string
  ): Promise<SpotifyAudioFeatures[]> {
    let response: AxiosResponse<{
      audio_features: SpotifyAudioFeaturesAPIResponse[];
    }>;

    try {
      response = await this.spotifyClient.get<{
        audio_features: SpotifyAudioFeaturesAPIResponse[];
      }>(`/audio-features/${ids}`, accessToken);
    } catch (error) {
      console.error(error);
    }

    const audioFeatures = response.data.audio_features.map(audioFeatures =>
      SpotifyAudioFeatures.fromJSON(audioFeatures)
    );

    return audioFeatures;
  }
}
