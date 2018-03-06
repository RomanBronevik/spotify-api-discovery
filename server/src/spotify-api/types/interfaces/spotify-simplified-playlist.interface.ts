import { SpotifyUserAPIResponse } from './../../users-profile/interfaces/spotify-user-api-response.interface';
import { SpotifyEntityType } from './../types/spotify-entity-type.type';
import { SpotifyExternalURLs } from './../types/spotify-external-urls.type';
import { SpotifyImageAPIResponse } from './spotify-image-api-response.interface';

/**
 * SpotifySimplifiedPlaylistAPIResponse
 *
 * @export
 * @class SpotifySimplifiedPlaylistAPIResponse
 */
export class SpotifySimplifiedPlaylistAPIResponse {
  /**
   * TheSpotify ID for the playlist.
   *
   * @type {string}
   * @memberof SpotifySimplifiedPlaylistAPIResponse
   */
  readonly id: string;

  /**
   * true if the owner allows other users to modify the playlist.
   *
   * @type {boolean}
   * @memberof SpotifySimplifiedPlaylistAPIResponse
   */
  readonly collaborative: boolean;

  /**
   * Known external URLs for this playlist.
   *
   * @type {SpotifyExternalURLs}
   * @memberof SpotifySimplifiedPlaylistAPIResponse
   */
  readonly external_urls: SpotifyExternalURLs;

  /**
   * A link to the Web API endpoint providing full details of the playlist.
   *
   * @type {string}
   * @memberof SpotifySimplifiedPlaylistAPIResponse
   */
  readonly href: string;

  /**
   * mages for the playlist. The array may be empty or contain up to three
   * images. The images are returned by size in descending order. See Working
   * with Playlists. Note: If returned, the source URL for the image (url) is
   * temporary and will expire in less than a day.
   *
   * @type {SpotifyImageAPIResponse[]}
   * @memberof SpotifySimplifiedPlaylistAPIResponse
   */
  readonly images: SpotifyImageAPIResponse[];

  /**
   * The name of the playlist.
   *
   * @type {string}
   * @memberof SpotifySimplifiedPlaylistAPIResponse
   */
  readonly name: string;

  /**
   * 	The user who owns the playlist
   *
   * @type {SpotifyUserAPIResponse}
   * @memberof SpotifySimplifiedPlaylistAPIResponse
   */
  readonly owner: SpotifyUserAPIResponse;

  /**
   * The playlist’s public/private status: true the playlist is public, false
   * the playlist is private, null the playlist status is not relevant. For more
   * about public/private status, see Working with Playlists.
   *
   * @type {(boolean | null)}
   * @memberof SpotifySimplifiedPlaylistAPIResponse
   */
  readonly public: boolean | null;

  /**
   * The version identifier for the current playlist. Can be supplied in other
   * requests to target a specific playlist version
   *
   * @type {string}
   * @memberof SpotifySimplifiedPlaylistAPIResponse
   */
  readonly snapshot_id: string;

  /**
   * A collection containing a link (href) to the Web API endpoint where full
   * details of the playlist’s tracks can be retrieved, along with the total
   * number of tracks in the playlist.
   *
   * @type {{
   *     readonly href: string;
   *     readonly total: number;
   *   }}
   * @memberof SpotifySimplifiedPlaylistAPIResponse
   */
  readonly tracks: {
    readonly href: string;
    readonly total: number;
  };

  /**
   * The object type: “playlist”
   *
   * @type {SpotifyEntityType}
   * @memberof SpotifySimplifiedPlaylistAPIResponse
   */
  readonly type: SpotifyEntityType;

  /**
   * The Spotify URI for the playlist.
   *
   * @type {string}
   * @memberof SpotifySimplifiedPlaylistAPIResponse
   */
  readonly uri: string;
}
