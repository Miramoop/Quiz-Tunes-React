import { fetchYouTubeData } from "../api/youtubeApi";

const fetchYouTubeVideos = async (trackName, artistName) => {
    try {
        return await fetchYouTubeData(trackName, artistName);
    } catch (error) {
        console.error("Error fetching YouTube data:", error);
        throw error;
    }
};
export { fetchYouTubeVideos };