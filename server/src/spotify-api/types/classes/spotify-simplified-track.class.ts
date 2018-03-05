import { SpotifySimplifiedTrackAPIResponse } from './../interfaces/spotify-simplified-track-api-response.interface';
import { SpotifyEntityType } from './../types/spotify-entity-type.type';
import { SpotifySimplifiedArtist } from './spotify-simplified-artist.class';
import { SpotifyExternalURLs } from '../types/spotify-external-urls.type';
import { SpotifyLinkedTrack } from './spotify-linked-track.class';

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
   * @param {SpotifySimplifiedTrackAPIResponse} track
   * @memberof SpotifySimplifiedTrack
   */
  constructor(track: SpotifySimplifiedTrackAPIResponse) {
    this.id = track.id;

    this.artists = track.artists.map(
      artist => new SpotifySimplifiedArtist(artist)
    );
    this.availableMarkets = track.available_markets;
    this.discNumber = track.disc_number;
    this.durationMs = track.duration_ms;
    this.explicit = track.explicit;
    this.externalURLs = track.external_urls;
    this.href = track.href;
    this.isPlayable = track.is_playable;
    this.linkedFrom = new SpotifyLinkedTrack(track.linked_from);
    this.name = track.name;
    this.previewURL = track.preview_url;
    this.trackNumber = track.track_number;
    this.type = track.type;
    this.uri = track.uri;
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
