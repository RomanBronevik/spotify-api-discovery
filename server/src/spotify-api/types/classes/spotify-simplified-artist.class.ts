import { SpotifyEntityType } from './../types/spotify-entity-type.type';
import { SpotifyExternalURLs } from './../types/spotify-external-urls.type';
import { SpotifySimplifiedArtistAPIResponse } from './../interfaces/spotify-simplified-artist-api-response.interface';

/**
 * SpotifySimplifiedArtist
 *
 * @export
 * @class SpotifySimplifiedArtist
 */
export class SpotifySimplifiedArtist {
  /**
   * Creates an instance of SpotifySimplifiedArtist.
   *
   * @param {SpotifySimplifiedArtistAPIResponse} artist
   * @memberof SpotifySimplifiedArtist
   */
  constructor(artist: SpotifySimplifiedArtistAPIResponse) {
    this.id = artist.id;
    this.externalUrls = artist.external_urls;
    this.href = artist.href;
    this.name = artist.name;
    this.uri = artist.uri;
  }

  /**
   * The Spotify ID for the artist.
   *
   * @type {string}
   * @memberof SpotifySimplifiedArtist
   */
  readonly id: string;

  /**
   * Known external URLs for this artist.
   *
   * @type {SpotifyExternalURLs}
   * @memberof SpotifySimplifiedArtist
   */
  readonly externalUrls: SpotifyExternalURLs;

  /**
   * A link to the Web API endpoint providing full details of the artist.
   *
   * @type {string}
   * @memberof SpotifySimplifiedArtist
   */
  readonly href: string;

  /**
   * The name of the artist
   *
   * @type {string}
   * @memberof SpotifySimplifiedArtist
   */
  readonly name: string;

  /**
   * The object type: "artist"
   *
   * @type {SpotifyEntityType}
   * @memberof SpotifySimplifiedArtist
   */
  readonly type: SpotifyEntityType;

  /**
   * The Spotify URI for the artist.
   *
   * @type {string}
   * @memberof SpotifySimplifiedArtist
   */
  readonly uri: string;
}
