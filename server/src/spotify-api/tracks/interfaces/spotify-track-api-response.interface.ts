import { SpotifyEntityType } from './../../types/types/spotify-entity-type.type';
import { SpotifyLinkedTrackAPIResponse } from './../../types/interfaces/spotify-linked-track-api-response.interface';
import { SpotifySimplifiedArtistAPIResponse } from './../../types/interfaces/spotify-simplified-artist-api-response.interface';
import { SpotifyRestrictions } from './../../types/types/spotify-restrictions.type';
import { SpotifyLinkedTrack } from './../../types/classes/spotify-linked-track.class';
import { SpotifyExternalURLs } from './../../types/types/spotify-external-urls.type';
import { SpotifyExternalIDs } from '../../types/types/spotify-external-ids.type';

/**
 * SpotifyTrackAPIResponse
 *
 * @export
 * @class SpotifyTrackAPIResponse
 */
export class SpotifyTrackAPIResponse {
  /**
   * The Spotify ID for the track.
   *
   * @type {string}
   * @memberof SpotifyTrackAPIResponse
   */
  readonly id: string;

  /**
   * The album on which the track appears. The album object includes a link in
   * href to full information about the album.
   *
   * @type {SpotifySimplifiedAlbumAPIResponse}
   * @memberof SpotifyTrackAPIResponse
   */
  readonly album: SpotifySimplifiedAlbumAPIResponse;

  /**
   * The artists who performed the track. Each artist object includes a link in
   * href to more detailed information about the artist.
   *
   * @type {SpotifySimplifiedArtistApiResponse[]}
   * @memberof SpotifyTrackAPIResponse
   */
  readonly artists: SpotifySimplifiedArtistAPIResponse[];

  /**
   * A list of the countries in which the track can be played, identified by
   * their ISO 3166-1 alpha-2 code.
   *
   * @type {string[]}
   * @memberof SpotifyTrackAPIResponse
   */
  readonly available_markets: string[];

  /**
   * The disc number (usually 1 unless the album consists of more than one
   * disc).
   *
   * @type {number}
   * @memberof SpotifyTrackAPIResponse
   */
  readonly disc_number: number;

  /**
   * The track length in milliseconds.
   *
   * @type {number}
   * @memberof SpotifyTrackAPIResponse
   */
  readonly duration_ms: number;

  /**
   * Whether or not the track has explicit lyrics ( true = yes it does;
   * false = no it does not OR unknown).
   *
   * @type {boolean}
   * @memberof SpotifyTrackAPIResponse
   */
  readonly explicit: boolean;

  /**
   * Known external IDs for the track.
   *
   * @type {SpotifyExternalIDs}
   * @memberof SpotifyTrackAPIResponse
   */
  readonly external_ids: SpotifyExternalIDs;

  /**
   * Known external URLs for this track.
   *
   * @type {SpotifyExternalURLs}
   * @memberof SpotifyTrackAPIResponse
   */
  readonly external_urls: SpotifyExternalURLs;

  /**
   * A link to the Web API endpoint providing full details of the track.
   *
   * @type {string}
   * @memberof SpotifyTrackAPIResponse
   */
  readonly href: string;

  /**
   * Part of the response when Track Relinking is applied. If true , the track
   * is playable in the given market. Otherwise false.
   *
   * @type {string}
   * @memberof SpotifyTrackAPIResponse
   */
  readonly is_playable: string;

  /**
   * Part of the response when Track Relinking is applied, and the requested
   * track has been replaced with different track. The track in the linked_from
   * object contains information about the originally requested track.
   *
   * @type {SpotifyLinkedTrackAPIResponse}
   * @memberof SpotifyTrackAPIResponse
   */
  readonly linked_from: SpotifyLinkedTrackAPIResponse;

  /**
   * Part of the response when Track Relinking is applied, the original track
   * is not available in the given market, and Spotify did not have any tracks
   * to relink it with. The track response will still contain metadata for the
   * original track, and a restrictions object containing the reason why the
   * track is not available: "restrictions" : {"reason" : "market"}
   *
   * @type {SpotifyRestrictions}
   * @memberof SpotifyTrackAPIResponse
   */
  readonly restrictions: SpotifyRestrictions;

  /**
   * The name of the track.
   *
   * @type {string}
   * @memberof SpotifyTrackAPIResponse
   */
  readonly name: string;

  /**
   * The popularity of the track. The value will be between 0 and 100, with 100
   * being the most popular.
   * The popularity of a track is a value between 0 and 100, with 100 being the
   * most popular. The popularity is calculated by algorithm and is based, in
   * the most part, on the total number of plays the track has had and how
   * recent those plays are.
   * Generally speaking, songs that are being played a lot now will have a
   * higher popularity than songs that were played a lot in the past. Duplicate
   * tracks (e.g. the same track from a single and an album) are rated
   * independently. Artist and album popularity is derived mathematically from
   * track popularity. Note that the popularity value may lag actual popularity
   * by a few days: the value is not updated in real time.
   *
   * @type {number}
   * @memberof SpotifyTrackAPIResponse
   */
  readonly popularity: number;

  /**
   * A link to a 30 second preview (MP3 format) of the track.
   *
   * @type {string}
   * @memberof SpotifyTrackAPIResponse
   */
  readonly preview_url: string;

  /**
   * The number of the track. If an album has several discs, the track number
   * is the number on the specified disc.
   *
   * @type {number}
   * @memberof SpotifyTrackAPIResponse
   */
  readonly track_number: number;

  /**
   * The object type: “track”.
   *
   * @type {SpotifyEntityType}
   * @memberof SpotifyTrackAPIResponse
   */
  readonly type: SpotifyEntityType;

  /**
   * The Spotify URI for the track.
   *
   * @type {string}
   * @memberof SpotifyTrackAPIResponse
   */
  readonly uri: string;
}
