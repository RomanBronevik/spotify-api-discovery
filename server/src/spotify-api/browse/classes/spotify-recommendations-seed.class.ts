import { SpotifyRecommendationsSeedAPIResponse } from './../interfaces/spotify-recommendations-seed-api-response.interface';
import { SpotifyEntityType } from './../../types/types/spotify-entity-type.type';

/**
 * SpotifyRecommendationsSeed
 *
 * @export
 * @class SpotifyRecommendationsSeed
 */
export class SpotifyRecommendationsSeed {
  /**
   * Creates an instance of SpotifyRecommendationsSeed.
   *
   * @param {SpotifyRecommendationsSeed} seed
   * @memberof SpotifyRecommendationsSeed
   */
  constructor(seed: SpotifyRecommendationsSeed) {
    Object.keys(seed).forEach(key => {
      this[key] = seed[key];
    });
  }

  /**
   * Load SpotifyRecommendationsSeed from JSON
   *
   * @static
   * @param {SpotifyRecommendationsSeedAPIResponse} seed
   * @returns
   * @memberof SpotifyRecommendationsSeed
   */
  static fromJSON(seed: SpotifyRecommendationsSeedAPIResponse) {
    return new this({
      afterFilteringSize: seed.after_filtering_size,
      afterRelinkingSize: seed.after_relinking_size,
      href: seed.href,
      id: seed.id,
      initialPoolSize: seed.initial_pool_size,
      type: seed.type
    });
  }

  /**
   * The number of tracks available after min_* and max_* filters have been
   * applied.
   *
   * @type {number}
   * @memberof SpotifyRecommendationsSeed
   */
  readonly afterFilteringSize: number;

  /**
   * The number of tracks available after relinking for regional availability.
   *
   * @type {number}
   * @memberof SpotifyRecommendationsSeed
   */
  readonly afterRelinkingSize: number;

  /**
   * A link to the full track or artist data for this seed. For tracks this
   * will be a link to a Track Object. For artists a link to an Artist Object.
   * For genre seeds, this value will be null.
   *
   * @type {string}
   * @memberof SpotifyRecommendationsSeed
   */
  readonly href: string;

  /**
   * The id used to select this seed. This will be the same as the string used
   * in the seed_artists, seed_tracks or seed_genres parameter.
   *
   * @type {string}
   * @memberof SpotifyRecommendationsSeed
   */
  readonly id: string;

  /**
   * The number of recommended tracks available for this seed.
   *
   * @type {number}
   * @memberof SpotifyRecommendationsSeed
   */
  readonly initialPoolSize: number;

  /**
   * The entity type of this seed. One of artist, track or genre.
   *
   * @type {SpotifyEntityType}
   * @memberof SpotifyRecommendationsSeed
   */
  readonly type: SpotifyEntityType;
}
