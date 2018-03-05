import { SpotifyAlbumType } from '../types/spotify-album-type.type';
import { SpotifySimplifiedAlbumAPIResponse } from './../interfaces/spotify-simplified-album-api-response.interface';
import { SpotifyExternalURLs } from './../types/spotify-external-urls.type';
import { SpotifyReleaseDatePrecision } from './../types/spotify-release-date-precision.type';
import { SpotifyImage } from './spotify-image.class';
import { SpotifySimplifiedArtist } from './spotify-simplified-artist.class';

/**
 * SpotifySimplifiedAlbum
 *
 * @export
 * @class SpotifySimplifiedAlbum
 */
export class SpotifySimplifiedAlbum {
  /**
   * Creates an instance of SpotifySimplifiedAlbum.
   *
   * @param {SpotifySimplifiedAlbumAPIResponse} album
   * @memberof SpotifySimplifiedAlbum
   */
  constructor(album: SpotifySimplifiedAlbumAPIResponse) {
    this.id = album.id;

    this.albumType = album.album_type;
    this.artists = album.artists.map(
      artist => new SpotifySimplifiedArtist(artist)
    );
    this.availableMarkets = album.available_markets;
    this.externalURLs = album.external_urls;
    this.href = album.href;
    this.images = album.images.map(image => new SpotifyImage(image));
    this.name = album.name;
    this.releaseDate = album.release_date;
    this.releaseDatePrecision = album.release_date_precision;
    this.type = album.type;
    this.uri = album.uri;
  }

  /**
   * The Spotify URi for the album.
   *
   * @type {string}
   * @memberof SpotifySimplifiedAlbum
   */
  readonly id: string;

  /**
   * The type of the album: one of “album”, “single”, or “compilation”.
   *
   * @type {SpotifyAlbumType}
   * @memberof SpotifySimplifiedAlbum
   */
  readonly albumType: SpotifyAlbumType;

  /**
   * The artists of the album. Each artist object includes a link in href to
   * more detailed information about the artist.
   *
   * @type {SpotifySimplifiedArtist[]}
   * @memberof SpotifySimplifiedAlbum
   */
  readonly artists: SpotifySimplifiedArtist[];

  /**
   * The markets in which the album is available: ISO 3166-1 alpha-2 country
   * codes. Note that an album is considered available in a market when at least
   * 1 of its tracks is available in that market.
   *
   * @type {string[]}
   * @memberof SpotifySimplifiedAlbum
   */
  readonly availableMarkets: string[];

  /**
   * Known external URLs for this album.
   *
   * @type {SpotifyExternalURLs}
   * @memberof SpotifySimplifiedAlbum
   */
  readonly externalURLs: SpotifyExternalURLs;

  /**
   * A link to the Web API endpoint providing full details of the album.
   *
   * @type {string}
   * @memberof SpotifySimplifiedAlbum
   */
  readonly href: string;

  /**
   * The cover art for the album in various sizes, widest first.
   *
   * @type {SpotifyImage[]}
   * @memberof SpotifySimplifiedAlbum
   */
  readonly images: SpotifyImage[];

  /**
   * The name of the album. In case of an album takedown, the value may be an
   * empty string.
   *
   * @type {string}
   * @memberof SpotifySimplifiedAlbum
   */
  readonly name: string;

  /**
   * The date the album was first released, for example 1981. Depending on the
   * precision, it might be shown as 1981-12 or 1981-12-15.
   *
   * @type {string}
   * @memberof SpotifySimplifiedAlbum
   */
  readonly releaseDate: string;

  /**
   * The precision with which release_date value is known: year , month ,
   * or day.
   *
   * @type {SpotifyReleaseDatePrecision}
   * @memberof SpotifySimplifiedAlbum
   */
  readonly releaseDatePrecision: SpotifyReleaseDatePrecision;

  /**
   * The object type: “album”
   *
   * @type {string}
   * @memberof SpotifySimplifiedAlbum
   */
  readonly type: string;

  /**
   * 	The Spotify URI for the album.
   *
   * @type {string}
   * @memberof SpotifySimplifiedAlbum
   */
  readonly uri: string;
}
