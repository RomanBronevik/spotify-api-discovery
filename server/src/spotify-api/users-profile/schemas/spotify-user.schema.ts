import { SpotifyFollowersSchema } from './../../types/schemas/spotify-followers.schema';
import * as mongoose from 'mongoose';
import { SpotifyImageSchema } from '../../types/schemas/spotify-image.schema';

export const SpotifyUserSchema = new mongoose.Schema({
  id: String,
  displayName: String,
  externalURLs: mongoose.SchemaTypes.Mixed,
  followers: SpotifyFollowersSchema,
  href: String,
  images: SpotifyImageSchema,
  type: String,
  uri: String
});
