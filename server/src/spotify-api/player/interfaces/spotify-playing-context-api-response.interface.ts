import { SpotifyTrack } from './../../tracks/classes/spotify-track.class';
import { SpotifyTrackAPIResponse } from './../../tracks/interfaces/spotify-track-api-response.interface';
import { SpotifyRepeatState } from './../../types/types/spotify-repeat-state.type';
import { SpotifyContextAPIResponse } from './spotify-context-api-response.interface';
import { SpotifyDeviceAPIResponse } from './spotify-device-api-response.interface';

/**
 * SpotifyPlayingContextAPIResponse
 *
 * @export
 * @interface SpotifyPlayingContextAPIResponse
 */
export interface SpotifyPlayingContextAPIResponse {
  /**
   * The device that is currently active
   *
   * @type {SpotifyDeviceAPIResponse}
   * @memberof SpotifyPlayingContextAPIResponse
   */
  readonly device: SpotifyDeviceAPIResponse;

  /**
   * off, track, context
   *
   * @type {SpotifyRepeatState}
   * @memberof SpotifyPlayingContextAPIResponse
   */
  readonly repeat_state: SpotifyRepeatState;

  /**
   * If shuffle is on or off
   *
   * @type {boolean}
   * @memberof SpotifyPlayingContextAPIResponse
   */
  readonly shuffle_state: boolean;

  /**
   * A Context Object. Can be null.
   *
   * @type {(SpotifyContext | null)}
   * @memberof SpotifyPlayingContextAPIResponse
   */
  readonly context: SpotifyContextAPIResponse | null;

  /**
   * Unix Millisecond Timestamp when data was fetched
   *
   * @type {number}
   * @memberof SpotifyPlayingContextAPIResponse
   */
  readonly timestamp: number;

  /**
   * Progress into the currently playing track. Can be null.
   *
   * @type {number}
   * @memberof SpotifyPlayingContextAPIResponse
   */
  readonly progress_ms: number;

  /**
   * If something is currently playing.
   *
   * @type {boolean}
   * @memberof SpotifyPlayingContextAPIResponse
   */
  readonly is_playing: boolean;

  /**
   * The currently playing track. Can be null.
   *
   * @type {(SpotifyTrack | null)}
   * @memberof SpotifyPlayingContextAPIResponse
   */
  readonly item: SpotifyTrackAPIResponse | null;
}
