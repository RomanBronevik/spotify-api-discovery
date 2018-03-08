import { SpotifyEntityType } from './../../types/types/spotify-entity-type.type';
import { SpotifyExternalURLs } from './../../types/types/spotify-external-urls.type';

/**
 * SpotifyContextAPIResponse
 *
 * @export
 * @class SpotifyContextAPIResponse
 */
export class SpotifyContextAPIResponse {
  /**
   * The uri of the context.
   *
   * @type {string}
   * @memberof SpotifyContextAPIResponse
   */
  readonly uri: string;

  /**
   * The href of the context, or null if not available.
   *
   * @type {string}
   * @memberof SpotifyContextAPIResponse
   */
  readonly href: string;

  /**
   * The external_urls of the context, or null if not available.
   *
   * @type {SpotifyExternalURLs}
   * @memberof SpotifyContextAPIResponse
   */
  readonly external_urls: SpotifyExternalURLs;

  /**
   * The object type of the item’s context. Can be one of album ,
   * artist or playlist.
   *
   * @type {SpotifyEntityType}
   * @memberof SpotifyContextAPIResponse
   */
  readonly type: SpotifyEntityType;
}
