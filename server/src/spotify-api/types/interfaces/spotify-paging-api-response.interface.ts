/**
 * SpotifyPagingAPIResponse
 *
 * @export
 * @interface SpotifyPagingAPIResponse
 * @template T
 */
export interface SpotifyPagingAPIResponse<T> {
  /**
   * A link to the Web API endpoint returning the full result of the request.
   *
   * @type {string}
   * @memberof SpotifyPagingAPIResponse
   */
  readonly href: string;

  /**
   * The requested data.
   *
   * @type {T[]}
   * @memberof SpotifyPagingAPIResponse
   */
  readonly items: T[];

  /**
   * The maximum number of items in the response (as set in the query or by
   * default).
   *
   * @type {number}
   * @memberof SpotifyPagingAPIResponse
   */
  readonly limit: number;

  /**
   * URL to the next page of items. ( null if none)
   *
   * @type {(string | null)}
   * @memberof SpotifyPagingAPIResponse
   */
  readonly next: string | null;

  /**
   * The offset of the items returned (as set in the query or by default).
   *
   * @type {number}
   * @memberof SpotifyPagingAPIResponse
   */
  readonly offset: number;

  /**
   * URL to the previous page of items. ( null if none)
   *
   * @type {string | null}
   * @memberof SpotifyPagingAPIResponse
   */
  readonly previous: string | null;

  /**
   * 	The total number of items available to return.
   *
   * @type {number}
   * @memberof SpotifyPagingAPIResponse
   */
  readonly total: number;
}
