import { SpotifySimplifiedTrackAPIResponse } from './../../types/interfaces/spotify-simplified-track-api-response.interface';
import { SpotifyContextAPIResponse } from './spotify-context-api-response.interface';

/**
 * SpotifyPlayHistoryAPIResponse
 *
 * @export
 * @class SpotifyPlayHistoryAPIResponse
 */
export class SpotifyPlayHistoryAPIResponse {
  /**
   * The track the user listened to.
   *
   * @type {SpotifySimplifiedTrack}
   * @memberof SpotifyPlayHistoryAPIResponse
   */
  readonly track: SpotifySimplifiedTrackAPIResponse;

  /**
   * The date and time the track was played.
   *
   * @type {string}
   * @memberof SpotifyPlayHistoryAPIResponse
   */
  readonly played_at: string;

  /**
   * The context the track was played from.
   *
   * @type {SpotifyContext}
   * @memberof SpotifyPlayHistoryAPIResponse
   */
  readonly context: SpotifyContextAPIResponse;
}
