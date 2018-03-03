import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  id: String,
  birthdate: String,
  country: String,
  displayName: String,
  email: String,
  externalURLs: {},
  followers: {
    href: String,
    total: Number
  },
  href: String,
  images: {
    height: Number,
    width: Number,
    url: String
  },
  product: String,
  type: String,
  uri: String
});
