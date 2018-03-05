import { Controller, Get, Param, Query } from '@nestjs/common';

import { AccessToken } from './../../authentication/access-token.decorator';
import { AudioFeaturesService } from './audio-features.service';
import { SpotifyAudioFeatures } from './classes/spotify-audio-features.class';

@Controller('audio-features')
export class AudioFeaturesController {
  constructor(private audioFeaturesService: AudioFeaturesService) {}

  /**
   * Get Audio Features for a Track
   *
   * @param {string} accessToken
   * @param {string} id
   * @returns {Promise<SpotifyAudioFeatures>}
   * @memberof AudioFeaturesController
   */
  @Get(':id')
  getTrackAudioFeatures(
    @AccessToken() accessToken: string,
    @Param('id') id: string
  ): Promise<SpotifyAudioFeatures> {
    return this.audioFeaturesService.getTrackAudioFeatures(accessToken, id);
  }

  /**
   * Get Audio Features for Several Tracks
   *
   * @param {string} accessToken
   * @param {string} ids
   * @returns {Promise<SpotifyAudioFeatures>}
   * @memberof AudioFeaturesController
   */
  @Get()
  getSeveralTracksAudioFeatures(
    @AccessToken() accessToken: string,
    @Query('ids') ids: string
  ): Promise<SpotifyAudioFeatures[]> {
    return this.audioFeaturesService.getSeveralTracksAudioFeatures(
      accessToken,
      ids
    );
  }
}
