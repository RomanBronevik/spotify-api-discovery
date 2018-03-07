import { SpotifySavedAlbumAPIResponse } from './../interfaces/spotify-saved-album-api-response.interface';
import { SpotifyAlbum } from '../../albums/classes/spotify-album.class';

/**
 * SpotifySavedAlbum
 *
 * @export
 * @class SpotifySavedAlbum
 */
export class SpotifySavedAlbum {
  /**
   * Creates an instance of SpotifySavedAlbum.
   *
   * @param {SpotifySavedAlbum} savedAlbum
   * @memberof SpotifySavedAlbum
   */
  constructor(savedAlbum: SpotifySavedAlbum) {
    Object.keys(savedAlbum).forEach(key => {
      this[key] = savedAlbum[key];
    });
  }

  /**
   * Load SpotifySavedAlbum from JSON
   *
   * @static
   * @param {SpotifySavedAlbumAPIResponse} savedAlbum
   * @returns
   * @memberof SpotifySavedAlbum
   */
  static fromJSON(savedAlbum: SpotifySavedAlbumAPIResponse) {
    return new this({
      addedAt: savedAlbum.added_at,
      album: SpotifyAlbum.fromJSON(savedAlbum.album)
    });
  }

  /**
   * The date and time the album was saved.
   *
   * @type {string}
   * @memberof SpotifySavedAlbum
   */
  readonly addedAt: string;

  /**
   * Information about the album.
   *
   * @type {SpotifyAlbum}
   * @memberof SpotifySavedAlbum
   */
  readonly album: SpotifyAlbum;
}
