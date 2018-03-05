import * as mongoose from 'mongoose';

import { SpotifyLinkedTrackSchema } from './spotify-linked-track.schema';
import { SpotifySimplifiedArtistSchema } from './spotify-simplified-artist.schema';

export const SpotifySimplifiedTrackSchema = new mongoose.Schema({
  id: String,
  artists: SpotifySimplifiedArtistSchema,
  availableMarkets: [String],
  discNumber: Number,
  durationMs: Number,
  explicit: Boolean,
  externalURLs: mongoose.SchemaTypes.Mixed,
  href: String,
  isPlayable: Boolean,
  linkedFrom: SpotifyLinkedTrackSchema,
  name: String,
  previewURL: String,
  trackNumber: Number,
  type: String,
  uri: String
});
