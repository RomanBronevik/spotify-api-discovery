import { SpotifyExternalURLs } from './../types/spotify-external-urls.type';
import { SpotifyEntityType } from '../types/spotify-entity-type.type';

export interface SpotifyLinkedTrackAPIResponse {
  /**
   * The Spotify ID for the track.
   *
   * @type {string}
   * @memberof SpotifyLinkedTrackAPIResponse
   */
  readonly id: string;

  /**
   * Known external URLs for this track.
   *
   * @type {SpotifyExternalURLs}
   * @memberof SpotifyLinkedTrackAPIResponse
   */
  readonly external_urls: SpotifyExternalURLs;

  /**
   * A link to the Web API endpoint providing full details of the track.
   *
   * @type {string}
   * @memberof SpotifyLinkedTrackAPIResponse
   */
  readonly href: string;

  /**
   * The object type: “track”.
   *
   * @type {SpotifyEntityType}
   * @memberof SpotifyLinkedTrackAPIResponse
   */
  readonly type: SpotifyEntityType;

  /**
   * 	The Spotify URI for the track.
   *
   * @type {string}
   * @memberof SpotifyLinkedTrackAPIResponse
   */
  readonly uri: string;
}
