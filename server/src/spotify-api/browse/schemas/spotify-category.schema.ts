import * as mongoose from 'mongoose';
import { SpotifyImageSchema } from '../../types/schemas/spotify-image.schema';

export const SpotifyCategorySchema = new mongoose.Schema({
  id: String,
  href: String,
  icons: [SpotifyImageSchema],
  name: String
});
