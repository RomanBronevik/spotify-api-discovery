import { SpotifyFollowersAPIResponse } from './../interfaces/spotify-followers-api-response.interface';

/**
 * SpotifyFollowers
 *
 * @export
 * @class SpotifyFollowers
 */
export class SpotifyFollowers {
  /**
   * Creates an instance of SpotifyFollowers.
   *
   * @param {SpotifyFollowersAPIResponse} followers
   * @memberof SpotifyFollowers
   */
  constructor(followers: SpotifyFollowersAPIResponse) {
    this.href = followers.href;
    this.total = followers.total;
  }

  /**
   * A link to the Web API endpoint providing full details of the followers;
   * null if not available. Please note that this will always be set to null,
   * as the Web API does not support it at the moment.
   *
   * @type {string}
   * @memberof SpotifyFollowers
   */
  readonly href: string | null;

  /**
   * The total number of followers.
   *
   * @type {number}
   * @memberof SpotifyFollowers
   */
  readonly total: number;
}
