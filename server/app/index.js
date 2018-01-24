// Imports
import express from "express";
export const app = express();

import serverConfig from "../server.config.js";
import env from "../environments/environment";
import environment from "../environments/environment";

// Database initialization
require("./database");

// Authentication initialization
require("./authentication");

// App Initialization
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://192.168.99.100:3000");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Backend works well!");
});

// API
require("./api/user");

app.listen(serverConfig.port, () => {
  console.log(`App listening on port: ${serverConfig.port}!`);
});
