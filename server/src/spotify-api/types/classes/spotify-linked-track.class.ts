import { SpotifyLinkedTrackAPIResponse } from './../interfaces/spotify-linked-track-api-response.interface';
import { SpotifyExternalURLs } from './../types/spotify-external-urls.type';
import { SpotifyEntityType } from '../types/spotify-entity-type.type';

/**
 * SpotifyLinkedTrack
 *
 * @export
 * @class SpotifyLinkedTrack
 */
export class SpotifyLinkedTrack {
  /**
   * Creates an instance of SpotifyLinkedTrack.
   *
   * @param {SpotifyLinkedTrack} linkedTrack
   * @memberof SpotifyLinkedTrack
   */
  constructor(linkedTrack: SpotifyLinkedTrack) {
    Object.keys(linkedTrack).forEach(key => {
      this[key] = linkedTrack[key];
    });
  }

  /**
   * Load SpotifyLinkedTrack from JSON
   *
   * @static
   * @param {SpotifyLinkedTrackAPIResponse} linkedTrack
   * @returns
   * @memberof SpotifyLinkedTrack
   */
  static fromJSON(linkedTrack: SpotifyLinkedTrackAPIResponse) {
    return new this({
      id: linkedTrack.id,
      externalURLs: linkedTrack.external_urls,
      href: linkedTrack.href,
      type: linkedTrack.type,
      uri: linkedTrack.uri
    });
  }

  /**
   * The Spotify ID for the track.
   *
   * @type {string}
   * @memberof SpotifyLinkedTrack
   */
  readonly id: string;

  /**
   * Known external URLs for this track.
   *
   * @type {SpotifyExternalURLs}
   * @memberof SpotifyLinkedTrack
   */
  readonly externalURLs: SpotifyExternalURLs;

  /**
   * A link to the Web API endpoint providing full details of the track.
   *
   * @type {string}
   * @memberof SpotifyLinkedTrack
   */
  readonly href: string;

  /**
   * The object type: “track”.
   *
   * @type {SpotifyEntityType}
   * @memberof SpotifyLinkedTrack
   */
  readonly type: SpotifyEntityType;

  /**
   * 	The Spotify URI for the track.
   *
   * @type {string}
   * @memberof SpotifyLinkedTrack
   */
  readonly uri: string;
}
