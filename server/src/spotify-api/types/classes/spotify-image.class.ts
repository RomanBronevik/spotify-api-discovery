import { SpotifyImageAPIResponse } from './../interfaces/spotify-image-api-response.interface';
/**
 * SpotifyImage
 *
 * @export
 * @class SpotifyImage
 */
export class SpotifyImage {
  constructor(image: SpotifyImageAPIResponse) {
    this.height = image.height;
    this.url = image.url;
    this.width = image.width;
  }

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
