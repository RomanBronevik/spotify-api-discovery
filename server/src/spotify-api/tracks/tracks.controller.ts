import { Controller, Get, Param, Query } from '@nestjs/common';

import { AccessToken } from './../../authentication/access-token.decorator';
import { SpotifyTrack } from './classes/spotify-track.class';
import { TracksService } from './tracks.service';

/**
 * TracksController
 *
 * @export
 * @class TracksController
 */
@Controller('tracks')
export class TracksController {
  /**
   * Creates an instance of TracksController.
   *
   * @param {TracksService} tracksService
   * @memberof TracksController
   */
  constructor(private tracksService: TracksService) {}

  /**
   * Get a Track
   *
   * @param {string} accessToken
   * @param {string} id
   * @param {string} [market]
   * @returns {Promise<SpotifyTrack>}
   * @memberof TracksController
   */
  @Get(':id')
  async getTrack(
    @AccessToken() accessToken: string,
    @Param('id') id: string,
    @Query('market') market?: string
  ): Promise<SpotifyTrack> {
    return await this.tracksService.getTrack(accessToken, id, market);
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
  @Get()
  async getSeveralTracks(
    @AccessToken() accessToken: string,
    @Query('ids') ids: string,
    @Query('market') market?: string
  ): Promise<SpotifyTrack[]> {
    return await this.tracksService.getSeveralTracks(accessToken, ids, market);
  }
}
