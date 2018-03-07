import { SpotifyLinkedTrackAPIResponse } from './spotify-linked-track-api-response.interface';
import { SpotifyEntityType } from './../types/spotify-entity-type.type';
import { SpotifySimplifiedArtistAPIResponse } from './spotify-simplified-artist-api-response.interface';
import { SpotifyExternalURLs } from '../types/spotify-external-urls.type';

/**
 * SpotifySimplifiedTrackAPIResponse
 *
 * @export
 * @interface SpotifySimplifiedTrackAPIResponse
 */
export interface SpotifySimplifiedTrackAPIResponse {
  /**
   * The Spotify ID for the track.
   *
   * @type {string}
   * @memberof SpotifySimplifiedTrackAPIResponse
   */
  readonly id: string;

  /**
   * The artists who performed the track. Each artist object includes a link in
   * href to more detailed information about the artist.
   *
   * @type {SpotifySimplifiedArtistAPIResponse[]}
   * @memberof SpotifySimplifiedTrackAPIResponse
   */
  readonly artists: SpotifySimplifiedArtistAPIResponse[];

  /**
   * A list of the countries in which the track can be played, identified by
   * their ISO 3166-1 alpha-2 code.
   *
   * @type {string[]}
   * @memberof SpotifySimplifiedTrackAPIResponse
   */
  readonly available_markets: string[];

  /**
   * The disc number (usually 1 unless the album consists of more than one
   * disc).
   *
   * @type {number}
   * @memberof SpotifySimplifiedTrackAPIResponse
   */
  readonly disc_number: number;

  /**
   * 	The track length in milliseconds.
   *
   * @type {number}
   * @memberof SpotifySimplifiedTrackAPIResponse
   */
  readonly duration_ms: number;

  /**
   * Whether or not the track has explicit lyrics ( true = yes it does;
   * false = no it does not OR unknown).
   *
   * @type {boolean}
   * @memberof SpotifySimplifiedTrackAPIResponse
   */
  readonly explicit: boolean;

  /**
   * External URLs for this track.
   *
   * @type {SpotifyExternalURLs}
   * @memberof SpotifySimplifiedTrackAPIResponse
   */
  readonly external_urls: SpotifyExternalURLs;

  /**
   * A link to the Web API endpoint providing full details of the track.
   *
   * @type {string}
   * @memberof SpotifySimplifiedTrackAPIResponse
   */
  readonly href: string;

  /**
   * Part of the response when Track Relinking is applied. If true , the track
   * is playable in the given market. Otherwise false.
   *
   * @type {boolean}
   * @memberof SpotifySimplifiedTrackAPIResponse
   */
  readonly is_playable: boolean;

  /**
   * Part of the response when Track Relinking is applied and is only part of
   * the response if the track linking, in fact, exists. The requested track has
   * been replaced with a different track. The track in the linked_from object
   * contains information about the originally requested track.
   *
   * @type {SpotifyLinkedTrack}
   * @memberof SpotifySimplifiedTrackAPIResponse
   */
  readonly linked_from: SpotifyLinkedTrackAPIResponse;

  /**
   * The name of the track.
   *
   * @type {string}
   * @memberof SpotifySimplifiedTrackAPIResponse
   */
  readonly name: string;

  /**
   * A URL to a 30 second preview (MP3 format) of the track.
   *
   * @type {string}
   * @memberof SpotifySimplifiedTrackAPIResponse
   */
  readonly preview_url: string;

  /**
   * The number of the track. If an album has several discs, the track number is
   * the number on the specified disc.
   *
   * @type {number}
   * @memberof SpotifySimplifiedTrackAPIResponse
   */
  readonly track_number: number;

  /**
   * The object type: “track”.
   *
   * @type {SpotifyEntityType}
   * @memberof SpotifySimplifiedTrackAPIResponse
   */
  readonly type: SpotifyEntityType;

  /**
   * The Spotify URI for the track.
   *
   * @type {string}
   * @memberof SpotifySimplifiedTrackAPIResponse
   */
  readonly uri: string;
}
