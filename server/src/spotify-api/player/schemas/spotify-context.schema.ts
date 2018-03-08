import * as mongoose from 'mongoose';

export const SpotifyContextSchema = new mongoose.Schema({
  uri: String,
  href: String,
  externalURLs: mongoose.SchemaTypes.Mixed,
  type: String
});
