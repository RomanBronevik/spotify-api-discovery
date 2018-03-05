import * as mongoose from 'mongoose';

export const SpotifyLinkedTrackSchema = new mongoose.Schema({
  id: String,
  externalURLs: String,
  href: String,
  type: String,
  uri: String
});
