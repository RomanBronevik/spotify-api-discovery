import { SpotifyArtistType } from './../types/spotify-artist-type.type';
import { SpotifyExternalURLs } from './../types/spotify-external-urls.type';

/**
 * Interface for the basic artist json object returned by the spotify API
 *
 * @export
 * @interface SpotifySimplifiedArtistAPIResponse
 */
export interface SpotifySimplifiedArtistAPIResponse {
  /**
   * The Spotify ID for the artist.
   *
   * @type {string}
   * @memberof SpotifySimplifiedArtistAPIResponse
   */
  readonly id: string;

  /**
   * Known external URLs for this artist.
   *
   * @type {SpotifyExternalURLs}
   * @memberof SpotifySimplifiedArtistAPIResponse
   */
  readonly external_urls: SpotifyExternalURLs;

  /**
   * A link to the Web API endpoint providing full details of the artist.
   *
   * @type {string}
   * @memberof SpotifySimplifiedArtistAPIResponse
   */
  readonly href: string;

  /**
   * The name of the artist
   *
   * @type {string}
   * @memberof SpotifySimplifiedArtistAPIResponse
   */
  readonly name: string;

  /**
   * The object type: "artist"
   *
   * @type {SpotifyArtistType}
   * @memberof SpotifySimplifiedArtistAPIResponse
   */
  readonly type: SpotifyArtistType;

  /**
   * The Spotify URI for the artist.
   *
   * @type {string}
   * @memberof SpotifySimplifiedArtistAPIResponse
   */
  readonly uri: string;
}
