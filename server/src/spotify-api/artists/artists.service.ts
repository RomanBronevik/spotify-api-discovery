import { Component } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import * as querystring from 'querystring';

import { SpotifyClient } from './../../http/spotify.client';
import { SpotifyAlbum } from './../albums/classes/spotify-album.class';
import { SpotifyAlbumAPIResponse } from './../albums/interfaces/spotify-album-api-response.interface';
import { SpotifyTrack } from './../tracks/classes/spotify-track.class';
import { SpotifyTrackAPIResponse } from './../tracks/interfaces/spotify-track-api-response.interface';
import { SpotifyPaging } from './../types/classes/spotify-paging.class';
import { SpotifyPagingAPIResponse } from './../types/interfaces/spotify-paging-api-response.interface';
import { SpotifyArtist } from './classes/spotify-artist.class';
import { SpotifyArtistAPIResponse } from './interfaces/spotify-artist-api-response.interface';

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
  public async getArtist(
    accessToken: string,
    id: string
  ): Promise<SpotifyArtist> {
    let response: AxiosResponse<SpotifyArtistAPIResponse>;

    try {
      response = await this.spotifyClient.get<SpotifyArtistAPIResponse>(
        `/artists/${id}`,
        accessToken
      );
    } catch (error) {
      console.error(error);
    }

    const artist = new SpotifyArtist(response.data);

    return artist;
  }

  /**
   * Get Several Artists
   *
   * @param {string} accessToken
   * @param {string} ids
   * @returns {Promise<SpotifyArtist[]>}
   * @memberof ArtistsService
   */
  public async getSeveralArtists(
    accessToken: string,
    ids: string
  ): Promise<SpotifyArtist[]> {
    let response: AxiosResponse<{ artists: SpotifyArtistAPIResponse[] }>;

    try {
      response = await this.spotifyClient.get<{
        artists: SpotifyArtistAPIResponse[];
      }>(`/artists?ids=${ids}`, accessToken);
    } catch (error) {
      console.error(error);
    }

    const artists = response.data.artists.map(
      artist => new SpotifyArtist(artist)
    );

    return artists;
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
   * @returns {Promise<SpotifyPaging<SpotifyAlbum[]>>}
   * @memberof ArtistsService
   */
  public async getArtistAlbums(
    accessToken: string,
    id: string,
    albumType?: string,
    market?: string,
    limit?: number,
    offset?: number
  ): Promise<SpotifyPaging<SpotifyAlbum, SpotifyAlbumAPIResponse>> {
    let response: AxiosResponse<
      SpotifyPagingAPIResponse<SpotifyAlbumAPIResponse>
    >;

    try {
      response = await this.spotifyClient.get<
        SpotifyPagingAPIResponse<SpotifyAlbumAPIResponse>
      >(
        `/artists/${id}/albums${
          albumType || market || limit || offset
            ? `?${querystring.stringify({
                albumType,
                market,
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

    const albums = new SpotifyPaging<SpotifyAlbum, SpotifyAlbumAPIResponse>(
      response.data,
      response.data.items.map(item => new SpotifyAlbum(item))
    );

    return albums;
  }

  /**
   * Get an Artist's Top Tracks
   *
   * @param {string} accessToken
   * @param {string} id
   * @param {string} [country]
   * @returns {Promise<SpotifyTrack[]>}
   * @memberof ArtistsService
   */
  public async getArtistTopTracks(
    accessToken: string,
    id: string,
    country?: string
  ): Promise<SpotifyTrack[]> {
    let response: AxiosResponse<{ tracks: SpotifyTrackAPIResponse[] }>;

    try {
      response = await this.spotifyClient.get<{
        tracks: SpotifyTrackAPIResponse[];
      }>(
        `artists/${id}/top-tracks${country ? `?country=${country}` : ''}`,
        accessToken
      );
    } catch (error) {
      console.error(error);
    }

    const topTracks = response.data.tracks.map(
      track => new SpotifyTrack(track)
    );

    return topTracks;
  }

  /**
   * Get an Artist's Related Artists
   *
   * @param {string} accessToken
   * @param {string} id
   * @returns {Promise<SpotifyArtist[]>}
   * @memberof ArtistsService
   */
  public async getArtistRelatedArtists(
    accessToken: string,
    id: string
  ): Promise<SpotifyArtist[]> {
    let response: AxiosResponse<{ artists: SpotifyArtistAPIResponse[] }>;

    try {
      response = await this.spotifyClient.get<{
        artists: SpotifyArtistAPIResponse[];
      }>(`/artists/${id}/related-artists`, accessToken);
    } catch (error) {
      console.error(error);
    }

    const relatedArtists = response.data.artists.map(
      artist => new SpotifyArtist(artist)
    );

    return relatedArtists;
  }
}
