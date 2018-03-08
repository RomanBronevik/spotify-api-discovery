import { SpotifyPlayHistoryAPIResponse } from './../interfaces/spotify-play-history-api-response.interface';
import { SpotifySimplifiedTrack } from './../../types/classes/spotify-simplified-track.class';
import { SpotifyContext } from './spotify-context.class';

/**
 * SpotifyPlayHistory
 *
 * @export
 * @class SpotifyPlayHistory
 */
export class SpotifyPlayHistory {
  /**
   * Creates an instance of SpotifyPlayHistory.
   *
   * @param {SpotifyPlayHistory} playHistory
   * @memberof SpotifyPlayHistory
   */
  constructor(playHistory: SpotifyPlayHistory) {
    Object.keys(playHistory).forEach(key => {
      this[key] = playHistory[key];
    });
  }

  /**
   * Load SpotifyPlayHistory from JSON
   *
   * @static
   * @param {SpotifyPlayHistoryAPIResponse} playHistory
   * @returns
   * @memberof SpotifyPlayHistory
   */
  static fromJSON(playHistory: SpotifyPlayHistoryAPIResponse) {
    return new this({
      track: SpotifySimplifiedTrack.fromJSON(playHistory.track),
      playedAt: playHistory.played_at,
      context: SpotifyContext.fromJSON(playHistory.context)
    });
  }

  /**
   * The track the user listened to.
   *
   * @type {SpotifySimplifiedTrack}
   * @memberof SpotifyPlayHistory
   */
  readonly track: SpotifySimplifiedTrack;

  /**
   * The date and time the track was played.
   *
   * @type {string}
   * @memberof SpotifyPlayHistory
   */
  readonly playedAt: string;

  /**
   * The context the track was played from.
   *
   * @type {SpotifyContext}
   * @memberof SpotifyPlayHistory
   */
  readonly context: SpotifyContext;
}
