import * as mongoose from 'mongoose';

export const SpotifyFollowersSchema = new mongoose.Schema({
  href: String,
  total: Number
});
