import mongoose, { Schema } from "mongoose";
import { fail } from "assert";
import findOrCreate from "mongoose-findorcreate";

const UserSchema = new Schema({
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
        type: "Mixed"
      }
    }
  ],
  accessToken: String,
  refreshToken: String
});

UserSchema.plugin(findOrCreate);

export const User = mongoose.model("User", UserSchema);
