import { SpotifySavedTrackAPIResponse } from './../interfaces/spotify-saved-track-api-response.interface';
import { SpotifyTrack } from '../../tracks/classes/spotify-track.class';

/**
 * SpotifySavedTrack
 *
 * @export
 * @class SpotifySavedTrack
 */
export class SpotifySavedTrack {
  /**
   * Creates an instance of SpotifySavedTrack.
   *
   * @param {SpotifySavedTrack} savedTrack
   * @memberof SpotifySavedTrack
   */
  constructor(savedTrack: SpotifySavedTrack) {
    Object.keys(savedTrack).forEach(key => {
      this[key] = savedTrack[key];
    });
  }

  /**
   * Load SpotifySavedTrack from JSON
   *
   * @static
   * @param {SpotifySavedTrackAPIResponse} savedTrack
   * @returns
   * @memberof SpotifySavedTrack
   */
  static fromJSON(savedTrack: SpotifySavedTrackAPIResponse) {
    return new this({
      addedAt: savedTrack.added_at,
      track: SpotifyTrack.fromJSON(savedTrack.track)
    });
  }

  /**
   * The date and time the track was saved.
   *
   * @type {string}
   * @memberof SpotifySavedTrack
   */
  readonly addedAt: string;

  /**
   * Information about the track.
   *
   * @type {SpotifyTrack}
   * @memberof SpotifySavedTrack
   */
  readonly track: SpotifyTrack;
}
