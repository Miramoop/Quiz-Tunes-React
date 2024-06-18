import Constants from "../data/constants";

const fetchYouTubeData = async (trackName, artistName) => {
  const QUERY = `${trackName} by ${artistName}`;
  const fetchUrl = `${Constants.YOUTUBE_API_BASE_URL}?part=${Constants.YOUTUBE_API_PART}&maxResults=${Constants.YOUTUBE_API_MAX_RESULTS}&q=${encodeURIComponent(
    QUERY
  )}&type=${Constants.YOUTUBE_API_TYPE}&videoEmbeddable=${Constants.YOUTUBE_API_VIDEO_EMBEDDABLE}&key=${Constants.YOUTUBE_API_KEY}`;

  try {
    const response = await fetch(fetchUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching YouTube API data:", error);
    throw error;
  }
};

export { fetchYouTubeData };
