import { Document } from 'mongoose';

/**
 * SpotifyApiDiscovery's User class
 *
 * @export
 * @interface User
 * @extends {Document}
 */
export interface User extends Document {
  readonly id: string;
  readonly birthdate: string;
  readonly country: string;
  readonly displayName: string;
  readonly email: string;
  readonly externalURLs: {
    readonly [key: string]: string;
  };
  readonly followers: {
    readonly href: string;
    readonly total: number;
  };
  readonly href: string;
  readonly images: {
    height: number;
    width: number;
    url: string;
  };
  readonly product: string;
  readonly type: string;
  readonly uri: string;
}
