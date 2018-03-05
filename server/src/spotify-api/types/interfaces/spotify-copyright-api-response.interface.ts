import { SpotifyCopyrightType } from './../types/spotify-copyright-type';

/**
 * Interface for the copyright json object returned by the spotify API
 *
 * @export
 * @interface SpotifyCopyrightAPIResponse
 */
export interface SpotifyCopyrightAPIResponse {
  readonly text: string;
  readonly type: SpotifyCopyrightType;
}
