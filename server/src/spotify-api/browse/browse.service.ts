import { SpotifyRecommendationsAPIResponse } from './interfaces/spotify-recommendations-api-response.interface';
import { SpotifyRecommendations } from './classes/spotify-recommendations.class';
import { Component } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import * as querystring from 'querystring';

import { SpotifySimplifiedAlbum } from '../types/classes/spotify-simplified-album.class';
import { SpotifyClient } from './../../http/spotify.client';
import { SpotifyPaging } from './../types/classes/spotify-paging.class';
import { SpotifySimplifiedPlaylist } from './../types/classes/spotify-simplified-playlist.class';
import { SpotifyPagingAPIResponse } from './../types/interfaces/spotify-paging-api-response.interface';
import { SpotifySimplifiedAlbumAPIResponse } from './../types/interfaces/spotify-simplified-album-api-response.interface';
import { SpotifySimplifiedPlaylistAPIResponse } from './../types/interfaces/spotify-simplified-playlist.interface';
import { SpotifyCategory } from './classes/spotify-category.class';
import { SpotifyRecommendationsParameters } from './classes/spotify-recommendations-parameters.class';
import { SpotifyCategoryAPIResponse } from './interfaces/spotify-category.interface';

/**
 * BrowseService
 *
 * @export
 * @class BrowseService
 */
@Component()
export class BrowseService {
  /**
   * Creates an instance of BrowseService.
   *
   * @param {SpotifyClient} spotifyClient
   * @memberof BrowseService
   */
  constructor(private readonly spotifyClient: SpotifyClient) {}

  /**
   * Get a Category
   *
   * @param {string} accessToken
   * @param {string} id
   * @param {string} [country]
   * @param {string} [locale]
   * @returns {Promise<SpotifyCategory>}
   * @memberof BrowseService
   */
  public async getCategory(
    accessToken: string,
    id: string,
    country?: string,
    locale?: string
  ): Promise<SpotifyCategory> {
    let response: AxiosResponse<SpotifyCategoryAPIResponse>;

    try {
      response = await this.spotifyClient.get<SpotifyCategoryAPIResponse>(
        `browse/categories/${id}${
          country || locale
            ? querystring.stringify({
                country,
                locale
              })
            : ''
        }`,
        accessToken
      );
    } catch (error) {
      console.error(error);
    }

    const category = SpotifyCategory.fromJSON(response.data);

    return category;
  }

  /**
   * Get a Category's Playlists
   *
   * @param {string} accessToken
   * @param {string} id
   * @param {string} [country]
   * @param {number} [limit]
   * @param {number} [offset]
   * @returns {Promise<SpotifyPaging<SpotifySimplifiedPlaylist>>}
   * @memberof BrowseService
   */
  public async getCategoryPlaylist(
    accessToken: string,
    id: string,
    country?: string,
    limit?: number,
    offset?: number
  ): Promise<SpotifyPaging<SpotifySimplifiedPlaylist>> {
    let response: AxiosResponse<
      SpotifyPagingAPIResponse<SpotifySimplifiedPlaylistAPIResponse>
    >;

    try {
      response = await this.spotifyClient.get<
        SpotifyPagingAPIResponse<SpotifySimplifiedPlaylistAPIResponse>
      >(
        `browse/categories/${id}/playlists${
          country || limit || offset
            ? querystring.stringify({
                country,
                limit,
                offset
              })
            : ''
        }`,
        accessToken
      );
    } catch (error) {
      console.error(error);
    }

    const playlists = SpotifyPaging.fromJSON<
      SpotifySimplifiedPlaylist,
      SpotifySimplifiedPlaylistAPIResponse
    >(
      response.data,
      response.data.items.map(item => SpotifySimplifiedPlaylist.fromJSON(item))
    );

    return playlists;
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
   * @memberof BrowseService
   */
  public async getCategories(
    accessToken: string,
    country?: string,
    locale?: string,
    limit?: number,
    offset?: number
  ): Promise<SpotifyPaging<SpotifyCategory>> {
    let response: AxiosResponse<
      SpotifyPagingAPIResponse<SpotifyCategoryAPIResponse>
    >;

    try {
      response = await this.spotifyClient.get<
        SpotifyPagingAPIResponse<SpotifyCategoryAPIResponse>
      >(
        `/browse/categories${
          country || locale || limit || offset
            ? `?${querystring.stringify({
                country,
                locale,
                limit,
                offset
              })}`
            : ''
        }`,
        accessToken
      );
    } catch (error) {
      console.error(error);
    }

    const categories = SpotifyPaging.fromJSON<
      SpotifyCategory,
      SpotifyCategoryAPIResponse
    >(
      response.data,
      response.data.items.map(item => SpotifyCategory.fromJSON(item))
    );

    return categories;
  }

  /**
   * Get a List of Featured Playlists
   *
   * @param {string} accessToken
   * @param {string} [locale]
   * @param {string} [country]
   * @param {number} [timestamp]
   * @param {number} [limit]
   * @param {number} [offset]
   * @returns {Promise<SpotifyPaging<SpotifySimplifiedPlaylist>>}
   * @memberof BrowseService
   */
  public async getFeaturedPlaylists(
    accessToken: string,
    locale?: string,
    country?: string,
    timestamp?: number,
    limit?: number,
    offset?: number
  ): Promise<SpotifyPaging<SpotifySimplifiedPlaylist>> {
    let response: AxiosResponse<
      SpotifyPagingAPIResponse<SpotifySimplifiedPlaylistAPIResponse>
    >;

    try {
      response = await this.spotifyClient.get<
        SpotifyPagingAPIResponse<SpotifySimplifiedPlaylistAPIResponse>
      >(
        `browse/featured-playlists${
          locale || country || timestamp || limit || offset
            ? `?${querystring.stringify({
                locale,
                country,
                timestamp,
                limit,
                offset
              })}`
            : ''
        }`,
        accessToken
      );
    } catch (error) {
      console.error(error);
    }

    const playlists = SpotifyPaging.fromJSON<
      SpotifySimplifiedPlaylist,
      SpotifySimplifiedPlaylistAPIResponse
    >(
      response.data,
      response.data.items.map(item => SpotifySimplifiedPlaylist.fromJSON(item))
    );

    return playlists;
  }

  /**
   * Get a List of New Releases
   *
   * @param {string} accessToken
   * @param {string} [country]
   * @param {string} [limit]
   * @param {number} [offset]
   * @returns {Promise<SpotifyPaging<SpotifySimplifiedAlbum>>}
   * @memberof BrowseService
   */
  public async getNewReleases(
    accessToken: string,
    country?: string,
    limit?: string,
    offset?: number
  ): Promise<SpotifyPaging<SpotifySimplifiedAlbum>> {
    let response: AxiosResponse<
      SpotifyPagingAPIResponse<SpotifySimplifiedAlbumAPIResponse>
    >;

    try {
      response = await this.spotifyClient.get<
        SpotifyPagingAPIResponse<SpotifySimplifiedAlbumAPIResponse>
      >(
        `/browse/releases${
          country || limit || offset
            ? `?${querystring.stringify({
                country,
                limit,
                offset
              })}`
            : ''
        }`,
        accessToken
      );
    } catch (error) {
      console.error(error);
    }

    const albums = SpotifyPaging.fromJSON<
      SpotifySimplifiedAlbum,
      SpotifySimplifiedAlbumAPIResponse
    >(
      response.data,
      response.data.items.map(item => SpotifySimplifiedAlbum.fromJSON(item))
    );

    return albums;
  }

  /**
   * Get Recommendations Based on Seeds
   *
   * @param {any} accessToken
   * @param {SpotifyRecommendationsParameters} params
   * @returns {Promise<SpotifyRecommendations>}
   * @memberof BrowseService
   */
  public async getRecommendations(
    accessToken,
    params: SpotifyRecommendationsParameters
  ): Promise<SpotifyRecommendations> {
    let response: AxiosResponse<SpotifyRecommendationsAPIResponse>;

    try {
      response = await this.spotifyClient.get<
        SpotifyRecommendationsAPIResponse
      >(
        `/recommendations${
          Object.keys(params).length
            ? `?${querystring.stringify(params.toJSON())}`
            : ''
        }`,
        accessToken
      );
    } catch (error) {
      console.log(error);
    }

    const recommendations = SpotifyRecommendations.fromJSON(response.data);

    return recommendations;
  }
}
