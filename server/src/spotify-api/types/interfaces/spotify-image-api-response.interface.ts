/**
 * SpotifyImageAPIResponse
 *
 * @export
 * @interface SpotifyImageAPIResponse
 */
export interface SpotifyImageAPIResponse {
  /**
   * The image height in pixels. If unknown: null or not returned.
   *
   * @type {number}
   */
  readonly height: number;

  /**
   * The source URL of the image.
   *
   * @type {string}
   */
  readonly url: string;

  /**
   * The image width in pixels. If unknown: null or not returned.
   *
   * @type {number}
   */
  readonly width: number;
}
