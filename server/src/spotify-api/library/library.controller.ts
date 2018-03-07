import { SpotifySavedAlbum } from './../types/classes/spotify-saved-album.class';
import { AccessToken } from './../../authentication/access-token.decorator';
import { LibraryService } from './library.service';
import { Controller, Query, Get, Delete, Put } from '@nestjs/common';
import { SpotifySavedTrack } from '../types/classes/spotify-saved-track.class';
import { SpotifyPaging } from '../types/classes/spotify-paging.class';

/**
 * LibraryController
 *
 * @export
 * @class LibraryController
 */
@Controller()
export class LibraryController {
  /**
   * Creates an instance of LibraryController.
   *
   * @param {LibraryService} libraryService
   * @memberof LibraryController
   */
  constructor(private readonly libraryService: LibraryService) {}

  /**
   * Check User's Saved Albums
   *
   * @param {string} accessToken
   * @param {string} ids
   * @returns {Promise<Boolean[]>}
   * @memberof LibraryController
   */
  @Get('me/albums/contains')
  async checkUserSavedAlbums(
    @AccessToken() accessToken: string,
    @Query('ids') ids: string
  ): Promise<Boolean[]> {
    return await this.libraryService.checkUserSavedAlbums(
      accessToken,
      ids.split(',')
    );
  }

  /**
   * Check User's Saved Tracks
   *
   * @param {string} accessToken
   * @param {string} ids
   * @returns {Promise<Boolean[]>}
   * @memberof LibraryController
   */
  @Get('me/tracks/contains')
  async checkUserSavedTracks(
    @AccessToken() accessToken: string,
    @Query('ids') ids: string
  ): Promise<Boolean[]> {
    return await this.libraryService.checkUserSavedTracks(
      accessToken,
      ids.split(',')
    );
  }

  /**
   * Get Current User's Saved Albums
   *
   * @param {any} accessToken
   * @param {number} [limit]
   * @param {number} [offset]
   * @param {string} [market]
   * @returns {Promise<SpotifyPaging<SpotifySavedAlbum>>}
   * @memberof LibraryController
   */
  @Get('me/albums')
  async getCurrentUserSavedAlbums(
    @AccessToken() accessToken,
    @Query('limit') limit?: number,
    @Query('offset') offset?: number,
    @Query('market') market?: string
  ): Promise<SpotifyPaging<SpotifySavedAlbum>> {
    return await this.libraryService.getCurrentUserSavedAlbums(
      accessToken,
      limit,
      offset,
      market
    );
  }

  /**
   * Get a User's Saved Tracks
   *
   * @param {string} accessToken
   * @param {number} [limit]
   * @param {number} [offset]
   * @param {string} [market]
   * @returns {Promise<SpotifyPaging<SpotifySavedTrack>>}
   * @memberof LibraryController
   */
  @Get('me/tracks')
  async getCurrentUserSavedTracks(
    @AccessToken() accessToken: string,
    @Query('limit') limit?: number,
    @Query('offset') offset?: number,
    @Query('market') market?: string
  ): Promise<SpotifyPaging<SpotifySavedTrack>> {
    return await this.libraryService.getCurrentUserSavedTracks(
      accessToken,
      limit,
      offset,
      market
    );
  }

  /**
   * Remove Albums for Current User
   *
   * @param {string} accessToken
   * @param {string} ids
   * @returns {Promise<void>}
   * @memberof LibraryController
   */
  @Delete('me/albums')
  async removeAlbumsForCurrentUser(
    @AccessToken() accessToken: string,
    @Query('ids') ids: string
  ): Promise<void> {
    return await this.libraryService.removeAlbumsForCurrentUser(
      accessToken,
      ids.split(',')
    );
  }

  /**
   * Remove User's Saved Tracks
   *
   * @param {string} accessToken
   * @param {string} ids
   * @returns {Promise<void>}
   * @memberof LibraryController
   */
  @Delete('me/tracks')
  async removeUserSavedTracks(
    @AccessToken() accessToken: string,
    @Query('ids') ids: string
  ): Promise<void> {
    return await this.libraryService.removeUserSavedTracks(
      accessToken,
      ids.split(',')
    );
  }

  /**
   * Save Albums for Current User
   *
   * @param {string} accessToken
   * @param {string} ids
   * @returns {Promise<void>}
   * @memberof LibraryController
   */
  @Put('me/albums')
  async saveAlbumsForCurrentUser(
    @AccessToken() accessToken: string,
    @Query('ids') ids: string
  ): Promise<void> {
    return await this.libraryService.saveAlbumsForCurrentUser(
      accessToken,
      ids.split(',')
    );
  }

  /**
   * Save Tracks for User
   *
   * @param {string} accessToken
   * @param {string} ids
   * @returns {Promise<void>}
   * @memberof LibraryController
   */
  @Put('me/tracks')
  async saveTracksForUser(
    @AccessToken() accessToken: string,
    @Query('ids') ids: string
  ): Promise<void> {
    return await this.libraryService.saveTracksForUser(
      accessToken,
      ids.split(',')
    );
  }
}
