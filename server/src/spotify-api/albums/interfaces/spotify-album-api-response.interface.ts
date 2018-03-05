import { SpotifyPagingAPIResponse } from './../../types/interfaces/spotify-paging-api-response.interface';
import { SpotifyAlbumType } from './../../types/types/spotify-album-type.type';
import { SpotifySimplifiedArtistAPIResponse } from './../../types/interfaces/spotify-simplified-artist-api-response.interface';
import { SpotifyCopyrightAPIResponse } from './../../types/interfaces/spotify-copyright-api-response.interface';
import { SpotifyExternalURLs } from './../../types/types/spotify-external-urls.type';
import { SpotifyImageAPIResponse } from './../../types/interfaces/spotify-image-api-response.interface';
import { SpotifyReleaseDatePrecision } from './../../types/types/spotify-release-date-precision.type';
import { SpotifyPaging } from './../../types/classes/spotify-paging.class';
import { SpotifyEntityType } from './../../types/types/spotify-entity-type.type';

/**
 * Interface for the album json object returned by the spotify API
 *
 * @export
 * @interface SpotifyAlbumAPIResponse
 */
export interface SpotifyAlbumAPIResponse {
  /**
   * The Spotify ID for the album.
   *
   * @type {string}
   * @memberof SpotifyAlbumAPIResponse
   */
  readonly id: string;

  /**
   * The type of the album: one of "album" , "single" , or "compilation".
   *
   * @type {SpotifyAlbumType}
   * @memberof SpotifyAlbumAPIResponse
   */
  readonly album_type: SpotifyAlbumType;

  /**
   * The artists of the album. Each artist object includes a link in href to
   * more detailed information about the artist.
   *
   * @type {SpotifySimplifiedArtistAPIResponse[]}
   * @memberof SpotifyAlbumAPIResponse
   */
  readonly artists: SpotifySimplifiedArtistAPIResponse[];

  /**
   * The markets in which the album is available: ISO 3166-1 alpha-2 country
   * codes. Note that an album is considered available in a market when at
   * least 1 of its tracks is available in that market.
   *
   * @type {string[]}
   * @memberof SpotifyAlbumAPIResponse
   */
  readonly available_markets: string[];

  /**
   * The copyright statements of the album.
   *
   * @type {SpotifyCopyrightAPIResponse[]}
   * @memberof SpotifyAlbumAPIResponse
   */
  readonly copyrights: SpotifyCopyrightAPIResponse[];

  /**
   * Known external IDs for the album.
   *
   * @type {SpotifyExternalURLs}
   * @memberof SpotifyAlbumAPIResponse
   */
  readonly external_ids: SpotifyExternalURLs;

  /**
   * Known external URLs for this album.
   *
   * @type {SpotifyExternalURLs}
   * @memberof SpotifyAlbumAPIResponse
   */
  readonly external_urls: SpotifyExternalURLs;

  /**
   * A list of the genres used to classify the album. For example: "Prog Rock",
   * "Post-Grunge". (If not yet classified, the array is empty.)
   *
   * @type {string[]}
   * @memberof SpotifyAlbumAPIResponse
   */
  readonly genres: string[];

  /**
   * A link to the Web API endpoint providing full details of the album.
   *
   * @type {string}
   * @memberof SpotifyAlbumAPIResponse
   */
  readonly href: string;

  /**
   * The cover art for the album in various sizes, widest first.
   *
   * @type {Image[]}
   * @memberof SpotifyAlbumAPIResponse
   */
  readonly images: SpotifyImageAPIResponse[];

  /**
   * The label for the album.
   *
   * @type {string}
   * @memberof SpotifyAlbumAPIResponse
   */
  readonly label: string;

  /**
   * The name of the album. In case of an album takedown, the value may be an
   * empty string.
   *
   * @type {string}
   * @memberof SpotifyAlbumAPIResponse
   */
  readonly name: string;

  /**
   * The popularity of the album. The value will be between 0 and 100, with 100
   * being the most popular. The popularity is calculated from the popularity
   * of the album’s individual tracks.
   *
   * @type {number}
   * @memberof SpotifyAlbumAPIResponse
   */
  readonly popularity: number;

  /**
   * The date the album was first released, for example "1981-12-15". Depending
   * on the precision, it might be shown as "1981" or "1981-12".
   *
   * @type {string}
   * @memberof SpotifyAlbumAPIResponse
   */
  readonly release_date: string;

  /**
   * The precision with which release_date value is known: "year" , "month" ,
   * or "day".
   *
   * @type {SpotifyReleaseDatePrecision}
   * @memberof SpotifyAlbumAPIResponse
   */
  readonly release_date_precision: SpotifyReleaseDatePrecision;

  /**
   * The tracks of the album.
   *
   * @type {SpotifyPaging<SpotifyTrackSimplifiedAPIResponse>}
   * @memberof SpotifyAlbumAPIResponse
   */
  readonly tracks: SpotifyPagingAPIResponse<SpotifyTrackSimplifiedAPIResponse>;

  /**
   * The object type: “album”
   *
   * @type {SpotifyEntityType}
   * @memberof SpotifyAlbumAPIResponse
   */
  readonly type: SpotifyEntityType;

  /**
   * The Spotify URI for the album.
   *
   * @type {string}
   * @memberof SpotifyAlbumAPIResponse
   */
  readonly uri: string;
}
