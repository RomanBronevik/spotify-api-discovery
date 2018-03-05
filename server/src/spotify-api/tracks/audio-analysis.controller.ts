import { Controller, Get, Param } from '@nestjs/common';

import { AccessToken } from './../../authentication/access-token.decorator';
import { AudioAnalysisService } from './audio-analysis.service';
import { SpotifyAudioAnalysis } from './classes/spotify-audio-analysis.class';

@Controller('audio-analysis')
export class AudioAnalysisController {
  /**
   * Creates an instance of AudioAnalysisController.
   *
   * @param {AudioAnalysisService} audioAnalysisService
   * @memberof AudioAnalysisController
   */
  constructor(private audioAnalysisService: AudioAnalysisService) {}

  /**
   * Get Audio Analysis for a Track
   *
   * @param {string} accessToken
   * @param {string} id
   * @returns {Promise<SpotifyAudioAnalysis>}
   * @memberof AudioAnalysisController
   */
  @Get(':id')
  async getTrackAudioAnalysis(
    @AccessToken() accessToken: string,
    @Param('id') id: string
  ): Promise<SpotifyAudioAnalysis> {
    return await this.audioAnalysisService.getTrackAudioAnalysis(
      accessToken,
      id
    );
  }
}
