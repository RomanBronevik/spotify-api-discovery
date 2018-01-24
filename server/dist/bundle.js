/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = undefined;

var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _serverConfig = __webpack_require__(5);

var _serverConfig2 = _interopRequireDefault(_serverConfig);

var _environment = __webpack_require__(1);

var _environment2 = _interopRequireDefault(_environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = exports.app = (0, _express2.default)(); // Imports


// Database initialization
__webpack_require__(6);

// Authentication initialization
__webpack_require__(11);

// App Initialization
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://192.168.99.100:3000");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", (req, res) => {
  res.send("Backend works well!");
});

// API
__webpack_require__(17);

app.listen(_serverConfig2.default.port, () => {
  console.log(`App listening on port: ${_serverConfig2.default.port}!`);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  app: {
    url: "http://192.168.99.100:4200"
  },
  front: {
    url: "http://192.168.99.100:3000"
  },
  mongodb: {
    url: "mongodb://fantastic_mongo:27017/SpotifyAPIDiscovery"
  },
  spotify: {
    clientId: "62f94c492ce24a70a444a4a73cea2eaa",
    clientSecret: "d2d35b220a4e4b6f815853c9e8bc1089"
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = undefined;

var _mongoose = __webpack_require__(3);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _assert = __webpack_require__(9);

var _mongooseFindorcreate = __webpack_require__(10);

var _mongooseFindorcreate2 = _interopRequireDefault(_mongooseFindorcreate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UserSchema = new _mongoose.Schema({
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
  emails: [{
    value: String,
    type: {
      type: "Mixed"
    }
  }],
  accessToken: String,
  refreshToken: String
});

UserSchema.plugin(_mongooseFindorcreate2.default);

const User = exports.User = _mongoose2.default.model("User", UserSchema);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  port: "4200"
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _mongoose = __webpack_require__(3);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _environment = __webpack_require__(1);

var _environment2 = _interopRequireDefault(_environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect(_environment2.default.mongodb.url, {
  useMongoClient: true
});
_mongoose2.default.Promise = global.Promise;
__webpack_require__(8);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _User = __webpack_require__(2);

exports.default = {
  User: _User.User
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("mongoose-findorcreate");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _expressSession = __webpack_require__(12);

var _expressSession2 = _interopRequireDefault(_expressSession);

var _passport = __webpack_require__(13);

var _passport2 = _interopRequireDefault(_passport);

var _passportSpotify = __webpack_require__(14);

var _index = __webpack_require__(0);

var _environment = __webpack_require__(1);

var _environment2 = _interopRequireDefault(_environment);

var _User = __webpack_require__(2);

var _logger = __webpack_require__(15);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index.app.use((0, _expressSession2.default)({
  secret: "my super secret web api key",
  cookie: { secure: false },
  resave: false,
  saveUninitialized: true
}));
_index.app.use(_passport2.default.initialize());
_index.app.use(_passport2.default.session());

_passport2.default.serializeUser((user, done) => {
  done(null, user);
});

_passport2.default.deserializeUser((user, done) => {
  done(null, user);
});

_passport2.default.use(new _passportSpotify.Strategy({
  clientID: _environment2.default.spotify.clientId,
  clientSecret: _environment2.default.spotify.clientSecret,
  callbackURL: `${_environment2.default.app.url}/auth/spotify/callback`
}, (accessToken, refreshToken, profile, done) => {
  const user = _User.User.findOrCreate({ id: profile.id }, (err, user) => {
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
      _logger2.default.info(`User saved: ${user.username}`);

      return done(err, user);
    });
  });
}));

_index.app.get("/auth/spotify", _passport2.default.authenticate("spotify", {
  scope: ["user-read-private", "user-read-email", "user-read-birthdate", "playlist-read-private", "playlist-modify-private", "playlist-modify-public", "playlist-read-collaborative", "user-top-read", "user-read-recently-played", "user-library-read", "user-library-modify", "user-read-currently-playing", "user-modify-playback-state", "user-read-playback-state", "user-follow-modify", "user-follow-read", "streaming"]
  // showDialog: true
}));

_index.app.get("/auth/spotify/callback", _passport2.default.authenticate("spotify", { failureRedirect: "/login" }), (req, res) => {
  res.redirect(`${_environment2.default.front.url}/login/success`);
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("passport-spotify");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _winston = __webpack_require__(16);

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const logger = _winston2.default.createLogger({
  level: "info",
  transports: [new _winston2.default.transports.Console()]
});

exports.default = logger;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _User = __webpack_require__(2);

var _passport = __webpack_require__(13);

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index.app.get("/user", (req, res) => {
  console.log("req.user:", req.user);
  return res.send(req.user);
});

/***/ })
/******/ ]);