import * as mongoose from 'mongoose';

export const SpotifyCursorSchema = new mongoose.Schema({
  after: String
});
