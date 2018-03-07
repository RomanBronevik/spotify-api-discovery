import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Query
} from '@nestjs/common';

import { AccessToken } from './../../authentication/access-token.decorator';
import { SpotifyEntityType } from './../types/types/spotify-entity-type.type';
import { FollowService } from './follow.service';
import { SpotifyArtist } from '../artists/classes/spotify-artist.class';

/**
 * FollowController
 *
 * @export
 * @class FollowController
 */
@Controller()
export class FollowController {
  /**
   * Creates an instance of FollowController.
   *
   * @param {FollowService} followService
   * @memberof FollowController
   */
  constructor(private readonly followService: FollowService) {}

  /**
   * Check if Current User Follows Artists or Users
   *
   * @param {string} accessToken
   * @param {SpotifyEntityType} type
   * @param {string} ids
   * @returns {Promise<Boolean>}
   * @memberof FollowController
   */
  @Get('me/following/contains')
  async doCurrentUserFollowsArtistsOrUsers(
    @AccessToken() accessToken: string,
    @Query('type') type: SpotifyEntityType,
    @Query('ids') ids: string
  ): Promise<Boolean> {
    return await this.followService.doCurrentUserFollowsArtistsOrUsers(
      accessToken,
      type,
      ids.split(',')
    );
  }

  /**
   * Check if Users Follow a Playlist
   *
   * @param {string} accessToken
   * @param {string} ownerID
   * @param {string} playlistID
   * @param {string} ids
   * @returns {Promise<Boolean[]>}
   * @memberof FollowController
   */
  @Get('users/:owner_id/playlists/:playlist_id/followers/contains')
  async doUsersFollowPlaylist(
    @AccessToken() accessToken: string,
    @Param('owner_id') ownerID: string,
    @Param('playlist_id') playlistID: string,
    @Query('ids') ids: string
  ): Promise<Boolean[]> {
    return await this.followService.doUsersFollowPlaylist(
      accessToken,
      ownerID,
      playlistID,
      ids.split(',')
    );
  }

  /**
   * Follow Artists or Users
   *
   * @param {string} accessToken
   * @param {string} ids
   * @returns {Promise<void>}
   * @memberof FollowController
   */
  @Put('me/following')
  async followArtistsOrUsers(
    @AccessToken() accessToken: string,
    @Query('ids') ids: string
  ): Promise<void> {
    return await this.followService.followArtistsOrUsers(
      accessToken,
      ids.split(',')
    );
  }

  /**
   * Follow a Playlist
   *
   * @param {string} accessToken
   * @param {string} ownerID
   * @param {string} playlistID
   * @param {boolean} [isPublic]
   * @returns {Promise<void>}
   * @memberof FollowController
   */
  @Put('/users/:owner_id/playlists/:playlist_id/followers')
  async followPlaylist(
    @AccessToken() accessToken: string,
    @Query('owner_id') ownerID: string,
    @Query('playlist_id') playlistID: string,
    @Body('public') isPublic?: boolean
  ): Promise<void> {
    return await this.followService.followPlaylist(
      accessToken,
      ownerID,
      playlistID,
      isPublic
    );
  }

  /**
   * Get User's Followed Artists
   *
   * @param {string} accessToken
   * @param {string} [type]
   * @param {number} [limit]
   * @param {string} [after]
   * @returns {Promise<SpotifyCursorBasedPaging<SpotifyArtist>>}
   * @memberof FollowController
   */
  @Get('me/following')
  async getCurrentUserFollowedArtists(
    @AccessToken() accessToken: string,
    @Query('type') type?: string,
    @Query('limit') limit?: number,
    @Query('after') after?: string
  ): Promise<SpotifyCursorBasedPaging<SpotifyArtist>> {
    return await this.followService(accessToken, type, limit, after);
  }

  /**
   * Unfollow Artists or Users
   *
   * @param {string} accessToken
   * @param {string} [ids]
   * @returns {Promise<void>}
   * @memberof FollowController
   */
  @Delete('me/following')
  async unfollowArtistsOrUsers(
    @AccessToken() accessToken: string,
    @Query('ids') ids?: string
  ): Promise<void> {
    return await this.followService.unfollowArtistsOrUsers(accessToken, ids);
  }

  /**
   * Unfollow a Playlist
   *
   * @param {string} accessToken
   * @param {string} ownerID
   * @param {string} playlistID
   * @returns {Promise<void>}
   * @memberof FollowController
   */
  @Delete('/users/:owner_id/playlists/:playlist_id/followers')
  async unfollowPlaylist(
    @AccessToken() accessToken: string,
    @Query('owner_id') ownerID: string,
    @Query('playlist_id') playlistID: string
  ): Promise<void> {
    return await this.followService.unfollowPlaylist(
      accessToken,
      ownerID,
      playlistID
    );
  }
}
