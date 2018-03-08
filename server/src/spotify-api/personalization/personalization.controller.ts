import { Controller, Get, Param, Query } from '@nestjs/common';

import { SpotifyPaging } from '../types/classes/spotify-paging.class';
import { SpotifyTimeRange } from '../types/types/spotify-time-range.type';
import { AccessToken } from './../../authentication/access-token.decorator';
import { SpotifyArtist } from './../artists/classes/spotify-artist.class';
import { SpotifyTrack } from './../tracks/classes/spotify-track.class';
import { PersonalizationService } from './personalization.service';

/**
 * PersonalizationController
 *
 * @export
 * @class PersonalizationController
 */
@Controller()
export class PersonalizationController {
  /**
   * Creates an instance of PersonalizationController.
   *
   * @param {PersonalizationService} personalizationService
   * @memberof PersonalizationController
   */
  constructor(
    private readonly personalizationService: PersonalizationService
  ) {}

  /**
   * Get a User's Top Artists and Tracks
   *
   * @param {string} accessToken
   * @param {('artists' | 'tracks')} type
   * @param {number} [limit]
   * @param {number} [offset]
   * @param {SpotifyTimeRange} [timeRange]
   * @returns {(Promise<SpotifyPaging<SpotifyArtist | SpotifyTrack>>)}
   * @memberof PersonalizationController
   */
  @Get('me/top/:type')
  async getUserTopArtistsOrTracks(
    @AccessToken() accessToken: string,
    @Param('type') type: 'artists' | 'tracks',
    @Query('limit') limit?: number,
    @Query('offset') offset?: number,
    @Query('time_range') timeRange?: SpotifyTimeRange
  ): Promise<SpotifyPaging<SpotifyArtist | SpotifyTrack>> {
    switch (type) {
      case 'artists':
        return this.personalizationService.getUserTopArtists(
          accessToken,
          limit,
          offset,
          timeRange
        );
      case 'tracks':
        return this.personalizationService.getUserTopTracks(
          accessToken,
          limit,
          offset,
          timeRange
        );
      default:
        throw Error(
          `Type provided does not match any of the available types: ${type}. Available types are: artists | tracks`
        );
    }
  }
}
