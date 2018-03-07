import { SpotifyCursorBasedPagingAPIResponse } from './../interfaces/spotify-cursor-based-paging-api-response.interface';
import { SpotifyCursor } from './spotify-cursor.class';

/**
 * SpotifyCursorBasedPaging
 *
 * @export
 * @class SpotifyCursorBasedPaging
 * @template T
 */
export class SpotifyCursorBasedPaging<T> {
  /**
   * Creates an instance of SpotifyCursorBasedPaging.
   *
   * @param {SpotifyCursorBasedPaging<T>} paging
   * @memberof SpotifyCursorBasedPaging
   */
  constructor(paging: SpotifyCursorBasedPaging<T>) {
    Object.keys(paging).forEach(key => {
      this[key] = paging[key];
    });
  }

  /**
   * Load SpotifyCursorBasedPaging from JSON
   *
   * @static
   * @template U
   * @template V
   * @param {SpotifyCursorBasedPagingAPIResponse<V>} paging
   * @param {any} items
   * @returns
   * @memberof SpotifyCursorBasedPaging
   */
  static fromJSON<U, V>(paging: SpotifyCursorBasedPagingAPIResponse<V>, items) {
    return new this<U>({
      href: paging.href,
      items: items,
      limit: paging.limit,
      next: paging.next,
      cursors: SpotifyCursor.fromJSON(paging.cursors),
      total: paging.total
    });
  }

  /**
   * A link to the Web API endpoint returning the full result of the request.
   *
   * @type {string}
   * @memberof SpotifyCursorBasedPaging
   */
  readonly href: string;

  /**
   * The requested data.
   *
   * @type {T[]}
   * @memberof SpotifyCursorBasedPaging
   */
  readonly items: T[];

  /**
   * The maximum number of items in the response (as set in the query or by
   * default).
   *
   * @type {number}
   * @memberof SpotifyCursorBasedPaging
   */
  readonly limit: number;

  /**
   * URL to the next page of items. ( null if none)
   *
   * @type {string}
   * @memberof SpotifyCursorBasedPaging
   */
  readonly next: string;

  /**
   * The cursors used to find the next set of items.
   *
   * @type {SpotifyCursor}
   * @memberof SpotifyCursorBasedPaging
   */
  readonly cursors: SpotifyCursor;

  /**
   * The total number of items available to return.
   *
   * @type {number}
   * @memberof SpotifyCursorBasedPaging
   */
  readonly total: number;
}
