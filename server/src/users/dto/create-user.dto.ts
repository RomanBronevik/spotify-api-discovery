export class CreateUserDto {
  constructor(user: any) {
    this.id = user.id;
    this.username = user.username;
    this.displayName = user.displayName;
    this.profileUrl = user.profileUrl;
    this.photos = user.photos;
    this.country = user.country;
    this.followers = user.followers;
    this.product = user.product;
    this.emails = user.emails;
  }

  readonly id: string;
  readonly username: string;
  readonly displayName: string;
  readonly profileUrl: string;
  readonly photos: string[];
  readonly country: string;
  readonly followers: number;
  readonly product: string;
  readonly emails: string[];
}
