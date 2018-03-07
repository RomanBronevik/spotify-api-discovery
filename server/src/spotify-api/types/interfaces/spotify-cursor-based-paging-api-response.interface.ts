import { SpotifyCursorAPIResponse } from './spotify-cursor-api-response.interface';

/**
 * SpotifyCursorBasedPagingAPIResponse
 *
 * @export
 * @interface SpotifyCursorBasedPagingAPIResponse
 * @template T
 */
export interface SpotifyCursorBasedPagingAPIResponse<T> {
  /**
   * A link to the Web API endpoint returning the full result of the request.
   *
   * @type {string}
   * @memberof SpotifyCursorBasedPagingAPIResponse
   */
  readonly href: string;

  /**
   * The requested data.
   *
   * @type {T[]}
   * @memberof SpotifyCursorBasedPagingAPIResponse
   */
  readonly items: T[];

  /**
   * The maximum number of items in the response (as set in the query or by
   * default).
   *
   * @type {number}
   * @memberof SpotifyCursorBasedPagingAPIResponse
   */
  readonly limit: number;

  /**
   * URL to the next page of items. ( null if none)
   *
   * @type {string}
   * @memberof SpotifyCursorBasedPagingAPIResponse
   */
  readonly next: string;

  /**
   * The cursors used to find the next set of items.
   *
   * @type {SpotifyCursor}
   * @memberof SpotifyCursorBasedPagingAPIResponse
   */
  readonly cursors: SpotifyCursorAPIResponse;

  /**
   * The total number of items available to return.
   *
   * @type {number}
   * @memberof SpotifyCursorBasedPagingAPIResponse
   */
  readonly total: number;
}
