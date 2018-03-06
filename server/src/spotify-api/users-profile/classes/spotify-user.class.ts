import { SpotifyFollowers } from '../../types/classes/spotify-followers.class';
import { SpotifyEntityType } from '../../types/types/spotify-entity-type.type';
import { SpotifyImage } from './../../types/classes/spotify-image.class';
import { SpotifyExternalURLs } from './../../types/types/spotify-external-urls.type';
import { SpotifyUserAPIResponse } from './../interfaces/spotify-user-api-response.interface';

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
   * @param {SpotifyUser} user
   * @memberof SpotifyUser
   */
  constructor(user: SpotifyUser) {
    Object.keys(user).forEach(key => {
      this[key] = user[key];
    });
  }

  /**
   * Load SpotifyUser from JSON
   *
   * @static
   * @param {SpotifyUserAPIResponse} user
   * @returns
   * @memberof SpotifyUser
   */
  static fromJSON(user: SpotifyUserAPIResponse) {
    return new this({
      id: user.id,

      displayName: user.display_name,
      externalURLs: user.external_urls,
      followers: new SpotifyFollowers(user.followers),
      href: user.href,
      images: user.images.map(image => new SpotifyImage(image)),
      type: user.type,
      uri: user.uri
    });
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
