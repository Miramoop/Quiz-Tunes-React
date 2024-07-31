import React from "react";

const SpotifyCard = ({ spotifyTrack, spotifyLink, dominantGenre }) => {
  return (
    <div className="card shadow-xl">
      <figure>
        <img
          src={spotifyTrack.albumCover}
          alt={`Album Cover for ${spotifyTrack.albumName} by ${spotifyTrack.artist}`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title" role="alert" aria-live="polite">
          Your Recommended Song is:
        </h2>
        <div className="spotify-content">
          <ul>
            <li role="alert" aria-live="polite">
              Track: {spotifyTrack.name}
            </li>
            <li role="alert" aria-live="polite">
              Artist: {spotifyTrack.artist}
            </li>
            <li role="alert" aria-live="polite">
              Album: {spotifyTrack.albumName}
            </li>
            <li role="alert" aria-live="polite">
              Genre:{" "}
              {dominantGenre
                ? dominantGenre.charAt(0).toUpperCase() + dominantGenre.slice(1)
                : "Not Available"}
            </li>
          </ul>
        </div>
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
