import SpotifyWebApi from 'spotify-web-api-node';

// requested permissions from spotify
const scopes = [
  'user-read-email',
  'playlist-read-private',
  'playlist-read-collaborative',
  'streaming',
  'user-read-private',
  'user-library-read',
  'user-top-read',
  'user-read-playback-state',
  'user-modify-playback-state',
  // "user-read-currently-played",
  'user-follow-read',
].join(',');

// parameters that get attached to the url in order to pass the requested permissions
const params = {
  scope: scopes,
};

// convert params object to a string that can be used in a URL
const queryParamString = new URLSearchParams(params).toString();

export const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString}`;

// creating spotify Api instance. Currently only containing an :credentials object with clientId and secret
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

export default spotifyApi;
