import { SpotifyContextSchema } from './spotify-context.schema';
import * as mongoose from 'mongoose';

import { SpotifyTrackSchema } from './../../tracks/schemas/spotify-track.schema';
import { SpotifyDeviceSchema } from './spotify-device.schema';

export const SpotifyPlayingContextSchema = new mongoose.Schema({
  device: SpotifyDeviceSchema,
  repeatState: String,
  shuffleState: Boolean,
  context: SpotifyContextSchema,
  timestamp: Number,
  progressMs: Number,
  isPlaying: Boolean,
  item: SpotifyTrackSchema
});
