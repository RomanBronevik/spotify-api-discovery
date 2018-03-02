import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  username: String,
  displayName: String,
  profileUrl: String,
  photos: [String],
  country: String,
  followers: Number,
  product: String,
  emails: [
    {
      value: String,
      type: {
        type: 'Mixed'
      }
    }
  ]
});
