import { SpotifySimplifiedArtistSchema } from './spotify-simplified-artist.schema';
import * as mongoose from 'mongoose';
import { SpotifyImageSchema } from './spotify-image.schema';

export const SpotifySimplifiedAlbumSchema = new mongoose.Schema({
  id: String,
  albumType: String,
  artists: [SpotifySimplifiedArtistSchema],
  availableMarkets: [String],
  externalURLs: mongoose.SchemaTypes.Mixed,
  href: String,
  images: [SpotifyImageSchema],
  name: String,
  releaseDate: String,
  releaseDatePrecision: String,
  type: String,
  uri: String
});
