import { SpotifyPagingAPIResponse } from './../interfaces/spotify-paging-api-response.interface';

/**
 * SpotifyPaging
 *
 * @export
 * @class SpotifyPaging
 * @template T
 */
export class SpotifyPaging<T> {
  /**
   * Creates an instance of SpotifyPaging.
   *
   * @param {SpotifyPaging<U>} paging
   * @param {class} ItemsClass
   * @memberof SpotifyPaging
   */
  constructor(paging: SpotifyPaging<T>, items) {
    this.href = paging.href;
    this.items = items;
    this.limit = paging.limit;
    this.next = paging.next;
    this.offset = paging.offset;
    this.previous = paging.previous;
    this.total = paging.total;
  }

  /**
   * Load SpotifyPaging from JSON
   *
   * @static
   * @template U
   * @template V
   * @param {SpotifyPagingAPIResponse<V>} paging
   * @param {any} items
   * @returns
   * @memberof SpotifyPaging
   */
  static fromJSON<U, V>(paging: SpotifyPagingAPIResponse<V>, items) {
    return new this<U>(
      {
        href: paging.href,
        items: items,
        limit: paging.limit,
        next: paging.next,
        offset: paging.offset,
        previous: paging.previous,
        total: paging.total
      },
      items
    );
  }

  /**
   * A link to the Web API endpoint returning the full result of the request.
   *
   * @type {string}
   * @memberof SpotifyPaging
   */
  public readonly href: string;

  /**
   * The requested data.
   *
   * @type {T[]}
   * @memberof SpotifyPaging
   */
  public readonly items: T[];

  /**
   * The maximum number of items in the response (as set in the query or by
   * default).
   *
   * @type {number}
   * @memberof SpotifyPaging
   */
  public readonly limit: number;

  /**
   * URL to the next page of items. ( null if none)
   *
   * @type {(string | null)}
   * @memberof SpotifyPaging
   */
  public readonly next: string | null;

  /**
   * The offset of the items returned (as set in the query or by default).
   *
   * @type {number}
   * @memberof SpotifyPaging
   */
  public readonly offset: number;

  /**
   * URL to the previous page of items. ( null if none)
   *
   * @type {string | null}
   * @memberof SpotifyPaging
   */
  public readonly previous: string | null;

  /**
   * 	The total number of items available to return.
   *
   * @type {number}
   * @memberof SpotifyPaging
   */
  public readonly total: number;
}
