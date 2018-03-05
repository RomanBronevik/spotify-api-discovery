import { SpotifyEntityType } from './../../types/types/spotify-entity-type.type';
import { SpotifyPaging } from './../../types/classes/spotify-paging.class';
import { SpotifyReleaseDatePrecision } from './../../types/types/spotify-release-date-precision.type';
import { SpotifyExternalURLs } from './../../types/types/spotify-external-urls.type';
import { SpotifyExternalIDs } from './../../types/types/spotify-external-ids.type';
import { SpotifyAlbumType } from './../../types/types/spotify-album-type.type';
import { SpotifyCopyright } from './../../types/classes/spotify-copyright.class';
import { SpotifyAlbumAPIResponse } from './../interfaces/album-spotify-api-response.interface';
import { SpotifySimplifiedArtist } from '../../types/classes/spotify-simplified-artist.class';
import { SpotifyImage } from '../../types/classes/spotify-image.class';
/**
 * Album
 *
 * @export
 * @class Album
 */
export class SpotifyAlbum {
  constructor(album: SpotifyAlbumAPIResponse) {
    this.id = album.id;

    this.albumType = album.album_type;
    this.artists = album.artists.map(
      artist => new SpotifySimplifiedArtist(artist)
    );
    this.availableMarkets = album.available_markets;
    this.copyrights = album.copyrights.map(
      copyright => new SpotifyCopyright(copyright)
    );
    this.externalIds = album.external_ids;
    this.externalUrls = album.external_urls;
    this.genres = album.genres;
    this.href = album.href;
    this.label = album.href;
    this.images = album.images.map(image => new SpotifyImage(image));
    this.label = album.label;
    this.name = album.name;
    this.popularity = album.popularity;
    this.releaseDate = album.release_date;
    this.releaseDatePrecision = album.release_date_precision;
    this.tracks = new SpotifyPaging<
      SpotifySimplfiedTrack,
      SpotifySimplfiedTrackAPIResponse
    >(
      album.tracks,
      album.tracks.items.map(item => new SpotifySimplifiedTrack(item))
    );
    this.type = album.type;
    this.uri = album.uri;
  }

  /**
   * The Spotify ID for the album.
   *
   * @type {string}
   * @memberof SpotifyAlbum
   */
  readonly id: string;

  /**
   * The type of the album: one of "album" , "single" , or "compilation".
   *
   * @type {SpotifyAlbumType}
   * @memberof SpotifyAlbum
   */
  readonly albumType: SpotifyAlbumType;

  /**
   * The artists of the album. Each artist object includes a link in href to
   * more detailed information about the artist.
   *
   * @type {SpotifySimplifiedArtist[]}
   * @memberof SpotifyAlbum
   */
  readonly artists: SpotifySimplifiedArtist[];

  /**
   * The markets in which the album is available: ISO 3166-1 alpha-2 country
   * codes. Note that an album is considered available in a market when at
   * least 1 of its tracks is available in that market.
   *
   * @type {string[]}
   * @memberof SpotifyAlbum
   */
  readonly availableMarkets: string[];

  /**
   * The copyright statements of the album.
   *
   * @type {SpotifyCopyright[]}
   * @memberof SpotifyAlbum
   */
  readonly copyrights: SpotifyCopyright[];

  /**
   * Known external IDs for the album.
   *
   * @type {SpotifyExternalIDs}
   * @memberof SpotifyAlbum
   */
  readonly externalIds: SpotifyExternalIDs;

  /**
   * Known external URLs for the album.
   *
   * @type {SpotifyExternalURLs}
   * @memberof SpotifyAlbum
   */
  readonly externalUrls: SpotifyExternalURLs;

  /**
   * A list of the genres used to classify the album. For example: "Prog Rock",
   * "Post-Grunge". (If not yet classified, the array is empty.)
   *
   * @type {string[]}
   * @memberof Album
   */
  readonly genres: string[];

  /**
   * A link to the Web API endpoint providing full details of the album.
   *
   * @type {string}
   * @memberof Album
   */
  readonly href: string;

  /**
   * The cover art for the album in various sizes, widest first.
   *
   * @type {SpotifyImage[]}
   * @memberof Album
   */
  readonly images: SpotifyImage[];

  /**
   * The label for the album.
   *
   * @type {string}
   * @memberof SpotifyAlbum
   */
  readonly label: string;

  /**
   * The name of the album. In case of an album takedown, the value may be an
   * empty string.
   *
   * @type {string}
   * @memberof SpotifyAlbum
   */
  readonly name: string;

  /**
   * The popularity of the album. The value will be between 0 and 100, with 100
   * being the most popular. The popularity is calculated from the popularity
   * of the album’s individual tracks.
   *
   * @type {number}
   * @memberof SpotifyAlbum
   */
  readonly popularity: number;

  /**
   * The date the album was first released, for example "1981-12-15". Depending
   * on the precision, it might be shown as "1981" or "1981-12".
   *
   * @type {string}
   * @memberof SpotifyAlbum
   */
  readonly releaseDate: string;

  /**
   * The precision with which release_date value is known: "year" , "month" ,
   * or "day".
   *
   * @type {ReleaseDatePrecision}
   * @memberof SpotifyAlbum
   */
  readonly releaseDatePrecision: SpotifyReleaseDatePrecision;

  /**
   * The tracks of the album.
   *
   * @type {SpotifyPaging<SpotifySimplifiedTrack>}
   * @memberof SpotifyAlbum
   */
  readonly tracks: SpotifyPaging<SpotifySimplifiedTrack>;

  /**
   * The object type: “album”
   *
   * @type {SpotifyEntityType}
   * @memberof SpotifyAlbum
   */
  readonly type: SpotifyEntityType;

  /**
   * The Spotify URI for the album.
   *
   * @type {string}
   * @memberof SpotifyAlbum
   */
  readonly uri: string;
}
