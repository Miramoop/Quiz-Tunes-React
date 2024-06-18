import Constants from "../data/constants";

async function getToken() {
  const payload = {
    method: "POST",
    body: new URLSearchParams({
      grant_type: Constants.SPOTIFY_GRANT_TYPE,
    }),
    headers: {
      "Content-Type": Constants.CONTENT_TYPE_URLENCODED,
      Authorization: "Basic " + btoa(`${Constants.SPOTIFY_CLIENT_ID}:${Constants.SPOTIFY_CLIENT_SECRET}`),
    },
  };
  const response = await fetch(Constants.SPOTIFY_TOKEN_URL, payload);
  const data = await response.json();
  if (response.ok) {
    localStorage.setItem("access_token", data.access_token);
    return data;
  } else {
    console.error("Error getting token: ", data);
    throw new Error("Failed to fetch token");
  }
}
async function getTrackInfo(access_token, genre) {
    const recommendationsResponse = await fetch(
      `${Constants.SPOTIFY_API_BASE_URL}/recommendations?limit=1&seed_genres=${genre}`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + access_token },
      }
    );
    const recommendations = await recommendationsResponse.json();
  
    if (!recommendations.tracks || recommendations.tracks.length === 0) {
      throw new Error("No tracks found for the genre");
    }
  
    const track = recommendations.tracks[0];
    const artistId = track.artists[0].id;
    const artistResponse = await fetch(
      `${Constants.SPOTIFY_API_BASE_URL}/artists/${artistId}`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + access_token },
      }
    );
    const artist = await artistResponse.json();

    track.genres = artist.genres;
  
    return { tracks: [track] };
  }
  

export { getTrackInfo, getToken };
