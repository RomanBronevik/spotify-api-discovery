import { SpotifyTrack } from './../../tracks/classes/spotify-track.class';
import { SpotifyRepeatState } from './../../types/types/spotify-repeat-state.type';
import { SpotifyPlayingContextAPIResponse } from './../interfaces/spotify-playing-context-api-response.interface';
import { SpotifyContext } from './spotify-context.class';
import { SpotifyDevice } from './spotify-device.class';

/**
 * SpotifyPlayingContext
 *
 * @export
 * @class SpotifyPlayingContext
 */
export class SpotifyPlayingContext {
  /**
   * Creates an instance of SpotifyPlayingContext.
   *
   * @param {SpotifyPlayingContext} playingContext
   * @memberof SpotifyPlayingContext
   */
  constructor(playingContext: SpotifyPlayingContext) {
    Object.keys(playingContext).forEach(key => {
      this[key] = playingContext[key];
    });
  }

  /**
   * Load SpotifyPlayingContext from JSON
   *
   * @static
   * @param {SpotifyPlayingContextAPIResponse} playingContext
   * @returns
   * @memberof SpotifyPlayingContext
   */
  static fromJSON(playingContext: SpotifyPlayingContextAPIResponse) {
    return new this({
      device: SpotifyDevice.fromJSON(playingContext.device),
      repeatState: playingContext.repeat_state,
      shuffleState: playingContext.shuffle_state,
      context: playingContext.context
        ? SpotifyContext.fromJSON(playingContext.context)
        : null,
      timestamp: playingContext.timestamp,
      progressMs: playingContext.progress_ms,
      isPlaying: playingContext.is_playing,
      item: playingContext.item
        ? SpotifyTrack.fromJSON(playingContext.item)
        : null
    });
  }

  /**
   * The device that is currently active
   *
   * @type {SpotifyDevice}
   * @memberof SpotifyPlayingContext
   */
  readonly device: SpotifyDevice;

  /**
   * off, track, context
   *
   * @type {SpotifyRepeatState}
   * @memberof SpotifyPlayingContext
   */
  readonly repeatState: SpotifyRepeatState;

  /**
   * If shuffle is on or off
   *
   * @type {boolean}
   * @memberof SpotifyPlayingContext
   */
  readonly shuffleState: boolean;

  /**
   * A Context Object. Can be null.
   *
   * @type {(SpotifyContext | null)}
   * @memberof SpotifyPlayingContext
   */
  readonly context: SpotifyContext | null;

  /**
   * Unix Millisecond Timestamp when data was fetched
   *
   * @type {number}
   * @memberof SpotifyPlayingContext
   */
  readonly timestamp: number;

  /**
   * Progress into the currently playing track. Can be null.
   *
   * @type {number}
   * @memberof SpotifyPlayingContext
   */
  readonly progressMs: number;

  /**
   * If something is currently playing.
   *
   * @type {boolean}
   * @memberof SpotifyPlayingContext
   */
  readonly isPlaying: boolean;

  /**
   * The currently playing track. Can be null.
   *
   * @type {(SpotifyTrack | null)}
   * @memberof SpotifyPlayingContext
   */
  readonly item: SpotifyTrack | null;
}
