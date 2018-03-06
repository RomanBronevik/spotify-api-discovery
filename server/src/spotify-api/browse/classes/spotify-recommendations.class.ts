import { SpotifySimplifiedTrack } from './../../types/classes/spotify-simplified-track.class';
import { SpotifyRecommendationsAPIResponse } from './../interfaces/spotify-recommendations-api-response.interface';
import { SpotifyRecommendationsSeed } from './spotify-recommendations-seed.class';

/**
 * SpotifyRecommendations
 *
 * @export
 * @class SpotifyRecommendations
 */
export class SpotifyRecommendations {
  /**
   * Creates an instance of SpotifyRecommendations.
   *
   * @param {SpotifyRecommendations} recommendations
   * @memberof SpotifyRecommendations
   */
  constructor(recommendations: SpotifyRecommendations) {
    Object.keys(recommendations).forEach(key => {
      this[key] = recommendations[key];
    });
  }

  /**
   * Load SpotifyRecommendations from JSON
   *
   * @static
   * @param {SpotifyRecommendationsAPIResponse} recommendations
   * @returns
   * @memberof SpotifyRecommendations
   */
  static fromJSON(recommendations: SpotifyRecommendationsAPIResponse) {
    return new this({
      seeds: recommendations.seeds.map(seed =>
        SpotifyRecommendationsSeed.fromJSON(seed)
      ),
      tracks: recommendations.tracks.map(track =>
        SpotifySimplifiedTrack.fromJSON(track)
      )
    });
  }

  /**
   * An array of recommendation seed objects.
   *
   * @type {SpotifyRecommendatsionsSeed[]}
   * @memberof SpotifyRecommendations
   */
  readonly seeds: SpotifyRecommendationsSeed[];

  /**
   * An array of track object (simplified) ordered according to the parameters
   * supplied.
   *
   * @type {SpotifySimplifiedTrack[]}
   * @memberof SpotifyRecommendations
   */
  readonly tracks: SpotifySimplifiedTrack[];
}
