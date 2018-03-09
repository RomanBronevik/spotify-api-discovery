import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query
} from '@nestjs/common';

import { SpotifyImage } from '../types/classes/spotify-image.class';
import { SpotifyPaging } from '../types/classes/spotify-paging.class';
import { AccessToken } from './../../authentication/access-token.decorator';
import { SpotifySimplifiedPlaylist } from './../types/classes/spotify-simplified-playlist.class';
import { SpotifyBase64Image } from './../types/types/spotify-base-64-image.type';
import { SpotifyPlaylistTrackPosition } from './../types/types/spotify-playlist-track-position.type';
import { SpotifySnapshotID } from './../types/types/spotify-snapshot-id.type';
import { SpotifyPlaylist } from './classes/spotify-playlist.class';
import { PlaylistsService } from './playlists.service';
import { SpotifyPlaylistTrack } from './classes/spotify-playlist-track.class';

/**
 * PlaylistsController
 *
 * @export
 * @class PlaylistsController
 */
@Controller()
export class PlaylistsController {
  /**
   * Creates an instance of PlaylistsController.
   *
   * @param {PlaylistsService} playlistsService
   * @memberof PlaylistsController
   */
  constructor(private readonly playlistsService: PlaylistsService) {}

  /**
   * Add Tracks to a Playlist
   *
   * @param {string} accessToken
   * @param {string} userID
   * @param {string} playlistID
   * @param {string} [uris]
   * @param {number} [position]
   * @returns {Promise<SpotifySnapshotID>}
   * @memberof PlaylistsController
   */
  @Post('users/:user_id/playlists/:playlist_id/tracks')
  async addTracksToPlaylist(
    @AccessToken() accessToken: string,
    @Param('user_id') userID: string,
    @Param('playlist_id') playlistID: string,
    @Query('uris') uris?: string,
    @Query('position') position?: number
  ): Promise<SpotifySnapshotID> {
    return await this.playlistsService.addTracksToPlaylist(
      accessToken,
      userID,
      playlistID,
      uris.split(','),
      position
    );
  }

  /**
   * Change a Playlist's Details
   *
   * @param {string} accessToken
   * @param {string} userID
   * @param {string} playlistID
   * @param {string} [name]
   * @param {boolean} [isPublic]
   * @param {boolean} [collaborative]
   * @param {string} [description]
   * @returns {Promise<void>}
   * @memberof PlaylistsController
   */
  @Put('users/:user_id/playlists/:playlist_id')
  async changePlaylistDetails(
    @AccessToken() accessToken: string,
    @Param('user_id') userID: string,
    @Param('playlist_id') playlistID: string,
    @Query('name') name?: string,
    @Query('public') isPublic?: boolean,
    @Query('collaborative') collaborative?: boolean,
    @Query('description') description?: string
  ): Promise<void> {
    return await this.playlistsService.changePlaylistDetails(
      accessToken,
      userID,
      playlistID,
      name,
      isPublic,
      collaborative,
      description
    );
  }

  /**
   * Create a Playlist
   *
   * @param {string} accessToken
   * @param {string} userID
   * @param {string} [name]
   * @param {boolean} [isPublic]
   * @param {boolean} [collaborative]
   * @param {string} [description]
   * @returns {Promise<SpotifyPlaylist>}
   * @memberof PlaylistsController
   */
  @Post('users/:user_id/playlists')
  async createPlaylist(
    @AccessToken() accessToken: string,
    @Param('user_id') userID: string,
    @Query('name') name?: string,
    @Query('public') isPublic?: boolean,
    @Query('collaborative') collaborative?: boolean,
    @Query('description') description?: string
  ): Promise<SpotifyPlaylist> {
    return await this.playlistsService.createPlaylist(
      accessToken,
      userID,
      name,
      isPublic,
      collaborative,
      description
    );
  }

  /**
   * Get a List of Current User's Playlists
   *
   * @param {string} accessToken
   * @param {number} [limit]
   * @param {number} [offset]
   * @returns {Promise<SpotifyPaging<SpotifySimplifiedPlaylist>>}
   * @memberof PlaylistsController
   */
  @Get('me/playlists')
  async getCurrentUserPlaylists(
    @AccessToken() accessToken: string,
    @Query('limit') limit?: number,
    @Query('offset') offset?: number
  ): Promise<SpotifyPaging<SpotifySimplifiedPlaylist>> {
    return await this.playlistsService.getCurrentUserPlaylists(
      accessToken,
      limit,
      offset
    );
  }

  /**
   * Get a List of a User's Playlists
   *
   * @param {string} accessToken
   * @param {string} userID
   * @param {number} [limit]
   * @param {number} [offset]
   * @returns {Promise<SpotifyPaging<SpotifySimplifiedPlaylist>>}
   * @memberof PlaylistsController
   */
  @Get('users/:user_id/playlists')
  async getUserPlaylists(
    @AccessToken() accessToken: string,
    @Param('user_id') userID: string,
    @Query('limit') limit?: number,
    @Query('offset') offset?: number
  ): Promise<SpotifyPaging<SpotifySimplifiedPlaylist>> {
    return await this.playlistsService.getUserPlaylists(
      accessToken,
      userID,
      limit,
      offset
    );
  }

  /**
   * Get a Playlist
   *
   * @param {string} accessToken
   * @param {string} userID
   * @param {string} playlistID
   * @returns {Promise<SpotifyPlaylist>}
   * @memberof PlaylistsController
   */
  @Get('users/:user_id/playlists/:playlist_id')
  async getPlaylist(
    @AccessToken() accessToken: string,
    @Param('user_id') userID: string,
    @Param('playlist_id') playlistID: string
  ): Promise<SpotifyPlaylist> {
    return await this.playlistsService.getPlaylist(
      accessToken,
      userID,
      playlistID
    );
  }

  /**
   * Get a Playlist Cover Image
   *
   * @param {string} accessToken
   * @param {string} userID
   * @param {string} playlistID
   * @returns {Promise<SpotifyImage[]>}
   * @memberof PlaylistsController
   */
  @Get('/users/:user_id/playlists/:playlist_id/images')
  async getPlaylistCoverImage(
    @AccessToken() accessToken: string,
    @Param('user_id') userID: string,
    @Param('playlist_id') playlistID: string
  ): Promise<SpotifyImage[]> {
    return await this.playlistsService.getPlaylistCoverImage(
      accessToken,
      userID,
      playlistID
    );
  }

  /**
   * Get a Playlist's Tracks
   *
   * @param {string} accessToken
   * @param {string} userID
   * @param {string} playlistID
   * @param {number} [limit]
   * @param {number} [offset]
   * @param {number} [market]
   * @returns {Promise<SpotifyPaging<SpotifyPlaylistTrack>>}
   * @memberof PlaylistsController
   */
  @Get('users/:user_id/playlists/:playlist_id/images')
  async getPlaylistTracks(
    @AccessToken() accessToken: string,
    @Param('user_id') userID: string,
    @Param('playlist_id') playlistID: string,
    @Query('limit') limit?: number,
    @Query('offset') offset?: number,
    market?: number
  ): Promise<SpotifyPaging<SpotifyPlaylistTrack>> {
    return await this.getPlaylistTracks(
      accessToken,
      userID,
      playlistID,
      limit,
      offset
    );
  }

  /**
   * Remove Tracks from a Playlist
   *
   * @param {string} accessToken
   * @param {string} userID
   * @param {string} playlistID
   * @param {(string[] | SpotifyPlaylistTrackPosition[])} tracks
   * @returns {Promise<SpotifySnapshotID>}
   * @memberof PlaylistsController
   */
  @Delete('users/:user_id/playlists/:playlist_id/tracks')
  async removeTracksFromPlaylist(
    @AccessToken() accessToken: string,
    @Param('user_id') userID: string,
    @Param('playlist_id') playlistID: string,
    @Body('tracks') tracks: string[] | SpotifyPlaylistTrackPosition[]
  ): Promise<SpotifySnapshotID> {
    return await this.playlistsService.removeTracksFromPlaylist(
      accessToken,
      userID,
      playlistID,
      tracks
    );
  }

  /**
   * Reorder a Playlist's Tracks
   *
   * @param {string} accessToken
   * @param {string} userID
   * @param {string} playlistID
   * @param {number} rangeStart
   * @param {number} insertBefore
   * @param {number} [rangeLength]
   * @param {SpotifySnapshotID} [snapshotID]
   * @returns {Promise<SpotifySnapshotID>}
   * @memberof PlaylistsController
   */
  @Put('users/:user_id/playlists/:playlist_id/tracks')
  async reorderPlaylistTracks(
    @AccessToken() accessToken: string,
    @Param('user_id') userID: string,
    @Param('playlist_id') playlistID: string,
    @Body('range_start') rangeStart: number,
    @Body('insert_before') insertBefore: number,
    @Body('range_length') rangeLength?: number,
    @Body('snapshot_id') snapshotID?: SpotifySnapshotID
  ): Promise<SpotifySnapshotID> {
    return await this.playlistsService.reorderPlaylistTracks(
      accessToken,
      userID,
      playlistID,
      rangeStart,
      insertBefore,
      rangeLength,
      snapshotID
    );
  }

  /**
   * Replace a Playlist's Tracks
   *
   * @param {string} accessToken
   * @param {string} userID
   * @param {string} playlistID
   * @param {string} [uris]
   * @returns {Promise<void>}
   * @memberof PlaylistsController
   */
  @Put('users/:user_id/playlists/:playlist_id/tracks')
  async replacePlaylistTracks(
    @AccessToken() accessToken: string,
    @Param('user_id') userID: string,
    @Param('playlist_id') playlistID: string,
    @Query('uris') uris?: string
  ): Promise<void> {
    return await this.playlistsService.replacePlaylistTracks(
      accessToken,
      userID,
      playlistID,
      uris.split(',')
    );
  }

  /**
   * Upload a Custom Playlist Cover Image
   *
   * @param {string} accessToken
   * @param {string} userID
   * @param {string} playlistID
   * @param {SpotifyBase64Image} image
   * @returns {Promise<void>}
   * @memberof PlaylistsController
   */
  @Put('users/:user_id/playlists/:playlist_id/images')
  async uploadCustomPlaylistCoverImage(
    @AccessToken() accessToken: string,
    @Param('user_id') userID: string,
    @Param('playlist_id') playlistID: string,
    @Body() image: SpotifyBase64Image
  ): Promise<void> {
    return await this.playlistsService.uploadCustomPlaylistCoverImage(
      accessToken,
      userID,
      playlistID,
      image
    );
  }
}
