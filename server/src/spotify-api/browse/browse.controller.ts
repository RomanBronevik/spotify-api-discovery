import { SpotifySimplifiedPlaylist } from './../types/classes/spotify-simplified-playlist.class';
import { SpotifyCategory } from './classes/spotify-category.class';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { Request } from 'express';

import { SpotifySimplifiedAlbum } from '../types/classes/spotify-simplified-album.class';
import { SpotifySimplifiedAlbumAPIResponse } from '../types/interfaces/spotify-simplified-album-api-response.interface';
import { AccessToken } from './../../authentication/access-token.decorator';
import { SpotifyPaging } from './../types/classes/spotify-paging.class';
import { BrowseService } from './browse.service';
import { SpotifyRecommendationsParameters } from './classes/spotify-recommendations-parameters.class';
import { SpotifyRecommendations } from './classes/spotify-recommendations.class';

/**
 * BrowseController
 *
 * @export
 * @class BrowseController
 */
@Controller()
export class BrowseController {
  /**
   * Creates an instance of BrowseController.
   *
   * @param {BrowseService} browseService
   * @memberof BrowseController
   */
  constructor(private readonly browseService: BrowseService) {}

  /**
   * Get a Category
   *
   * @param {string} accessToken
   * @param {string} id
   * @param {string} [country]
   * @param {string} [locale]
   * @returns {Promise<SpotifyCategory>}
   * @memberof BrowseController
   */
  @Get('browse/categories/:category_id')
  async getCategory(
    @AccessToken() accessToken: string,
    @Param('category_id') id: string,
    @Query('country') country?: string,
    @Query('locale') locale?: string
  ): Promise<SpotifyCategory> {
    return await this.browseService.getCategory(
      accessToken,
      id,
      country,
      locale
    );
  }

  /**
   * Get a Category's Playlists
   *
   * @param {string} accessToken
   * @param {string} id
   * @param {string} [country]
   * @param {number} [limit]
   * @param {number} [offset]
   * @returns {Promise<
   *     SpotifyPaging<
   *       SpotifySimplifiedPlaylist,
   *       SpotifySimplifiedPlaylistAPIResponse
   *     >
   *   >}
   * @memberof BrowseController
   */
  @Get('browse/categories/:category_id/playlists')
  async getCategoryPlaylist(
    @AccessToken() accessToken: string,
    @Param('category_id') id: string,
    @Query('country') country?: string,
    @Query('limit') limit?: number,
    @Query('offset') offset?: number
  ): Promise<SpotifyPaging<SpotifySimplifiedPlaylist>> {
    return await this.browseService.getCategoryPlaylist(
      accessToken,
      id,
      country,
      limit,
      offset
    );
  }

  /**
   * Get a List of Categories
   *
   * @param {string} accessToken
   * @param {string} [country]
   * @param {string} [locale]
   * @param {number} [limit]
   * @param {number} [offset]
   * @returns {Promise<SpotifyPaging<SpotifyCategory>>}
   * @memberof BrowseController
   */
  @Get('browse/categories')
  async getCategories(
    @AccessToken() accessToken: string,
    @Query('country') country?: string,
    @Query('locale') locale?: string,
    @Query('limit') limit?: number,
    @Query('offset') offset?: number
  ): Promise<SpotifyPaging<SpotifyCategory>> {
    return await this.browseService.getCategories(
      accessToken,
      country,
      locale,
      limit,
      offset
    );
  }

  @Get('browse/featured-playlists')
  async getFeaturedPlaylists(
    @AccessToken() accessToken: string,
    @Query('locale') locale?: string,
    @Query('country') country?: string,
    @Query('timestamp') timestamp?: number,
    @Query('limit') limit?: number,
    @Query('offset') offset?: number
  ): Promise<SpotifyPaging<SpotifySimplifiedPlaylist>> {
    return await this.browseService.getFeaturedPlaylists(
      accessToken,
      locale,
      country,
      timestamp,
      limit,
      offset
    );
  }

  @Get('browse/new-releases')
  async getNewReleases(
    @AccessToken() accessToken: string,
    @Query('country') country?: string,
    @Query('limit') limit?: string,
    @Query('offset') offset?: number
  ): Promise<SpotifyPaging<SpotifySimplifiedAlbum>> {
    return await this.browseService.getNewReleases(
      accessToken,
      country,
      limit,
      offset
    );
  }

  @Get('recommendations')
  async getRecommendations(
    @AccessToken() accessToken,
    @Param() params: any
  ): Promise<SpotifyRecommendations> {
    const spotifyRecommendationParameters = SpotifyRecommendationsParameters.fromJSON(
      params
    );

    return await this.browseService.getRecommendations(
      accessToken,
      spotifyRecommendationParameters
    );
  }
}
