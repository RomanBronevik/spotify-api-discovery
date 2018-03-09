import { SpotifyTrack } from './../../tracks/classes/spotify-track.class';
import { SpotifyTrackAPIResponse } from './../../tracks/interfaces/spotify-track-api-response.interface';
import { SpotifyUser } from './../../users-profile/classes/spotify-user.class';
import { SpotifyUserAPIResponse } from './../../users-profile/interfaces/spotify-user-api-response.interface';

/**
 * SpotifyPlaylistTrackAPIResponse
 *
 * @export
 * @interface SpotifyPlaylistTrackAPIResponse
 */
export interface SpotifyPlaylistTrackAPIResponse {
  /**
   * The date and time the track was added. Note that some very old playlists
   * may return null in this field.
   *
   * @type {string}
   * @memberof SpotifyPlaylistTrackAPIResponse
   */
  readonly added_at: string;

  /**
   * The Spotify user who added the track. Note that some very old playlists
   * may return null in this field.
   *
   * @type {SpotifyUserAPIResponse}
   * @memberof SpotifyPlaylistTrackAPIResponse
   */
  readonly added_by: SpotifyUserAPIResponse;

  /**
   * Whether this track is a local file or not.
   *
   * @type {boolean}
   * @memberof SpotifyPlaylistTrackAPIResponse
   */
  readonly is_local: boolean;

  /**
   * Information about the track.
   *
   * @type {SpotifyTrackAPIResponse}
   * @memberof SpotifyPlaylistTrackAPIResponse
   */
  readonly track: SpotifyTrackAPIResponse;
}
