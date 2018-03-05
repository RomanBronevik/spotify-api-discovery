import * as mongoose from 'mongoose';

import { SpotifyImageSchema } from '../../types/schemas/spotify-image.schema';
import { SpotifyFollowersSchema } from './../../types/schemas/spotify-followers.schema';

export const SpotifyArtistSchema = new mongoose.Schema({
  id: String,
  externalURLs: mongoose.SchemaTypes.Mixed,
  followers: SpotifyFollowersSchema,
  genres: [String],
  href: String,
  images: [SpotifyImageSchema],
  name: String,
  popularity: Number,
  type: String,
  uri: String
});
