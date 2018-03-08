import * as mongoose from 'mongoose';

export const SpotifyDeviceSchema = new mongoose.Schema({
  id: String,
  isActive: Boolean,
  isRestricted: Boolean,
  name: String,
  type: String,
  volumePercent: String
});
