import { SpotifyLinkedTrackSchema } from './../../types/schemas/spotify-linked-track.schema';
import { SpotifySimplifiedArtistSchema } from './../../types/schemas/spotify-simplified-artist.schema';
import * as mongoose from 'mongoose';

export const SpotifyTrackSchema = new mongoose.Schema({
  id: String,
  album: SpotifySimplifiedAlbumSchema,
  artists: [SpotifySimplifiedArtistSchema],
  availableMarkets: [String],
  discNumber: Number,
  durationMs: Number,
  explicit: Boolean,
  externalIDs: mongoose.SchemaTypes.Mixed,
  externalURLs: mongoose.SchemaTypes.Mixed,
  href: String,
  isPlayable: Boolean,
  linkedFrom: SpotifyLinkedTrackSchema,
  restrictions: mongoose.SchemaTypes.Mixed,
  name: String,
  popularity: Number,
  previewURL: String,
  trackNumber: Number,
  type: String,
  uri: String
});
