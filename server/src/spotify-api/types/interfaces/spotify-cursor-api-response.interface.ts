/**
 * SpotifyCursorAPIResponse
 *
 * @export
 * @interface SpotifyCursorAPIResponse
 */
export interface SpotifyCursorAPIResponse {
  /**
   * The cursor to use as key to find the next page of items.
   *
   * @type {string}
   * @memberof SpotifyCursorAPIResponse
   */
  readonly after: string;
}
