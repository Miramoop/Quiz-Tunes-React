const Constants = {
  SPOTIFY_CLIENT_ID: process.env.REACT_APP_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET: process.env.REACT_APP_CLIENT_SECRET,
  SPOTIFY_API_BASE_URL: "https://api.spotify.com/v1",
  SPOTIFY_TOKEN_URL: "https://accounts.spotify.com/api/token",
  SPOTIFY_GRANT_TYPE: "client_credentials",
  CONTENT_TYPE_URLENCODED: "application/x-www-form-urlencoded",

  YOUTUBE_API_KEY: process.env.REACT_APP_API_KEY,
  YOUTUBE_API_BASE_URL: "https://youtube.googleapis.com/youtube/v3/search",
  YOUTUBE_API_PART: "snippet",
  YOUTUBE_API_MAX_RESULTS: 1,
  YOUTUBE_API_TYPE: "video",
  YOUTUBE_API_VIDEO_EMBEDDABLE: "true",
};

export default Constants;
