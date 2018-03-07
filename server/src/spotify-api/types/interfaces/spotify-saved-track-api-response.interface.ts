import { SpotifyTrackAPIResponse } from './../../tracks/interfaces/spotify-track-api-response.interface';

/**
 * SpotifySavedTrackAPIResponse
 *
 * @export
 * @interface SpotifySavedTrackAPIResponse
 */
export interface SpotifySavedTrackAPIResponse {
  /**
   * The date and time the track was saved.
   *
   * @type {string}
   * @memberof SpotifySavedTrackAPIResponse
   */
  readonly added_at: string;

  /**
   * Information about the track.
   *
   * @type {SpotifyTrack}
   * @memberof SpotifySavedTrackAPIResponse
   */
  readonly track: SpotifyTrackAPIResponse;
}
