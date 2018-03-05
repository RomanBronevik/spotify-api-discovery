import { SpotifyEntityType } from './../../types/types/spotify-entity-type.type';
import { SpotifyFollowersAPIResponse } from './../../types/interfaces/spotify-followers-api-response.interface';
import { SpotifyImageAPIResponse } from './../../types/interfaces/spotify-image-api-response.interface';
import { SpotifyExternalURLs } from './../../types/types/spotify-external-urls.type';

export interface SpotifyArtistAPIResponse {
  /**
   * The Spotify ID for the artist.
   *
   * @type {string}
   * @memberof SpotifyArtistAPIResponse
   */
  readonly id: string;

  /**
   * Known external URLs for this artist.
   *
   * @type {SpotifyExternalURLs}
   * @memberof SpotifyArtistAPIResponse
   */
  readonly external_urls: SpotifyExternalURLs;

  /**
   * Information about the followers of the artist.
   *
   * @type {SpotifyFollowers}
   * @memberof SpotifyArtistAPIResponse
   */
  readonly followers: SpotifyFollowersAPIResponse;

  /**
   * A list of the genres the artist is associated with. For example:
   * "Prog Rock" , "Post-Grunge". (If not yet classified, the array is empty.)
   *
   * @type {string[]}
   * @memberof SpotifyArtistAPIResponse
   */
  readonly genres: string[];

  /**
   * A link to the Web API endpoint providing full details of the artist.
   *
   * @type {string}
   * @memberof SpotifyArtistAPIResponse
   */
  readonly href: string;

  /**
   * Images of the artist in various sizes, widest first.
   *
   * @type {SpotifyImageAPIResponse[]}
   * @memberof SpotifyArtistAPIResponse
   */
  readonly images: SpotifyImageAPIResponse[];

  /**
   * The name of the artist
   *
   * @type {String}
   * @memberof SpotifyArtistAPIResponse
   */
  readonly name: string;

  /**
   * The popularity of the artist. The value will be between 0 and 100, with 100
   * being the most popular. The artist’s popularity is calculated from the
   * popularity of all the artist’s tracks.
   *
   * @type {number}
   * @memberof SpotifyArtistAPIResponse
   */
  readonly popularity: number;

  /**
   * The object type: "artist"
   *
   * @type {SpotifyEntityType}
   * @memberof SpotifyArtistAPIResponse
   */
  readonly type: SpotifyEntityType;

  /**
   * The Spotify URI for the artist.
   *
   * @type {String}
   * @memberof SpotifyArtistAPIResponse
   */
  readonly uri: string;
}
