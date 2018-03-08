import { SpotifyCurrentlyPlayingAPIResponse } from './../interfaces/spotify-currently-playing-api-response.interface';
import { SpotifyTrack } from './../../tracks/classes/spotify-track.class';
import { SpotifyContext } from './spotify-context.class';

/**
 * SpotifyCurrentlyPlaying
 *
 * @export
 * @class SpotifyCurrentlyPlaying
 */
export class SpotifyCurrentlyPlaying {
  /**
   * Creates an instance of SpotifyCurrentlyPlaying.
   *
   * @param {SpotifyCurrentlyPlaying} currentlyPlaying
   * @memberof SpotifyCurrentlyPlaying
   */
  constructor(currentlyPlaying: SpotifyCurrentlyPlaying) {
    Object.keys(currentlyPlaying).forEach(key => {
      this[key] = currentlyPlaying[key];
    });
  }

  /**
   * Load SpotifyCurrentlyPlaying from JSON
   *
   * @static
   * @param {SpotifyCurrentlyPlayingAPIResponse} currentlyPlaying
   * @returns
   * @memberof SpotifyCurrentlyPlaying
   */
  static fromJSON(currentlyPlaying: SpotifyCurrentlyPlayingAPIResponse) {
    return new this({
      context: currentlyPlaying.context
        ? SpotifyContext.fromJSON(currentlyPlaying.context)
        : null,
      timestamp: currentlyPlaying.timestamp,
      progressMs: currentlyPlaying.progress_ms,
      isPlaying: currentlyPlaying.is_playing,
      item: currentlyPlaying.item
        ? SpotifyTrack.fromJSON(currentlyPlaying.item)
        : null
    });
  }

  /**
   * A Context Object. Can be null
   *
   * @type {(SpotifyContext | null)}
   * @memberof SpotifyCurrentlyPlaying
   */
  readonly context: SpotifyContext | null;

  /**
   * Unix Millisecond Timestamp when data was fetched
   *
   * @type {number}
   * @memberof SpotifyCurrentlyPlaying
   */
  readonly timestamp: number;

  /**
   * Progress into the currently playing track. Can be null.
   *
   * @type {number}
   * @memberof SpotifyCurrentlyPlaying
   */
  readonly progressMs: number;

  /**
   * If something is currently playing.
   *
   * @type {boolean}
   * @memberof SpotifyCurrentlyPlaying
   */
  readonly isPlaying: boolean;

  /**
   * The currently playing track. Can be null.
   *
   * @type {(SpotifyTrack | null)}
   * @memberof SpotifyCurrentlyPlaying
   */
  readonly item: SpotifyTrack | null;
}
