import * as mongoose from 'mongoose';

import { SpotifyTrackSchema } from './../../tracks/schemas/spotify-track.schema';
import { SpotifyContextSchema } from './spotify-context.schema';

export const SpotifyCurrentlyPlayingSchema = new mongoose.Schema({
  context: SpotifyContextSchema,
  timestamp: Number,
  progressMs: Number,
  isPlaying: Boolean,
  item: SpotifyTrackSchema
});
