import { Track } from './../tracks/classes/track.class';
import { Album } from './../albums/classes/album.class';
import { Component } from '@nestjs/common';

import { SpotifyClient } from './../../http/spotify.client';

/**
 * Wrapper around artists catefory of spotify Web API service
 *
 * @export
 * @class ArtistsService
 */
@Component()
export class ArtistsService {
  /**
   * Creates an instance of ArtistsService.
   *
   * @param {SpotifyClient} spotifyClient
   * @memberof ArtistsService
   */
  constructor(private spotifyClient: SpotifyClient) {}

  /**
   * Get an Artist
   *
   * @param {string} accessToken
   * @param {string} id
   * @returns {Promise<Artist>}
   * @memberof ArtistsService
   */
  public async getArtist(accessToken: string, id: string): Promise<Artist> {}

  /**
   * Get Several Artists
   *
   * @param {string} accessToken
   * @param {string} ids
   * @returns {Promise<Artist[]>}
   * @memberof ArtistsService
   */
  public async getSeveralArtists(
    accessToken: string,
    ids: string
  ): Promise<Artist[]> {}

  /**
   * Get an Artist's Albums
   *
   * @param {string} accessToken
   * @param {string} id
   * @param {string} [albumType]
   * @param {string} [market]
   * @param {number} [limit]
   * @param {number} [offset]
   * @returns {Promise<Album[]>}
   * @memberof ArtistsService
   */
  public async getArtistAlbums(
    accessToken: string,
    id: string,
    albumType?: string,
    market?: string,
    limit?: number,
    offset?: number
  ): Promise<Album[]> {}

  /**
   * Get an Artist's Top Tracks
   *
   * @param {string} accessToken
   * @param {string} id
   * @param {string} [country]
   * @returns {Promise<Track[]>}
   * @memberof ArtistsService
   */
  public async getArtistTopTracks(
    accessToken: string,
    id: string,
    country?: string
  ): Promise<Track[]> {}

  /**
   * Get an Artist's Related Artists
   *
   * @param {string} accessToken
   * @param {string} id
   * @returns {Promise<Artist[]>}
   * @memberof ArtistsService
   */
  public async getArtistRelatedArtists(
    accessToken: string,
    id: string
  ): Promise<Artist[]> {}
}
