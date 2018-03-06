import { SpotifyImageAPIResponse } from './../interfaces/spotify-image-api-response.interface';
/**
 * SpotifyImage
 *
 * @export
 * @class SpotifyImage
 */
export class SpotifyImage {
  constructor(image: SpotifyImage) {
    Object.keys(image).forEach(key => {
      this[key] = image[key];
    });
  }

  /**
   * Load SpotifyImage from JSON
   *
   * @static
   * @param {SpotifyImageAPIResponse} image
   * @returns
   * @memberof SpotifyImage
   */
  static fromJSON(image: SpotifyImageAPIResponse) {
    return new this({
      height: image.height,
      url: image.url,
      width: image.width
    });
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
