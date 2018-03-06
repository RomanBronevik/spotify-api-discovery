import { SpotifyImageAPIResponse } from './../../types/interfaces/spotify-image-api-response.interface';

/**
 * SpotifyCategoryAPIResponse
 *
 * @export
 * @class SpotifyCategoryAPIResponse
 */
export interface SpotifyCategoryAPIResponse {
  /**
   * The Spotify category ID of the category.
   *
   * @type {string}
   * @memberof SpotifyCategoryAPIResponse
   */
  readonly id: string;

  /**
   * A link to the Web API endpoint returning full details of the category.
   *
   * @type {string}
   * @memberof SpotifyCategoryAPIResponse
   */
  readonly href: string;

  /**
   * The category icon, in various sizes.
   *
   * @type {SpotifyImage[]}
   * @memberof SpotifyCategoryAPIResponse
   */
  readonly icons: SpotifyImageAPIResponse[];

  /**
   * The name of the category.
   *
   * @type {string}
   * @memberof SpotifyCategoryAPIResponse
   */
  readonly name: string;
}
