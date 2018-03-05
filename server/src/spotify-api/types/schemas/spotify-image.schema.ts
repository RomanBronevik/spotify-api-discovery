import * as mongoose from 'mongoose';

export const SpotifyImageSchema = new mongoose.Schema({
  height: Number,
  url: String,
  width: Number
});
