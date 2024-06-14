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
    <div id="videoContent">
      {youtubeVideos && youtubeVideos.length > 0 && youtubeVideos.map(video => (
        <div key={video.id.videoId} className="video-container">
        <h2>{video.snippet.title}</h2>
        <iframe 
          title={video.snippet.title}
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          ></iframe>
          <noscript>
          <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
              Your browser does not support this type of embed. Watch the video here instead.
          </a>
          </noscript>
        </div>
      ))}
    </div>

    <div id="spotifyContent">
      {spotifyLink && (
        <a id="spotifyLink" href={spotifyLink} target="_blank" rel="noopener noreferrer">
        Link to Spotify
      </a>
      )}
    </div>

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
