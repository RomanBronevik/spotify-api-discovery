import { SpotifyCategoryAPIResponse } from './../interfaces/spotify-category.interface';
import { SpotifyImage } from '../../types/classes/spotify-image.class';

/**
 * SpotifyCategory
 *
 * @export
 * @class SpotifyCategory
 */
export class SpotifyCategory {
  /**
   * Creates an instance of SpotifyCategory.
   *
   * @param {SpotifyCategory} category
   * @memberof SpotifyCategory
   */
  constructor(category: SpotifyCategory) {
    Object.keys(category).forEach(key => {
      this[key] = category[key];
    });
  }

  /**
   * Load SpotifyCategory from JSON
   *
   * @static
   * @param {SpotifyCategoryAPIResponse} category
   * @returns
   * @memberof SpotifyCategory
   */
  static fromJSON(category: SpotifyCategoryAPIResponse) {
    return new this({
      id: category.id,
      href: category.href,
      icons: category.icons,
      name: category.name
    });
  }

  /**
   * The Spotify category ID of the category.
   *
   * @type {string}
   * @memberof SpotifyCategory
   */
  readonly id: string;

  /**
   * A link to the Web API endpoint returning full details of the category.
   *
   * @type {string}
   * @memberof SpotifyCategory
   */
  readonly href: string;

  /**
   * The category icon, in various sizes.
   *
   * @type {SpotifyImage[]}
   * @memberof SpotifyCategory
   */
  readonly icons: SpotifyImage[];

  /**
   * The name of the category.
   *
   * @type {string}
   * @memberof SpotifyCategory
   */
  readonly name: string;
}
