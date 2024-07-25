import React from "react";
import YoutubeMockup from "./YoutubeMockup";
import SpotifyCard from "./SpotifyCard";

const QuizResults = ({
  resetQuiz,
  spotifyLink,
  youTubeVideos,
  spotifyTrack,
  dominantGenre,
}) => {
  return (
    <section id="results">
      {spotifyTrack && spotifyLink && dominantGenre ? (
        <SpotifyCard
          spotifyTrack={spotifyTrack}
          spotifyLink={spotifyLink}
          dominantGenre={dominantGenre}
        />
      ) : (
        <p>No Spotify recommendations available.</p>
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
