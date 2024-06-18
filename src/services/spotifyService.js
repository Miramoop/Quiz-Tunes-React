import { getTrackInfo, getToken } from "../api/spotifyApi";

const fetchTrackInfo = async (genre) => {
  try {
    const tokenData = await getToken();
    const trackInfo = await getTrackInfo(tokenData.access_token, genre);

    if (!trackInfo.tracks || trackInfo.tracks.length === 0) {
      throw new Error("No tracks found for the genre");
    }

    return {
      name: trackInfo.tracks[0].name,
      artist: trackInfo.tracks[0].artists[0].name,
      spotifyUrl: trackInfo.tracks[0].external_urls.spotify,
      albumCover: trackInfo.tracks[0].album.images[1]?.url,
      albumName: trackInfo.tracks[0].album.name,
    };
  } catch (error) {
    console.error("Error fetching Spotify track:", error);
    throw error;
  }
};

export { fetchTrackInfo };
