import { SpotifyRecommendationsSeedSchema } from './spotify-recommendations-seed.schema';
import { SpotifySimplifiedTrackSchema } from './../../types/schemas/spotify-simplified-track.schema';
import * as mongoose from 'mongoose';

export const SpotifyRecommendationsSchema = new mongoose.Schema({
  seeds: [SpotifyRecommendationsSeedSchema],
  tracks: [SpotifySimplifiedTrackSchema]
});
