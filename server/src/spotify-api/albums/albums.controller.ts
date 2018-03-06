import { Controller, Get, Param, Query } from '@nestjs/common';

import { SpotifyPaging } from '../types/classes/spotify-paging.class';
import { AccessToken } from './../../authentication/access-token.decorator';
import { SpotifyTrack } from './../tracks/classes/spotify-track.class';
import { AlbumsService } from './albums.service';
import { SpotifyAlbum } from './classes/spotify-album.class';

/**
 * Spotify API wrapper albums controller
 *
 * @export
 * @class AlbumsController
 */
@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumsService: AlbumsService) {}

  /**
   * Get an album
   *
   * @param {string} accessToken
   * @param {string} id
   * @param {string} [market]
   * @returns {Promise<SpotifyAlbum>}
   * @memberof AlbumsController
   */
  @Get(':id')
  async getAlbum(
    @AccessToken() accessToken: string,
    @Param('id') id: string,
    @Query('market') market?: string
  ): Promise<SpotifyAlbum> {
    return await this.albumsService.getAlbum(accessToken, id, market);
  }

  /**
   * Get an Album's Tracks
   *
   * @param {string} accessToken
   * @param {string} id
   * @param {string} market
   * @param {number} [limit]
   * @param {number} [offset]
   * @returns {Promise<SpotifyPaging<SpotifyTrack>>}
   * @memberof AlbumsController
   */
  @Get(':id/tracks')
  async getAlbumTracks(
    @AccessToken() accessToken: string,
    @Param('id') id: string,
    @Query('market') market: string,
    @Query('limit') limit?: number,
    @Query('offset') offset?: number
  ): Promise<SpotifyPaging<SpotifyTrack>> {
    return await this.albumsService.getAlbumTracks(
      accessToken,
      id,
      market,
      limit,
      offset
    );
  }

  /**
   * Get Several Albums
   *
   * @param {any} accessToken
   * @param {string} ids
   * @param {string} [market]
   * @returns {Promise<SpotifyAlbum[]>}
   * @memberof AlbumsController
   */
  @Get()
  async getSeveralAlbums(
    @AccessToken() accessToken,
    @Query('ids') ids: string,
    @Query('market') market?: string
  ): Promise<SpotifyAlbum[]> {
    return await this.albumsService.getSeveralAlbums(accessToken, ids, market);
  }
}
