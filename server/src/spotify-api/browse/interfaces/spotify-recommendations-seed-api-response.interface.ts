import { SpotifyEntityType } from './../../types/types/spotify-entity-type.type';
/**
 * SpotifyRecommendationsSeedAPIResponse
 *
 * @export
 * @interface SpotifyRecommendationsSeedAPIResponse
 */
export interface SpotifyRecommendationsSeedAPIResponse {
  /**
   * The number of tracks available after min_* and max_* filters have been
   * applied.
   *
   * @type {number}
   * @memberof SpotifyRecommendationsSeed
   */
  readonly after_filtering_size: number;

  /**
   * The number of tracks available after relinking for regional availability.
   *
   * @type {number}
   * @memberof SpotifyRecommendationsSeed
   */
  readonly after_relinking_size: number;

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
  readonly initial_pool_size: number;

  /**
   * The entity type of this seed. One of artist, track or genre.
   *
   * @type {SpotifyEntityType}
   * @memberof SpotifyRecommendationsSeed
   */
  readonly type: SpotifyEntityType;
}
