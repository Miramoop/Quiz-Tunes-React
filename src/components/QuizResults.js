import React from "react";
import YoutubeMockup from "./YoutubeMockup";

const QuizResults = ({
  resetQuiz,
  spotifyLink,
  youTubeVideos,
  spotifyTrack,
  dominantGenre,
}) => {
  return (
    <section id="results">
      {spotifyTrack ? (
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
      ) : (
        <p>No song information available.</p>
      )}
      <YoutubeMockup youTubeVideos={youTubeVideos} />

      <div id="buttonHolder">
        <button
          className="btn btn-primary"
          id="resetQuizButton"
          onClick={resetQuiz}
          aria-label="Reset and Start the Quiz Over"
        >
          Return to HomePage
        </button>
      </div>
    </section>
  );
};

export default QuizResults;
