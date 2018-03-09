import { SpotifyFollowersAPIResponse } from './../../types/interfaces/spotify-followers-api-response.interface';
import { SpotifyImageAPIResponse } from './../../types/interfaces/spotify-image-api-response.interface';
import { SpotifyPagingAPIResponse } from './../../types/interfaces/spotify-paging-api-response.interface';
import { SpotifyEntityType } from './../../types/types/spotify-entity-type.type';
import { SpotifyExternalURLs } from './../../types/types/spotify-external-urls.type';
import { SpotifySnapshotID } from './../../types/types/spotify-snapshot-id.type';
import { SpotifyUserAPIResponse } from './../../users-profile/interfaces/spotify-user-api-response.interface';

/**
 * SpotifyPlaylistAPIResponse
 *
 * @export
 * @class SpotifyPlaylistAPIResponse
 */
export class SpotifyPlaylistAPIResponse {
  /**
   * true if the owner allows other users to modify the playlist.
   *
   * @type {boolean}
   * @memberof SpotifyPlaylistAPIResponse
   */
  readonly collaborative: boolean;

  /**
   * The playlist description. Only returned for modified, verified playlists,
   * otherwise null.
   *
   * @type {string}
   * @memberof SpotifyPlaylistAPIResponse
   */
  readonly description: string;

  /**
   * Known external URLs for this playlist.
   *
   * @type {SpotifyExternalURLs}
   * @memberof SpotifyPlaylistAPIResponse
   */
  readonly external_urls: SpotifyExternalURLs;

  /**
   * Information about the followers of the playlist.
   *
   * @type {SpotifyFollowersAPIResponse}
   * @memberof SpotifyPlaylistAPIResponse
   */
  readonly followers: SpotifyFollowersAPIResponse;

  /**
   * 	A link to the Web API endpoint providing full details of the playlist.
   *
   * @type {string}
   * @memberof SpotifyPlaylistAPIResponse
   */
  readonly href: string;

  /**
   * The Spotify ID for the playlist.
   *
   * @type {string}
   * @memberof SpotifyPlaylistAPIResponse
   */
  readonly id: string;

  /**
   * Images for the playlist. The array may be empty or contain up to three
   * images. The images are returned by size in descending order. See Working
   * with Playlists. Note: If returned, the source URL for the image ( url ) is
   * temporary and will expire in less than a day.
   *
   * @type {SpotifyImageAPIResponse[]}
   * @memberof SpotifyPlaylistAPIResponse
   */
  readonly images: SpotifyImageAPIResponse[];

  /**
   * The name of the playlist.
   *
   * @type {string}
   * @memberof SpotifyPlaylistAPIResponse
   */
  readonly name: string;

  /**
   * The user who owns the playlist
   *
   * @type {SpotifyUserAPIResponse}
   * @memberof SpotifyPlaylistAPIResponse
   */
  readonly owner: SpotifyUserAPIResponse;

  /**
   * The playlist’s public/private status: true the playlist is public, false
   * the playlist is private, null the playlist status is not relevant. For more
   * about public/private status, see Working with Playlists.
   *
   * @type {boolean}
   * @memberof SpotifyPlaylistAPIResponse
   */
  readonly public: boolean;

  /**
   * The version identifier for the current playlist. Can be supplied in other
   * requests to target a specific playlist version: see Remove tracks
   * from a playlist
   *
   * @type {SpotifySnapshotID}
   * @memberof SpotifyPlaylistAPIResponse
   */
  readonly snapshot_id: SpotifySnapshotID;

  /**
   * Information about the tracks of the playlist.
   *
   * @type {SpotifyPagingAPIResponse<SpotifyPlaylistTrackAPIResponse>}
   * @memberof SpotifyPlaylistAPIResponse
   */
  readonly tracks: SpotifyPagingAPIResponse<SpotifyPlaylistTrackAPIResponse>;

  /**
   * The object type: “playlist”
   *
   * @type {SpotifyEntityType}
   * @memberof SpotifyPlaylistAPIResponse
   */
  readonly type: SpotifyEntityType;

  /**
   * The Spotify URI for the playlist.
   *
   * @type {string}
   * @memberof SpotifyPlaylistAPIResponse
   */
  readonly uri: string;
}
