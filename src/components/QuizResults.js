import React from "react";
const QuizResults = ({
  resetQuiz,
  displaySpotifyLink,
  fetchYouTubeDataAndDisplay,
  spotifyLink,
  youtubeVideos,
}) => (
  <section id="results">
    <div id="resultsContent" role="alert">
      Results are Here!
    </div>
    <div id="spotifyContent"></div>
    <div id="buttonHolder">
      <ul>
        <li>
          <button
            id="resetQuizButton"
            onClick={resetQuiz} 
            aria-label="Reset and Start the Quiz Over"
          >
            Return to HomePage
          </button>
        </li>
        <li>
          <button
            id="spotifyTrackButton"
            onClick={displaySpotifyLink} //Add into App.js, displaySpotifyLink Function
            aria-label="View the Spotify Track Link"
          >
            View the Spotify Track
          </button>
        </li>
        <li>
          <button
            id="youtubeVideoButton"
            onClick={fetchYouTubeDataAndDisplay} //Add into App.js, fetchYouTubeDataAndDisplay Function
            aria-label="View the YouTube Video"
          >
            View the YouTube Video
          </button>
        </li>
      </ul>
    </div>
  </section>
);
export default QuizResults;
