import { SpotifyFollowers } from '../../types/classes/spotify-followers.class';
import { SpotifyImage } from '../../types/classes/spotify-image.class';
import { SpotifyPaging } from '../../types/classes/spotify-paging.class';
import { SpotifyUser } from '../../users-profile/classes/spotify-user.class';
import { SpotifyEntityType } from './../../types/types/spotify-entity-type.type';
import { SpotifyExternalURLs } from './../../types/types/spotify-external-urls.type';
import { SpotifySnapshotID } from './../../types/types/spotify-snapshot-id.type';

/**
 * SpotifyPlaylist
 *
 * @export
 * @class SpotifyPlaylist
 */
export class SpotifyPlaylist {
  /**
   * Creates an instance of SpotifyPlaylist.
   *
   * @param {SpotifyPlaylist} playlist
   * @memberof SpotifyPlaylist
   */
  constructor(playlist: SpotifyPlaylist) {
    Object.keys(playlist).forEach(key => {
      this[key] = playlist[key];
    });
  }

  /**
   * Load SpotifyPlaylist from JSON
   *
   * @static
   * @param {SpotifyPlaylistAPIResponse} playlist
   * @returns
   * @memberof SpotifyPlaylist
   */
  static fromJSON(playlist: SpotifyPlaylistAPIResponse) {
    return new this({
      collaborative: playlist.collaborative,
      description: playlist.descrption,
      externalURLs: playlist.external_urls,
      followers: SpotifyFollowers.fromJSON(playlist.followers),
      href: playlist.href,
      id: playlist.id,
      images: playlist.images.map(image => SpotifyImage.fromJSON(image)),
      name: playlist.name,
      owner: SpotifyUser.fromJSON(playlist.owner),
      public: playlist.public,
      snapshotID: playlist.snapshot_id,
      tracks: SpotifyPaging.fromJSON<
        SpotifyPlaylistTrack,
        SpotifyPlaylistTrackAPIResponse
      >(
        playlist.tracks,
        playlist.tracks.items.map(item => SpotifyPlaylistTrack.fromJSON(item))
      ),
      type: playlist.type,
      uri: playlist.uri
    });
  }

  /**
   * true if the owner allows other users to modify the playlist.
   *
   * @type {boolean}
   * @memberof SpotifyPlaylist
   */
  readonly collaborative: boolean;

  /**
   * The playlist description. Only returned for modified, verified playlists,
   * otherwise null.
   *
   * @type {string}
   * @memberof SpotifyPlaylist
   */
  readonly description: string;

  /**
   * Known external URLs for this playlist.
   *
   * @type {SpotifyExternalURLs}
   * @memberof SpotifyPlaylist
   */
  readonly externalURLs: SpotifyExternalURLs;

  /**
   * Information about the followers of the playlist.
   *
   * @type {SpotifyFollowers}
   * @memberof SpotifyPlaylist
   */
  readonly followers: SpotifyFollowers;

  /**
   * 	A link to the Web API endpoint providing full details of the playlist.
   *
   * @type {string}
   * @memberof SpotifyPlaylist
   */
  readonly href: string;

  /**
   * The Spotify ID for the playlist.
   *
   * @type {string}
   * @memberof SpotifyPlaylist
   */
  readonly id: string;

  /**
   * Images for the playlist. The array may be empty or contain up to three
   * images. The images are returned by size in descending order. See Working
   * with Playlists. Note: If returned, the source URL for the image ( url ) is
   * temporary and will expire in less than a day.
   *
   * @type {SpotifyImage[]}
   * @memberof SpotifyPlaylist
   */
  readonly images: SpotifyImage[];

  /**
   * The name of the playlist.
   *
   * @type {string}
   * @memberof SpotifyPlaylist
   */
  readonly name: string;

  /**
   * The user who owns the playlist
   *
   * @type {SpotifyUser}
   * @memberof SpotifyPlaylist
   */
  readonly owner: SpotifyUser;

  /**
   * The playlist’s public/private status: true the playlist is public, false
   * the playlist is private, null the playlist status is not relevant. For more
   * about public/private status, see Working with Playlists.
   *
   * @type {boolean}
   * @memberof SpotifyPlaylist
   */
  readonly public: boolean;

  /**
   * The version identifier for the current playlist. Can be supplied in other
   * requests to target a specific playlist version: see Remove tracks
   * from a playlist
   *
   * @type {SpotifySnapshotID}
   * @memberof SpotifyPlaylist
   */
  readonly snapshotID: SpotifySnapshotID;

  /**
   * Information about the tracks of the playlist.
   *
   * @type {SpotifyPaging<SpotifyPlaylistTrack>}
   * @memberof SpotifyPlaylist
   */
  readonly tracks: SpotifyPaging<SpotifyPlaylistTrack>;

  /**
   * The object type: “playlist”
   *
   * @type {SpotifyEntityType}
   * @memberof SpotifyPlaylist
   */
  readonly type: SpotifyEntityType;

  /**
   * The Spotify URI for the playlist.
   *
   * @type {string}
   * @memberof SpotifyPlaylist
   */
  readonly uri: string;
}
