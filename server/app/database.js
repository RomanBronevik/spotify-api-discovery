import mongoose from "mongoose";
import environment from "../environments/environment";

mongoose.connect(environment.mongodb.url, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;
require("./schemas");
