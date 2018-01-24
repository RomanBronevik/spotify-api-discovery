import { app } from "../index";
import { User } from "../schemas/User";
import passport from "passport";

app.get("/user", (req, res) => {
  console.log("req.user:", req.user);
  return res.send(req.user);
});
