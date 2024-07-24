import React from "react";

const SpotifyCard = ({ spotifyTrack, spotifyLink, dominantGenre }) => {
  return (
    <div className="card lg:card-side shadow-xl">
      <figure>
        <img
          src={spotifyTrack.albumCover}
          alt={`Album Cover for ${spotifyTrack.albumName} by ${spotifyTrack.artist}`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Your Recommended Song is:</h2>
        <p>Track: {spotifyTrack.name}</p>
        <p>Artist: {spotifyTrack.artist}</p>
        <p>Album: {spotifyTrack.albumName}</p>
        <p>
          Genre:{" "}
          {dominantGenre
            ? dominantGenre.charAt(0).toUpperCase() + dominantGenre.slice(1)
            : "Not Available"}
        </p>
        <div className="card-actions justify-end">
          <div id="spotifyLinkDiv">
            {spotifyLink && (
              <a
                className="btn btn-primary"
                id="spotifyLink"
                href={spotifyLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Listen on Spotify
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotifyCard;
