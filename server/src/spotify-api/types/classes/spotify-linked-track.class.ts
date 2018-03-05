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
   * @param {SpotifyLinkedTrackAPIResponse} linkedTrack
   * @memberof SpotifyLinkedTrack
   */
  constructor(linkedTrack: SpotifyLinkedTrackAPIResponse) {
    this.id = linkedTrack.id;
    this.externalURLs = linkedTrack.external_urls;
    this.href = linkedTrack.href;
    this.type = linkedTrack.type;
    this.uri = linkedTrack.uri;
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
