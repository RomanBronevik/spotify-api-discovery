import { SpotifyAlbumAPIResponse } from './../../albums/interfaces/spotify-album-api-response.interface';

/**
 * SpotifySavedAlbumAPIResponse
 *
 * @export
 * @interface SpotifySavedAlbumAPIResponse
 */
export interface SpotifySavedAlbumAPIResponse {
  /**
   * The date and time the album was saved.
   *
   * @type {string}
   * @memberof SpotifySavedAlbumAPIResponse
   */
  readonly added_at: string;

  /**
   * Information about the album.
   *
   * @type {SpotifyAlbum}
   * @memberof SpotifySavedAlbumAPIResponse
   */
  readonly album: SpotifyAlbumAPIResponse;
}
