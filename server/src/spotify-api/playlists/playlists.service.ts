import { SpotifyPlaylistTrackAPIResponse } from './interfaces/spotify-playlist-track-api-response.interface';
import { SpotifyPlaylistAPIResponse } from './interfaces/spotify-playlist-api-response.interface';
import { Component } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import * as querystring from 'querystring';

import { SpotifyClient } from './../../http/spotify.client';
import { SpotifyImage } from './../types/classes/spotify-image.class';
import { SpotifyPaging } from './../types/classes/spotify-paging.class';
import { SpotifySimplifiedPlaylist } from './../types/classes/spotify-simplified-playlist.class';
import { SpotifyPagingAPIResponse } from './../types/interfaces/spotify-paging-api-response.interface';
import { SpotifySimplifiedPlaylistAPIResponse } from './../types/interfaces/spotify-simplified-playlist.interface';
import { SpotifyBase64Image } from './../types/types/spotify-base-64-image.type';
import { SpotifyPlaylistTrackPosition } from './../types/types/spotify-playlist-track-position.type';
import { SpotifySnapshotID } from './../types/types/spotify-snapshot-id.type';
import { SpotifyPlaylist } from './classes/spotify-playlist.class';
import { SpotifyPlaylistTrack } from './classes/spotify-playlist-track.class';

/**
 * PlaylistsService
 *
 * @export
 * @class PlaylistsService
 */
@Component()
export class PlaylistsService {
  /**
   * Creates an instance of PlaylistsService.
   *
   * @param {SpotifyClient} spotifyClient
   * @memberof PlaylistsService
   */
  constructor(private readonly spotifyClient: SpotifyClient) {}

  /**
   * Add Tracks to a Playlist
   *
   * @param {string} accessToken
   * @param {string} userID
   * @param {string} playlistID
   * @param {string[]} [uris]
   * @param {number} [position]
   * @returns {Promise<SpotifySnapshotID>}
   * @memberof PlaylistsService
   */
  public async addTracksToPlaylist(
    accessToken: string,
    userID: string,
    playlistID: string,
    uris?: string[],
    position?: number
  ): Promise<SpotifySnapshotID> {
    let response: AxiosResponse<SpotifySnapshotID>;

    try {
      response = await this.spotifyClient.post<SpotifySnapshotID>(
        `users/${userID}/playlists/${playlistID}/tracks${
          uris || position
            ? `?${
                uris
                  ? `uris=${uris.reduce((acc, uri) => acc + `,${uri}`, '')}`
                  : ''
              }${position ? `&position=${position}` : ''}`
            : ''
        }`,
        accessToken
      );
    } catch (error) {
      console.error(error);
    }

    const snapshotID = response.data;

    return snapshotID;
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
   * @memberof PlaylistsService
   */
  public async changePlaylistDetails(
    accessToken: string,
    userID: string,
    playlistID: string,
    name?: string,
    isPublic?: boolean,
    collaborative?: boolean,
    description?: string
  ): Promise<void> {
    let response: AxiosResponse<void>;

    try {
      response = await this.spotifyClient.put<void>(
        `/users/${userID}/playlists/${playlistID}`,
        accessToken,
        {
          name,
          public: isPublic,
          collaborative,
          description
        }
      );
    } catch (error) {
      console.error(error);
    }

    return;
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
   * @returns {Promise<void>}
   * @memberof PlaylistsService
   */
  public async createPlaylist(
    accessToken: string,
    userID: string,
    name?: string,
    isPublic?: boolean,
    collaborative?: boolean,
    description?: string
  ): Promise<SpotifyPlaylist> {
    let response: AxiosResponse<SpotifyPlaylistAPIResponse>;

    try {
      response = await this.spotifyClient.post<SpotifyPlaylistAPIResponse>(
        `/users/${userID}/playlists`,
        accessToken,
        {
          name,
          public: isPublic,
          collaborative,
          description
        }
      );
    } catch (error) {
      console.error(error);
    }

    const playlist = SpotifyPlaylist.fromJSON(response.data);

    return playlist;
  }

  /**
   * Get a List of Current User's Playlists
   *
   * @param {string} accessToken
   * @param {number} [limit]
   * @param {number} [offset]
   * @returns {Promise<SpotifyPaging<SpotifySimplifiedPlaylist>>}
   * @memberof PlaylistsService
   */
  public async getCurrentUserPlaylists(
    accessToken: string,
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
        `/me/playlists${
          limit || offset ? `?${querystring.stringify({ limit, offset })}` : ''
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
   * Get a List of a User's Playlists
   *
   * @param {string} accessToken
   * @param {string} userID
   * @param {number} [limit]
   * @param {number} [offset]
   * @returns {Promise<SpotifyPaging<SpotifySimplifiedPlaylist>>}
   * @memberof PlaylistsService
   */
  public async getUserPlaylists(
    accessToken: string,
    userID: string,
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
        `/users/${userID}/playlists${
          limit || offset ? `?${querystring.stringify({ limit, offset })}` : ''
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
   * Get a Playlist
   *
   * @param {string} accessToken
   * @param {string} userID
   * @param {string} playlistID
   * @returns {Promise<SpotifyPlaylist>}
   * @memberof PlaylistsService
   */
  public async getPlaylist(
    accessToken: string,
    userID: string,
    playlistID: string
  ): Promise<SpotifyPlaylist> {
    let response: AxiosResponse<SpotifyPlaylistAPIResponse>;

    try {
      response = await this.spotifyClient.get<SpotifyPlaylistAPIResponse>(
        `/users/${userID}/playlists/${playlistID}`,
        accessToken
      );
    } catch (error) {
      console.error(error);
    }

    const playlist = SpotifyPlaylist.fromJSON(response.data);

    return playlist;
  }

  /**
   * Get a Playlist Cover Image
   *
   * @param {string} accessToken
   * @param {string} userID
   * @param {string} playlistID
   * @returns {Promise<SpotifyImage[]>}
   * @memberof PlaylistsService
   */
  public async getPlaylistCoverImage(
    accessToken: string,
    userID: string,
    playlistID: string
  ): Promise<SpotifyImage[]> {
    let response: AxiosResponse<SpotifyImage[]>;

    try {
      response = await this.spotifyClient.get<SpotifyImage[]>(
        `/users/${userID}/playlists/${playlistID}/images`,
        accessToken
      );
    } catch (error) {
      console.error(error);
    }

    const images = response.data.map(image => SpotifyImage.fromJSON(image));

    return images;
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
   * @memberof PlaylistsService
   */
  public async getPlaylistTracks(
    accessToken: string,
    userID: string,
    playlistID: string,
    limit?: number,
    offset?: number,
    market?: number
  ): Promise<SpotifyPaging<SpotifyPlaylistTrack>> {
    let response: AxiosResponse<
      SpotifyPagingAPIResponse<SpotifyPlaylistTrackAPIResponse>
    >;

    try {
      response = await this.spotifyClient.get<
        SpotifyPagingAPIResponse<SpotifyPlaylistTrackAPIResponse>
      >(
        `/users/${userID}/playlists/${playlistID}/images${
          limit || offset || market
            ? `?${querystring.stringify({
                limit,
                offset,
                market
              })}`
            : ''
        }`,
        accessToken
      );
    } catch (error) {
      console.error(error);
    }

    const playlistTracks = SpotifyPaging.fromJSON<
      SpotifyPlaylistTrack,
      SpotifyPlaylistTrackAPIResponse
    >(
      response.data,
      response.data.items.map(item => SpotifyPlaylistTrack.fromJSON(item))
    );

    return playlistTracks;
  }

  /**
   * Remove Tracks from a Playlist
   *
   * @param {string} accessToken
   * @param {string} userID
   * @param {string} playlistID
   * @param {(string[] | SpotifyPlaylistTrackPosition[])} tracks
   * @returns {Promise<SpotifySnapshotID>}
   * @memberof PlaylistsService
   */
  public async removeTracksFromPlaylist(
    accessToken: string,
    userID: string,
    playlistID: string,
    tracks: string[] | SpotifyPlaylistTrackPosition[]
  ): Promise<SpotifySnapshotID> {
    let response: AxiosResponse<SpotifySnapshotID>;

    try {
      response = await this.spotifyClient.delete<SpotifySnapshotID>(
        `/users/${userID}/playlists/${playlistID}/tracks`,
        accessToken,
        {
          data: { tracks }
        }
      );
    } catch (error) {
      console.error(error);
    }

    return response.data;
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
   * @memberof PlaylistsService
   */
  public async reorderPlaylistTracks(
    accessToken: string,
    userID: string,
    playlistID: string,
    rangeStart: number,
    insertBefore: number,
    rangeLength?: number,
    snapshotID?: SpotifySnapshotID
  ): Promise<SpotifySnapshotID> {
    let response: AxiosResponse<SpotifySnapshotID>;

    try {
      response = await this.spotifyClient.put<SpotifySnapshotID>(
        `/users/${userID}/playlists/${playlistID}/tracks`,
        accessToken,
        {
          range_start: rangeStart,
          insert_before: insertBefore,
          range_length: rangeLength,
          snapshot_id: snapshotID
        }
      );
    } catch (error) {
      console.error(error);
    }

    return response.data;
  }

  /**
   * Replace a Playlist's Tracks
   *
   * @param {string} accessToken
   * @param {string} userID
   * @param {string} playlistID
   * @param {string[]} [uris]
   * @returns {Promise<void>}
   * @memberof PlaylistsService
   */
  public async replacePlaylistTracks(
    accessToken: string,
    userID: string,
    playlistID: string,
    uris?: string[]
  ): Promise<void> {
    let response: AxiosResponse<void>;

    try {
      response = await this.spotifyClient.put<void>(
        `/users/${userID}/playlists/${playlistID}/tracks?uris=${uris.reduce(
          (acc, uri) => (acc.length ? acc + `,${uri}` : uri),
          ''
        )}`,
        accessToken
      );
    } catch (error) {
      console.error(error);
    }

    return;
  }

  /**
   * Upload a Custom Playlist Cover Image
   *
   * @param {string} accessToken
   * @param {string} userID
   * @param {string} playlistID
   * @param {SpotifyBase64Image} image
   * @returns {Promise<void>}
   * @memberof PlaylistsService
   */
  public async uploadCustomPlaylistCoverImage(
    accessToken: string,
    userID: string,
    playlistID: string,
    image: SpotifyBase64Image
  ): Promise<void> {
    let response: AxiosResponse<void>;

    try {
      response = await this.spotifyClient.put<void>(
        `/users/${userID}/playlists/${playlistID}/images`,
        accessToken,
        image
      );
    } catch (error) {
      console.error(error);
    }

    return;
  }
}
