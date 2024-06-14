const client_id = "8a649d0e1cf74b1c89b6874845b17646";
const client_secret = "401dcd9823934db3bae3337efb7320a5";
async function getToken() {
  const url = "https://accounts.spotify.com/api/token";
  const payload = {
    method: "POST",
    body: new URLSearchParams({
      grant_type: "client_credentials",
    }),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(client_id + ":" + client_secret),
    },
  };
  const response = await fetch(url, payload);
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
      `https://api.spotify.com/v1/recommendations?limit=1&seed_genres=${genre}`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + access_token },
      }
    );
    const recommendations = await recommendationsResponse.json();
  
    if (!recommendations.tracks || recommendations.tracks.length === 0) {
      throw new Error("No tracks found for the genre");
    }
  
    // Fetch genres from artist
    const track = recommendations.tracks[0];
    const artistId = track.artists[0].id;
    const artistResponse = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + access_token },
      }
    );
    const artist = await artistResponse.json();
  
    // Add genres to the track information
    track.genres = artist.genres;
  
    return { tracks: [track] };
  }
  

export { getTrackInfo, getToken };
