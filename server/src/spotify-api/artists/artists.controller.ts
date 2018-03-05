import { SpotifyArtist } from './classes/spotify-artist.class';
import { Controller, Param, Get, Query } from '@nestjs/common';

import { ArtistsService } from './artists.service';
import { AccessToken } from './../../authentication/access-token.decorator';
import { SpotifyAlbum } from './../albums/classes/spotify-album.class';
import { SpotifyTrack } from '../tracks/classes/spotify-track.class';

/**
 * Spotify API wrapper artists controller
 *
 * @export
 * @class ArtistsController
 */
@Controller('artists')
export class ArtistsController {
  /**
   * Creates an instance of ArtistsController.
   *
   * @param {ArtistsService} artistsService
   * @memberof ArtistsController
   */
  constructor(private readonly artistsService: ArtistsService) {}

  /**
   * Get an Artist
   *
   * @param {string} accessToken
   * @param {string} id
   * @returns {Promise<SpotifyArtist>}
   * @memberof ArtistsController
   */
  @Get(':id')
  async getArtist(
    @AccessToken() accessToken: string,
    @Param('id') id: string
  ): Promise<SpotifyArtist> {
    return await this.artistsService.getArtist(accessToken, id);
  }

  /**
   * Get Several Artists
   *
   * @param {string} accessToken
   * @param {string} ids
   * @returns {Promise<SpotifyArtist[]>}
   * @memberof ArtistsController
   */
  @Get()
  async getSeveralArtists(
    @AccessToken() accessToken: string,
    @Query('ids') ids: string
  ): Promise<SpotifyArtist[]> {
    return await this.artistsService.getSeveralArtists(accessToken, ids);
  }

  /**
   * Get an Artist's Albums
   *
   * @param {string} accessToken
   * @param {string} id
   * @param {string} [albumType]
   * @param {string} [market]
   * @param {number} [limit]
   * @param {number} [offset]
   * @returns {Promise<SpotifyAlbum[]>}
   * @memberof ArtistsController
   */
  @Get(':id/albums')
  async getArtistAlbums(
    @AccessToken() accessToken: string,
    @Query('id') id: string,
    @Query('album_type') albumType?: string,
    @Query('market') market?: string,
    @Query('limit') limit?: number,
    @Query('offset') offset?: number
  ): Promise<SpotifyAlbum[]> {
    return this.artistsService.getArtistAlbums(
      accessToken,
      id,
      albumType,
      market,
      limit,
      offset
    );
  }

  /**
   * Get an Artist's Top Tracks
   *
   * @param {string} accessToken
   * @param {string} id
   * @param {string} [country]
   * @returns {Promise<SpotifyTrack[]>}
   * @memberof ArtistsController
   */
  @Get(':id/top-tracks')
  async getArtistTopTracks(
    @AccessToken() accessToken: string,
    @Param('id') id: string,
    @Query('country') country?: string
  ): Promise<SpotifyTrack[]> {
    return await this.artistsService.getArtistTopTracks(
      accessToken,
      id,
      country
    );
  }

  /**
   * Get an Artist's Related Artists
   *
   * @param {string} accessToken
   * @param {string} id
   * @returns {Promise<SpotifyArtist[]>}
   * @memberof ArtistsController
   */
  @Get(':id/related-artists')
  async getArtistRelatedArtists(
    @AccessToken() accessToken: string,
    @Param('id') id: string
  ): Promise<SpotifyArtist[]> {
    return await this.artistsService.getArtistRelatedArtists(accessToken, id);
  }
}
