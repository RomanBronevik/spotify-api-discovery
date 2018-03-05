import * as mongoose from 'mongoose';

export const SpotifyAudioFeaturesSchema = new mongoose.Schema({
  id: String,
  acousticness: Number,
  analysisURL: String,
  danceability: Number,
  durationMs: Number,
  energy: Number,
  instrumentalness: Number,
  key: Number,
  liveness: Number,
  loudness: Number,
  mode: Number,
  speechiness: Number,
  tempo: Number,
  timeSignature: Number,
  trackHref: String,
  type: String,
  uri: String,
  valence: Number
});
