import { SpotifyUserAPIResponse } from './../interfaces/spotify-user-api-response.interface';
import { SpotifyFollowers } from '../../types/classes/spotify-followers.class';
import { SpotifyEntityType } from '../../types/types/spotify-entity-type.type';
import { SpotifyImage } from './../../types/classes/spotify-image.class';
import { SpotifyExternalURLs } from './../../types/types/spotify-external-urls.type';

/**
 * SpotifyUser
 *
 * @export
 * @class SpotifyUser
 */
export class SpotifyUser {
  /**
   * Creates an instance of SpotifyUser.
   *
   * @param {SpotifyUserAPIResponse} user
   * @memberof SpotifyUser
   */
  constructor(user: SpotifyUserAPIResponse) {
    this.id = user.id;

    this.displayName = user.display_name;
    this.externalURLs = user.external_urls;
    this.followers = new SpotifyFollowers(user.followers);
    this.href = user.href;
    this.images = user.images.map(image => new SpotifyImage(image));
    this.type = user.type;
    this.uri = user.uri;
  }

  /**
   * The Spotify user ID for this user.
   *
   * @type {string}
   * @memberof SpotifyUser
   */
  readonly id: string;

  /**
   * The name displayed on the user’s profile. null if not available.
   *
   * @type {string}
   * @memberof SpotifyUser
   */
  readonly displayName: string;

  /**
   * Known public external URLs for this user.
   *
   * @type {SpotifyExternalURLs}
   * @memberof SpotifyUser
   */
  readonly externalURLs: SpotifyExternalURLs;

  /**
   * Information about the followers of this user.
   *
   * @type {SpotifyFollowers}
   * @memberof SpotifyUser
   */
  readonly followers: SpotifyFollowers;

  /**
   * A link to the Web API endpoint for this user.
   *
   * @type {string}
   * @memberof SpotifyUser
   */
  readonly href: string;

  /**
   * The user’s profile image.
   *
   * @type {SpotifyImage[]}
   * @memberof SpotifyUser
   */
  readonly images: SpotifyImage[];

  /**
   * The object type: “user”
   *
   * @type {SpotifyEntityType}
   * @memberof SpotifyUser
   */
  readonly type: SpotifyEntityType;

  /**
   * The Spotify URI for this user.
   *
   * @type {string}
   * @memberof SpotifyUser
   */
  readonly uri: string;
}
