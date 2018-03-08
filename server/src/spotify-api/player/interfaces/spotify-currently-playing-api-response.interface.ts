import { SpotifyTrackAPIResponse } from './../../tracks/interfaces/spotify-track-api-response.interface';
import { SpotifyContextAPIResponse } from './spotify-context-api-response.interface';

/**
 * SpotifyCurrentlyPlayingAPIResponse
 *
 * @export
 * @interface SpotifyCurrentlyPlayingAPIResponse
 */
export interface SpotifyCurrentlyPlayingAPIResponse {
  /**
   * A Context Object. Can be null
   *
   * @type {(SpotifyContext | null)}
   * @memberof SpotifyCurrentlyPlayingAPIResponse
   */
  readonly context: SpotifyContextAPIResponse | null;

  /**
   * Unix Millisecond Timestamp when data was fetched
   *
   * @type {number}
   * @memberof SpotifyCurrentlyPlayingAPIResponse
   */
  readonly timestamp: number;

  /**
   * Progress into the currently playing track. Can be null.
   *
   * @type {number}
   * @memberof SpotifyCurrentlyPlayingAPIResponse
   */
  readonly progress_ms: number;

  /**
   * If something is currently playing.
   *
   * @type {boolean}
   * @memberof SpotifyCurrentlyPlayingAPIResponse
   */
  readonly is_playing: boolean;

  /**
   * The currently playing track. Can be null.
   *
   * @type {(SpotifyTrackAPIResponse | null)}
   * @memberof SpotifyCurrentlyPlayingAPIResponse
   */
  readonly item: SpotifyTrackAPIResponse | null;
}
