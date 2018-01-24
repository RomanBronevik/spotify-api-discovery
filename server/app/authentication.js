import session from "express-session";
import passport from "passport";
import { Strategy as SpotifyStrategy } from "passport-spotify";
import { app } from "./index";
import environment from "../environments/environment";
import { User } from "./schemas/User";
import logger from "./logger";

app.use(
  session({
    secret: "my super secret web api key",
    cookie: { secure: false },
    resave: false,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new SpotifyStrategy(
    {
      clientID: environment.spotify.clientId,
      clientSecret: environment.spotify.clientSecret,
      callbackURL: `${environment.app.url}/auth/spotify/callback`
    },
    (accessToken, refreshToken, profile, done) => {
      const user = User.findOrCreate({ id: profile.id }, (err, user) => {
        user.username = profile.username;
        user.displayName = profile.displayName;
        user.profileUrl = profile.profileUrl;
        user.photos = profile.photos;
        user.country = profile.country;
        user.followers = profile.followers;
        user.product = profile.product;
        user.emails = profile.emails;
        user.accessToken = accessToken;
        user.refreshToken = refreshToken;

        user.save().then(() => {
          logger.info(`User saved: ${user.username}`);

          return done(err, user);
        });
      });
    }
  )
);

app.get(
  "/auth/spotify",
  passport.authenticate("spotify", {
    scope: [
      "user-read-private",
      "user-read-email",
      "user-read-birthdate",
      "playlist-read-private",
      "playlist-modify-private",
      "playlist-modify-public",
      "playlist-read-collaborative",
      "user-top-read",
      "user-read-recently-played",
      "user-library-read",
      "user-library-modify",
      "user-read-currently-playing",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-follow-modify",
      "user-follow-read",
      "streaming"
    ]
    // showDialog: true
  })
);

app.get(
  "/auth/spotify/callback",
  passport.authenticate("spotify", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect(`${environment.front.url}/login/success`);
  }
);
