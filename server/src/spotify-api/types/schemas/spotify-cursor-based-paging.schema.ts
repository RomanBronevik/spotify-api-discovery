import * as mongoose from 'mongoose';

import { SpotifyCursorSchema } from './spotify-cursor.schema';

export const generateCursorBasedPagingSchema = (itemsSchema: mongoose.Schema) =>
  new mongoose.Schema({
    href: String,
    items: [itemsSchema],
    limit: Number,
    next: String,
    cursors: SpotifyCursorSchema,
    total: Number
  });
