import { SpotifyEntityType } from './../../types/types/spotify-entity-type.type';
import { SpotifyExternalURLs } from './../../types/types/spotify-external-urls.type';
import { SpotifyContextAPIResponse } from './../interfaces/spotify-context-api-response.interface';

/**
 * SpotifyContext
 *
 * @export
 * @class SpotifyContext
 */
export class SpotifyContext {
  /**
   * Creates an instance of SpotifyContext.
   *
   * @param {SpotifyContext} context
   * @memberof SpotifyContext
   */
  constructor(context: SpotifyContext) {
    Object.keys(context).forEach(key => {
      this[key] = context[key];
    });
  }

  /**
   * Load SpotifyContext from JSON
   *
   * @static
   * @param {SpotifyContextAPIResponse} context
   * @returns
   * @memberof SpotifyContext
   */
  static fromJSON(context: SpotifyContextAPIResponse) {
    return new this({
      uri: context.uri,
      href: context.href,
      externalURLs: context.external_urls,
      type: context.type
    });
  }

  /**
   * The uri of the context.
   *
   * @type {string}
   * @memberof SpotifyContext
   */
  readonly uri: string;

  /**
   * The href of the context, or null if not available.
   *
   * @type {string}
   * @memberof SpotifyContext
   */
  readonly href: string;

  /**
   * The external_urls of the context, or null if not available.
   *
   * @type {SpotifyExternalURLs}
   * @memberof SpotifyContext
   */
  readonly externalURLs: SpotifyExternalURLs;

  /**
   * The object type of the item’s context. Can be one of album ,
   * artist or playlist.
   *
   * @type {SpotifyEntityType}
   * @memberof SpotifyContext
   */
  readonly type: SpotifyEntityType;
}
