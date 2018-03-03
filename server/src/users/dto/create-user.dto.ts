/**
 * Spotify's User class
 *
 * @export
 * @class CreateUserDto
 */
export class CreateUserDto {
  /**
   * Creates an instance of CreateUserDto.
   * Mapped upon User interface.
   *
   * @param {*} user
   * @memberof CreateUserDto
   */
  constructor(user: any) {
    this.id = user.id;
    this.birthdate = user.birthdate;
    this.country = user.country;
    this.displayName = user.display_name;
    this.email = user.email;
    this.externalURLs = user.external_urls;
    this.followers = user.followers;
    this.href = user.href;
    this.images = user.images;
    this.product = user.product;
    this.type = user.type;
    this.uri = user.uri;
  }

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
