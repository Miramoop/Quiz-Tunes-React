import { getTrackInfo, getToken } from "../api/spotifyApi";

const fetchSpotifyLink = async (genre) => {
    try {
        const tokenData = await getToken();
        const trackInfo = await getTrackInfo(tokenData.access_token, genre);
        if (trackInfo && trackInfo.tracks && trackInfo.tracks.length > 0) {
            return trackInfo.tracks[0].external_urls.spotify;
        }
        else {
            throw new Error("No tracks found for the genre");
        } 
    } catch (error) {
        console.error("Error fetching Spotify track:", error);
        throw error;
    }
};
export { fetchSpotifyLink }; 