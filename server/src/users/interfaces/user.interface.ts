import { Document } from 'mongoose';

export interface User extends Document {
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
