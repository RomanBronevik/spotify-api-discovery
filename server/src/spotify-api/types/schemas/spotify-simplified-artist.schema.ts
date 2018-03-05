import * as mongoose from 'mongoose';

export const SpotifySimplifiedArtistSchema = new mongoose.Schema({
  id: String,
  externalUrls: mongoose.SchemaTypes.Mixed,
  href: String,
  name: String,
  type: String,
  uri: String
});
