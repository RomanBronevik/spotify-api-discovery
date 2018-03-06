import * as mongoose from 'mongoose';

import { SpotifyImageSchema } from './spotify-image.schema';

export const SpotifySimplifiedPlaylistSchema = new mongoose.Schema({
  id: String,
  collaborative: Boolean,
  externalURLs: mongoose.SchemaTypes.Mixed,
  href: String,
  images: SpotifyImageSchema,
  name: String,
  public: Boolean,
  snapshotID: String,
  tracks: {
    href: String,
    total: Number
  },
  type: String,
  uri: String
});
