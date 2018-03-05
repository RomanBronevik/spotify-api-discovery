/**
 * SpotifyFollowersAPIResponse
 *
 * @export
 * @class SpotifyFollowers
 */
export class SpotifyFollowersAPIResponse {
  /**
   * A link to the Web API endpoint providing full details of the followers;
   * null if not available. Please note that this will always be set to null,
   * as the Web API does not support it at the moment.
   *
   * @type {string}
   * @memberof SpotifyFollowersAPIResponse
   */
  readonly href: string | null;

  /**
   * The total number of followers.
   *
   * @type {number}
   * @memberof SpotifyFollowersAPIResponse
   */
  readonly total: number;
}
