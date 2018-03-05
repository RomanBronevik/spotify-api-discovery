import { SpotifyAudioAnalysisAPIResponse } from './interfaces/spotify-audio-analysis-api-response.interface';
import { SpotifyAudioAnalysis } from './classes/spotify-audio-analysis.class';
import { AxiosResponse } from 'axios';
import { SpotifyClient } from './../../http/spotify.client';
import { Component } from '@nestjs/common';

/**
 * AudioAnalysisService
 *
 * @export
 * @class AudioAnalysisService
 */
@Component()
export class AudioAnalysisService {
  /**
   * Creates an instance of AudioAnalysisService.
   *
   * @param {SpotifyClient} spotifyClient
   * @memberof AudioAnalysisService
   */
  constructor(private readonly spotifyClient: SpotifyClient) {}

  /**
   * Get Audio Analysis for a Track
   *
   * @param {string} accessToken
   * @param {string} id
   * @returns
   * @memberof AudioAnalysisService
   */
  public async getTrackAudioAnalysis(
    accessToken: string,
    id: string
  ): Promise<SpotifyAudioAnalysis> {
    let response: AxiosResponse<SpotifyAudioAnalysisAPIResponse>;

    try {
      response = await this.spotifyClient.get<SpotifyAudioAnalysisAPIResponse>(
        `/audio-analysis/${id}`,
        accessToken
      );
    } catch (error) {
      console.error(error);
    }

    const audioAnalysis = new SpotifyAudioAnalysis(response.data);

    return audioAnalysis;
  }
}
