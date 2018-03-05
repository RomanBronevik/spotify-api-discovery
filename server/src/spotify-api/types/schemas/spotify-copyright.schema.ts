import * as mongoose from 'mongoose';

export const SpotifyCopyrightSchema = new mongoose.Schema({
  text: String,
  type: String
});
