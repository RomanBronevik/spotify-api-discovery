import { SpotifySimplifiedTrackAPIResponse } from './../../types/interfaces/spotify-simplified-track-api-response.interface';
import { SpotifyRecommendationsSeedAPIResponse } from './spotify-recommendations-seed-api-response.interface';

/**
 * SpotifyRecommendationsAPIResponse
 *
 * @export
 * @class SpotifyRecommendationsAPIResponse
 */
export interface SpotifyRecommendationsAPIResponse {
  /**
   * An array of recommendation seed objects.
   *
   * @type {SpotifyRecommendatsionsSeedAPIResponse[]}
   * @memberof SpotifyRecommendationsAPIResponse
   */
  readonly seeds: SpotifyRecommendationsSeedAPIResponse[];

  /**
   * An array of track object (simplified) ordered according to the parameters
   * supplied.
   *
   * @type {SpotifySimplifiedTrack[]}
   * @memberof SpotifyRecommendationsAPIResponse
   */
  readonly tracks: SpotifySimplifiedTrackAPIResponse[];
}
