import { SpotifyFollowers } from '../../types/classes/spotify-followers.class';
import { SpotifyImage } from '../../types/classes/spotify-image.class';
import { SpotifyExternalURLs } from '../../types/types/spotify-external-urls.type';
import { SpotifyArtistAPIResponse } from './../interfaces/spotify-artist-api-response.interface';

/**
 * SpotifyArtist
 *
 * @export
 * @class SpotifyArtist
 */
export class SpotifyArtist {
  /**
   * Creates an instance of SpotifyArtist.
   *
   * @param {SpotifyArtistAPIResponse} artist
   * @memberof SpotifyArtist
   */
  constructor(artist: SpotifyArtistAPIResponse) {
    this.id = artist.id;

    this.externalURLs = artist.external_urls;
    this.followers = new SpotifyFollowers(artist.followers);
    this.genres = artist.genres;
    this.href = artist.href;
    this.images = artist.images.map(image => new SpotifyImage(image));
    this.name = artist.name;
    this.popularity = artist.popularity;
    this.type = artist.type;
    this.uri = artist.uri;
  }

  /**
   * The Spotify ID for the artist.
   *
   * @type {string}
   * @memberof SpotifyArtist
   */
  readonly id: string;

  /**
   * Known external URLs for this artist.
   *
   * @type {SpotifyExternalURLs}
   * @memberof SpotifyArtist
   */
  readonly externalURLs: SpotifyExternalURLs;

  /**
   * Information about the followers of the artist.
   *
   * @type {SpotifyFollowers}
   * @memberof SpotifyArtist
   */
  readonly followers: SpotifyFollowers;

  /**
   * A list of the genres the artist is associated with. For example:
   * "Prog Rock" , "Post-Grunge". (If not yet classified, the array is empty.)
   *
   * @type {string[]}
   * @memberof SpotifyArtist
   */
  readonly genres: string[];

  /**
   * A link to the Web API endpoint providing full details of the artist.
   *
   * @type {string}
   * @memberof SpotifyArtist
   */
  readonly href: string;

  /**
   * Images of the artist in various sizes, widest first.
   *
   * @type {SpotifyImage[]}
   * @memberof SpotifyArtist
   */
  readonly images: SpotifyImage[];

  /**
   * The name of the artist
   *
   * @type {String}
   * @memberof SpotifyArtist
   */
  readonly name: string;

  /**
   * The popularity of the artist. The value will be between 0 and 100, with 100
   * being the most popular. The artist’s popularity is calculated from the
   * popularity of all the artist’s tracks.
   *
   * @type {number}
   * @memberof SpotifyArtist
   */
  readonly popularity: number;

  /**
   * The object type: "artist"
   *
   * @type {String}
   * @memberof SpotifyArtist
   */
  readonly type: string;

  /**
   * The Spotify URI for the artist.
   *
   * @type {String}
   * @memberof SpotifyArtist
   */
  readonly uri: string;
}
