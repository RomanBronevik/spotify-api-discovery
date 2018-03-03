import { environment } from './environments/environment';

export const UserModelToken = 'UserModelToken';
export const UsersServiceToken = 'UsersServiceToken';
export const DbConnectionToken = 'DbConnectionToken';

export const sessionSecretKey =
  '6A0DC01B09051FD1DF261D41F5B17C7FDE1A64C1BE2A51C002F93B69EB48061D';

export const SpotifyApplicationScopes = [
  'user-read-private',
  'user-read-email',
  'user-read-birthdate',
  'playlist-read-private',
  'playlist-modify-private',
  'playlist-modify-public',
  'playlist-read-collaborative',
  'user-top-read',
  'user-read-recently-played',
  'user-library-read',
  'user-library-modify',
  'user-read-currently-playing',
  'user-modify-playback-state',
  'user-read-playback-state',
  'user-follow-modify',
  'user-follow-read',
  'streaming'
];

export const spotifyAuthStateKey = 'spotify_auth_state';
export const spotifyAccountsBaseURL = 'https://accounts.spotify.com';
export const spotifyAuthorizeURL = `${spotifyAccountsBaseURL}/authorize`;
export const spotifyTokenURL = `${spotifyAccountsBaseURL}/api/token`;
export const spotifyCallbackURL = `${
  environment.server.url
}/auth/spotify/callback`;
export const loginSuccessURL = `${environment.front.url}/login/success`;
export const loginFailureURL = `${environment.front.url}/login/failure`;

export const spotifyApiURL = 'https://api.spotify.com/v1';
