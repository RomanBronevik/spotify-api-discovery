import * as mongoose from 'mongoose';

import { SpotifyTrackSchema } from './../../tracks/schemas/spotify-track.schema';

export const SpotifyPlaylistTrackSchema = new mongoose.Schema({
  addedAt: String,
  addedBy: String,
  isLocal: Boolean,
  track: SpotifyTrackSchema
});
