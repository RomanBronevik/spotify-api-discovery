import { SpotifyCursorAPIResponse } from './../interfaces/spotify-cursor-api-response.interface';

/**
 * SpotifyCursor
 *
 * @export
 * @class SpotifyCursor
 */
export class SpotifyCursor {
  /**
   * Creates an instance of SpotifyCursor.
   *
   * @param {SpotifyCursor} cursor
   * @memberof SpotifyCursor
   */
  constructor(cursor: SpotifyCursor) {
    Object.keys(cursor).forEach(key => {
      this[key] = cursor[key];
    });
  }

  /**
   * Load SpotifyCursor from JSON
   *
   * @static
   * @param {SpotifyCursorAPIResponse} cursor
   * @returns
   * @memberof SpotifyCursor
   */
  static fromJSON(cursor: SpotifyCursorAPIResponse) {
    return new this({
      after: cursor.after
    });
  }

  /**
   * The cursor to use as key to find the next page of items.
   *
   * @type {string}
   * @memberof SpotifyCursor
   */
  readonly after: string;
}
