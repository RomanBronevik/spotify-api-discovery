import { SpotifySimplifiedPlaylistAPIResponse } from './../interfaces/spotify-simplified-playlist.interface';
import { SpotifyEntityType } from '../types/spotify-entity-type.type';
import { SpotifyExternalURLs } from '../types/spotify-external-urls.type';
import { SpotifyUser } from './../../users-profile/classes/spotify-user.class';
import { SpotifyImage } from './spotify-image.class';

/**
 * SpotifySimplifiedPlaylist
 *
 * @export
 * @class SpotifySimplifiedPlaylist
 */
export class SpotifySimplifiedPlaylist {
  /**
   * Creates an instance of SpotifySimplifiedPlaylist.
   *
   * @param {SpotifySimplifiedPlaylist} playlist
   * @memberof SpotifySimplifiedPlaylist
   */
  constructor(playlist: SpotifySimplifiedPlaylist) {
    Object.keys(playlist).forEach(key => {
      this[key] = playlist[key];
    });
  }

  /**
   * Load SpotifySimplifiedPlaylist from JSON
   *
   * @static
   * @param {SpotifySimplifiedPlaylistAPIResponse} playlist
   * @returns
   * @memberof SpotifySimplifiedPlaylist
   */
  static fromJSON(playlist: SpotifySimplifiedPlaylistAPIResponse) {
    return new this({
      id: playlist.id,
      collaborative: playlist.collaborative,
      externalURLs: playlist.external_urls,
      href: playlist.href,
      images: playlist.images.map(image => SpotifyImage.fromJSON(image)),
      name: playlist.name,
      owner: SpotifyUser.fromJSON(playlist.owner),
      public: playlist.public,
      snapshotID: playlist.snapshot_id,
      tracks: {
        href: playlist.tracks.href,
        total: playlist.tracks.total
      },
      type: playlist.type,
      uri: playlist.uri
    });
  }

  /**
   * TheSpotify ID for the playlist.
   *
   * @type {string}
   * @memberof SpotifySimplifiedPlaylist
   */
  readonly id: string;

  /**
   * true if the owner allows other users to modify the playlist.
   *
   * @type {boolean}
   * @memberof SpotifySimplifiedPlaylist
   */
  readonly collaborative: boolean;

  /**
   * Known external URLs for this playlist.
   *
   * @type {SpotifyExternalURLs}
   * @memberof SpotifySimplifiedPlaylist
   */
  readonly externalURLs: SpotifyExternalURLs;

  /**
   * A link to the Web API endpoint providing full details of the playlist.
   *
   * @type {string}
   * @memberof SpotifySimplifiedPlaylist
   */
  readonly href: string;

  /**
   * mages for the playlist. The array may be empty or contain up to three
   * images. The images are returned by size in descending order. See Working
   * with Playlists. Note: If returned, the source URL for the image (url) is
   * temporary and will expire in less than a day.
   *
   * @type {SpotifyImage[]}
   * @memberof SpotifySimplifiedPlaylist
   */
  readonly images: SpotifyImage[];

  /**
   * The name of the playlist.
   *
   * @type {string}
   * @memberof SpotifySimplifiedPlaylist
   */
  readonly name: string;

  /**
   * 	The user who owns the playlist
   *
   * @type {SpotifyUser}
   * @memberof SpotifySimplifiedPlaylist
   */
  readonly owner: SpotifyUser;

  /**
   * The playlist’s public/private status: true the playlist is public, false
   * the playlist is private, null the playlist status is not relevant. For more
   * about public/private status, see Working with Playlists.
   *
   * @type {(boolean | null)}
   * @memberof SpotifySimplifiedPlaylist
   */
  readonly public: boolean | null;

  /**
   * The version identifier for the current playlist. Can be supplied in other
   * requests to target a specific playlist version
   *
   * @type {string}
   * @memberof SpotifySimplifiedPlaylist
   */
  readonly snapshotID: string;

  /**
   * A collection containing a link (href) to the Web API endpoint where full
   * details of the playlist’s tracks can be retrieved, along with the total
   * number of tracks in the playlist.
   *
   * @type {{
   *     readonly href: string;
   *     readonly total: number;
   *   }}
   * @memberof SpotifySimplifiedPlaylist
   */
  readonly tracks: {
    readonly href: string;
    readonly total: number;
  };

  /**
   * The object type: “playlist”
   *
   * @type {SpotifyEntityType}
   * @memberof SpotifySimplifiedPlaylist
   */
  readonly type: SpotifyEntityType;

  /**
   * The Spotify URI for the playlist.
   *
   * @type {string}
   * @memberof SpotifySimplifiedPlaylist
   */
  readonly uri: string;
}
