import * as mongoose from 'mongoose';

export const generatePagingSchema = (itemsSchema: mongoose.Schema) =>
  new mongoose.Schema({
    id: String,
    href: String,
    items: [itemsSchema],
    limit: Number,
    next: String,
    offset: Number,
    previous: String,
    total: Number
  });
