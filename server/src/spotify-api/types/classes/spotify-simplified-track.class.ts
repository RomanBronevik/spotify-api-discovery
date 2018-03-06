import { SpotifyExternalURLs } from '../types/spotify-external-urls.type';
import { SpotifySimplifiedTrackAPIResponse } from './../interfaces/spotify-simplified-track-api-response.interface';
import { SpotifyEntityType } from './../types/spotify-entity-type.type';
import { SpotifyLinkedTrack } from './spotify-linked-track.class';
import { SpotifySimplifiedArtist } from './spotify-simplified-artist.class';

/**
 * SpotifySimplifiedTrack
 *
 * @export
 * @class SpotifySimplifiedTrack
 */
export class SpotifySimplifiedTrack {
  /**
   * Creates an instance of SpotifySimplifiedTrack.
   *
   * @param {SpotifySimplifiedTrack} track
   * @memberof SpotifySimplifiedTrack
   */
  constructor(track: SpotifySimplifiedTrack) {
    Object.keys(track).forEach(key => {
      this[key] = track[key];
    });
  }

  /**
   * Load SpotifySimplifiedTrack from JSON
   *
   * @static
   * @param {SpotifySimplifiedTrackAPIResponse} track
   * @returns
   * @memberof SpotifySimplifiedTrack
   */
  static fromJSON(track: SpotifySimplifiedTrackAPIResponse) {
    return new this({
      id: track.id,
      artists: track.artists.map(artist =>
        SpotifySimplifiedArtist.fromJSON(artist)
      ),
      availableMarkets: track.available_markets,
      discNumber: track.disc_number,
      durationMs: track.duration_ms,
      explicit: track.explicit,
      externalURLs: track.external_urls,
      href: track.href,
      isPlayable: track.is_playable,
      linkedFrom: SpotifyLinkedTrack.fromJSON(track.linked_from),
      name: track.name,
      previewURL: track.preview_url,
      trackNumber: track.track_number,
      type: track.type,
      uri: track.uri
    });
  }

  /**
   * The Spotify ID for the track.
   *
   * @type {string}
   * @memberof SpotifySimplifiedTrack
   */
  readonly id: string;

  /**
   * The artists who performed the track. Each artist object includes a link in
   * href to more detailed information about the artist.
   *
   * @type {SpotifySimplifiedArtist[]}
   * @memberof SpotifySimplifiedTrack
   */
  readonly artists: SpotifySimplifiedArtist[];

  /**
   * A list of the countries in which the track can be played, identified by
   * their ISO 3166-1 alpha-2 code.
   *
   * @type {string[]}
   * @memberof SpotifySimplifiedTrack
   */
  readonly availableMarkets: string[];

  /**
   * The disc number (usually 1 unless the album consists of more than one
   * disc).
   *
   * @type {number}
   * @memberof SpotifySimplifiedTrack
   */
  readonly discNumber: number;

  /**
   * 	The track length in milliseconds.
   *
   * @type {number}
   * @memberof SpotifySimplifiedTrack
   */
  readonly durationMs: number;

  /**
   * Whether or not the track has explicit lyrics ( true = yes it does;
   * false = no it does not OR unknown).
   *
   * @type {boolean}
   * @memberof SpotifySimplifiedTrack
   */
  readonly explicit: boolean;

  /**
   * External URLs for this track.
   *
   * @type {SpotifyExternalURLs}
   * @memberof SpotifySimplifiedTrack
   */
  readonly externalURLs: SpotifyExternalURLs;

  /**
   * A link to the Web API endpoint providing full details of the track.
   *
   * @type {string}
   * @memberof SpotifySimplifiedTrack
   */
  readonly href: string;

  /**
   * Part of the response when Track Relinking is applied. If true , the track
   * is playable in the given market. Otherwise false.
   *
   * @type {boolean}
   * @memberof SpotifySimplifiedTrack
   */
  readonly isPlayable: boolean;

  /**
   * Part of the response when Track Relinking is applied and is only part of
   * the response if the track linking, in fact, exists. The requested track has
   * been replaced with a different track. The track in the linked_from object
   * contains information about the originally requested track.
   *
   * @type {SpotifyLinkedTrack}
   * @memberof SpotifySimplifiedTrack
   */
  readonly linkedFrom: SpotifyLinkedTrack;

  /**
   * The name of the track.
   *
   * @type {string}
   * @memberof SpotifySimplifiedTrack
   */
  readonly name: string;

  /**
   * A URL to a 30 second preview (MP3 format) of the track.
   *
   * @type {string}
   * @memberof SpotifySimplifiedTrack
   */
  readonly previewURL: string;

  /**
   * The number of the track. If an album has several discs, the track number is
   * the number on the specified disc.
   *
   * @type {number}
   * @memberof SpotifySimplifiedTrack
   */
  readonly trackNumber: number;

  /**
   * The object type: “track”.
   *
   * @type {SpotifyEntityType}
   * @memberof SpotifySimplifiedTrack
   */
  readonly type: SpotifyEntityType;

  /**
   * The Spotify URI for the track.
   *
   * @type {string}
   * @memberof SpotifySimplifiedTrack
   */
  readonly uri: string;
}
