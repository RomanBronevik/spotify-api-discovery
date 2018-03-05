import { SpotifyAlbumType } from './../types/spotify-album-type.type';
import { SpotifyReleaseDatePrecision } from './../types/spotify-release-date-precision.type';
import { SpotifyImageAPIResponse } from './spotify-image-api-response.interface';
import { SpotifyExternalURLs } from './../types/spotify-external-urls.type';
import { SpotifySimplifiedArtistAPIResponse } from './spotify-simplified-artist-api-response.interface';

/**
 * SpotifySimplifiedAlbumAPIResponse
 *
 * @export
 * @class SpotifySimplifiedAlbumAPIResponse
 */
export interface SpotifySimplifiedAlbumAPIResponse {
  /**
   * The Spotify URi for the album.
   *
   * @type {string}
   * @memberof SpotifySimplifiedAlbumAPIResponse
   */
  readonly id: string;

  /**
   * The type of the album: one of “album”, “single”, or “compilation”.
   *
   * @type {SpotifyAlbumType}
   * @memberof SpotifySimplifiedAlbumAPIResponse
   */
  readonly album_type: SpotifyAlbumType;

  /**
   * The artists of the album. Each artist object includes a link in href to
   * more detailed information about the artist.
   *
   * @type {SpotifySimplifiedArtistAPIRepsonse[]}
   * @memberof SpotifySimplifiedAlbumAPIResponse
   */
  readonly artists: SpotifySimplifiedArtistAPIResponse[];

  /**
   * The markets in which the album is available: ISO 3166-1 alpha-2 country
   * codes. Note that an album is considered available in a market when at least
   * 1 of its tracks is available in that market.
   *
   * @type {string[]}
   * @memberof SpotifySimplifiedAlbumAPIResponse
   */
  readonly available_markets: string[];

  /**
   * Known external URLs for this album.
   *
   * @type {SpotifyExternalURLs}
   * @memberof SpotifySimplifiedAlbumAPIResponse
   */
  readonly external_urls: SpotifyExternalURLs;

  /**
   * A link to the Web API endpoint providing full details of the album.
   *
   * @type {string}
   * @memberof SpotifySimplifiedAlbumAPIResponse
   */
  readonly href: string;

  /**
   * The cover art for the album in various sizes, widest first.
   *
   * @type {SpotifyImageAPIResponse[]}
   * @memberof SpotifySimplifiedAlbumAPIResponse
   */
  readonly images: SpotifyImageAPIResponse[];

  /**
   * The name of the album. In case of an album takedown, the value may be an
   * empty string.
   *
   * @type {string}
   * @memberof SpotifySimplifiedAlbumAPIResponse
   */
  readonly name: string;

  /**
   * The date the album was first released, for example 1981. Depending on the
   * precision, it might be shown as 1981-12 or 1981-12-15.
   *
   * @type {string}
   * @memberof SpotifySimplifiedAlbumAPIResponse
   */
  readonly release_date: string;

  /**
   * The precision with which release_date value is known: year , month ,
   * or day.
   *
   * @type {SpotifyReleaseDatePrecision}
   * @memberof SpotifySimplifiedAlbumAPIResponse
   */
  readonly release_date_precision: SpotifyReleaseDatePrecision;

  /**
   * The object type: “album”
   *
   * @type {string}
   * @memberof SpotifySimplifiedAlbumAPIResponse
   */
  readonly type: string;

  /**
   * 	The Spotify URI for the album.
   *
   * @type {string}
   * @memberof SpotifySimplifiedAlbumAPIResponse
   */
  readonly uri: string;
}
