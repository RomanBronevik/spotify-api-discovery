import * as mongoose from 'mongoose';

export const SpotifyRecommendationsSeedSchema = new mongoose.Schema({
  afterFilteringSize: Number,
  afterRelinkingSize: Number,
  href: String,
  id: String,
  initialPoolSize: Number,
  type: String
});
