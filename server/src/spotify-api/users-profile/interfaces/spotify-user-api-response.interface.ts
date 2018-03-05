import { SpotifyFollowersAPIResponse } from './../../types/interfaces/spotify-followers-api-response.interface';
import { SpotifyImageAPIResponse } from './../../types/interfaces/spotify-image-api-response.interface';
import { SpotifyEntityType } from './../../types/types/spotify-entity-type.type';
import { SpotifyExternalURLs } from './../../types/types/spotify-external-urls.type';

/**
 * SpotifyUserAPIResponse
 *
 * @export
 * @interface SpotifyUserAPIResponse
 */
export interface SpotifyUserAPIResponse {
  /**
   * The Spotify user ID for this user.
   *
   * @type {string}
   * @memberof SpotifyUserAPIResponse
   */
  readonly id: string;

  /**
   * The name displayed on the user’s profile. null if not available.
   *
   * @type {string}
   * @memberof SpotifyUserAPIResponse
   */
  readonly display_name: string;

  /**
   * Known public external URLs for this user.
   *
   * @type {SpotifyExternalURLs}
   * @memberof SpotifyUserAPIResponse
   */
  readonly external_urls: SpotifyExternalURLs;

  /**
   * Information about the followers of this user.
   *
   * @type {SpotifyFollowersAPIResponse}
   * @memberof SpotifyUserAPIResponse
   */
  readonly followers: SpotifyFollowersAPIResponse;

  /**
   * A link to the Web API endpoint for this user.
   *
   * @type {string}
   * @memberof SpotifyUserAPIResponse
   */
  readonly href: string;

  /**
   * The user’s profile image.
   *
   * @type {SpotifyImageAPIResponse[]}
   * @memberof SpotifyUserAPIResponse
   */
  readonly images: SpotifyImageAPIResponse[];

  /**
   * The object type: “user”
   *
   * @type {SpotifyEntityType}
   * @memberof SpotifyUserAPIResponse
   */
  readonly type: SpotifyEntityType;

  /**
   * The Spotify URI for this user.
   *
   * @type {string}
   * @memberof SpotifyUserAPIResponse
   */
  readonly uri: string;
}
