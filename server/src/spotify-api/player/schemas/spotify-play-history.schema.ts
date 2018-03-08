import * as mongoose from 'mongoose';

import { SpotifySimplifiedTrackSchema } from '../../types/schemas/spotify-simplified-track.schema';
import { SpotifyContextSchema } from './spotify-context.schema';

export const SpotifyPlayHistory = new mongoose.Schema({
  track: SpotifySimplifiedTrackSchema,
  playedAt: String,
  context: SpotifyContextSchema
});
