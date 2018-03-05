import * as mongoose from 'mongoose';

import { generatePagingSchema } from './../../types/schemas/spotify-paging-schema';
import { SpotifySimplifiedTrackSchema } from './../../types/schemas/spotify-simplified-track.schema';
import { SpotifyCopyrightSchema } from './../../types/schemas/spotify-copyright.schema';
import { SpotifySimplifiedArtistSchema } from './../../types/schemas/spotify-simplified-artist.schema';
import { SpotifyImageSchema } from './../../types/schemas/spotify-image.schema';

export const AlbumSchema = new mongoose.Schema({
  id: String,
  albumType: String,
  artists: [SpotifySimplifiedArtistSchema],
  availableMarkets: [String],
  copyrights: [SpotifyCopyrightSchema],
  externalIds: mongoose.SchemaTypes.Mixed,
  externalUrls: mongoose.SchemaTypes.Mixed,
  genres: [String],
  href: String,
  images: [SpotifyImageSchema],
  label: String,
  name: String,
  popularity: String,
  releaseDate: String,
  releaseDatePrecision: String,
  tracks: generatePagingSchema(SpotifySimplifiedTrackSchema),
  type: String,
  uri: String
});
