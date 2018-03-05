import { SpotifyCopyrightAPIResponse } from './../interfaces/spotify-copyright-api-response.interface';
import { SpotifyCopyrightType } from './../types/spotify-copyright-type';

/**
 * SpotifyCopyright
 *
 * @export
 * @class Copyright
 */
export class SpotifyCopyright {
  /**
   * Creates an instance of Copyright.
   *
   * @param {SpotifyCopyrightAPIResponse} copyright
   * @memberof SpotifyCopyright
   */
  constructor(copyright: SpotifyCopyrightAPIResponse) {
    this.text = copyright.text;
    this.type = copyright.type;
  }

  /**
   * The copyright text for this album.
   *
   * @type {string}
   * @memberof SpotifyCopyright
   */
  readonly text: string;

  /**
   * The type of copyright: C = the copyright, P = the sound recording
   * (performance) copyright.
   *
   * @type {SpotifyCopyrightType}
   * @memberof SpotifyCopyright
   */
  readonly type: SpotifyCopyrightType;
}
