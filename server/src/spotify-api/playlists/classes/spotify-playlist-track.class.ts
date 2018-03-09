import { SpotifyPlaylistTrackAPIResponse } from './../interfaces/spotify-playlist-track-api-response.interface';
import { SpotifyTrack } from './../../tracks/classes/spotify-track.class';
import { SpotifyUser } from './../../users-profile/classes/spotify-user.class';

/**
 * SpotifyPlaylistTrack
 *
 * @export
 * @class SpotifyPlaylistTrack
 */
export class SpotifyPlaylistTrack {
  /**
   * Creates an instance of SpotifyPlaylistTrack.
   *
   * @param {SpotifyPlaylistTrack} track
   * @memberof SpotifyPlaylistTrack
   */
  constructor(track: SpotifyPlaylistTrack) {
    Object.keys(track).forEach(key => {
      this[key] = track[key];
    });
  }

  /**
   * Load SpotifyPlaylistTrack from JSON
   *
   * @static
   * @param {SpotifyPlaylistTrackAPIResponse} track
   * @returns
   * @memberof SpotifyPlaylistTrack
   */
  static fromJSON(track: SpotifyPlaylistTrackAPIResponse) {
    return new this({
      addedAt: track.added_at,
      addedBy: SpotifyUser.fromJSON(track.added_by),
      isLocal: track.is_local,
      track: SpotifyTrack.fromJSON(track.track)
    });
  }

  /**
   * The date and time the track was added. Note that some very old playlists
   * may return null in this field.
   *
   * @type {string}
   * @memberof SpotifyPlaylistTrack
   */
  readonly addedAt: string;

  /**
   * The Spotify user who added the track. Note that some very old playlists
   * may return null in this field.
   *
   * @type {SpotifyUser}
   * @memberof SpotifyPlaylistTrack
   */
  readonly addedBy: SpotifyUser;

  /**
   * Whether this track is a local file or not.
   *
   * @type {boolean}
   * @memberof SpotifyPlaylistTrack
   */
  readonly isLocal: boolean;

  /**
   * Information about the track.
   *
   * @type {SpotifyTrack}
   * @memberof SpotifyPlaylistTrack
   */
  readonly track: SpotifyTrack;
}
