import { SpotifyAlbumType } from '../types/spotify-album-type.type';
import { SpotifySimplifiedAlbumAPIResponse } from './../interfaces/spotify-simplified-album-api-response.interface';
import { SpotifyEntityType } from './../types/spotify-entity-type.type';
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
   * @param {SpotifySimplifiedAlbum} album
   * @memberof SpotifySimplifiedAlbum
   */
  constructor(album: SpotifySimplifiedAlbum) {
    Object.keys(album).forEach(key => {
      this[key] = album[key];
    });
  }

  /**
   * Load SpotifySimplifiedAlbum from JSON
   *
   * @static
   * @param {SpotifySimplifiedAlbumAPIResponse} album
   * @returns
   * @memberof SpotifySimplifiedAlbum
   */
  static fromJSON(album: SpotifySimplifiedAlbumAPIResponse) {
    return new this({
      id: album.id,
      albumType: album.album_type,
      artists: album.artists.map(artist =>
        SpotifySimplifiedArtist.fromJSON(artist)
      ),
      availableMarkets: album.available_markets,
      externalURLs: album.external_urls,
      href: album.href,
      images: album.images.map(image => SpotifyImage.fromJSON(image)),
      name: album.name,
      releaseDate: album.release_date,
      releaseDatePrecision: album.release_date_precision,
      type: album.type,
      uri: album.uri
    });
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
   * @type {SpotifyEntityType}
   * @memberof SpotifySimplifiedAlbum
   */
  readonly type: SpotifyEntityType;

  /**
   * 	The Spotify URI for the album.
   *
   * @type {string}
   * @memberof SpotifySimplifiedAlbum
   */
  readonly uri: string;
}
