import React, { useState } from "react";

const QuizResults = ({
  resetQuiz,
  displaySpotifyInfo, 
  fetchYouTubeDataAndDisplay,
  spotifyLink,
  youTubeVideos,
  spotifyTrack,
}) => {
  const [videosFetched, setVideosFetched] = useState(false);

  return (
    <section id="results">
      <div id="resultsContent" role="alert">
       <p>Results are Here!</p> 
      </div>

      <div className="resultsSection">
        <div id="trackInfo">
          {spotifyTrack && (
            <>
              <img
                src={spotifyTrack.albumCover}
                alt={`Album Cover for ${spotifyTrack.albumName}`}
              />
              <p>Track Name: {spotifyTrack.name}</p>
              <p>Artist: {spotifyTrack.artist}</p>
              <p>Album: {spotifyTrack.albumName}</p>
            </>
          )}
        </div>
        <div id="spotifyLinkDiv">
          {spotifyLink && (
            <a
              id="spotifyLink"
              href={spotifyLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to Spotify
            </a>
          )}
        </div>
      </div>

      <div id="videoSection">
        {videosFetched && youTubeVideos && youTubeVideos.length > 0 && (
          youTubeVideos.map((video) => (
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
                  Your browser does not support this type of embed. Watch the
                  video here instead.
                </a>
              </noscript>
            </div>
          ))
        )}
      </div>

      <div id="buttonHolder">
        <button
          id="resetQuizButton"
          onClick={resetQuiz}
          aria-label="Reset and Start the Quiz Over"
        >
          Return to HomePage
        </button>
        <button
          id="spotifyTrackButton"
          onClick={displaySpotifyInfo} 
          aria-label="View the Spotify Track"
        >
          View the Spotify Track
        </button>
        <button
          id="youtubeVideoButton"
          onClick={() => {
            fetchYouTubeDataAndDisplay();
            setVideosFetched(true);
          }}
          aria-label="View the YouTube Video"
        >
          View the YouTube Video
        </button>
      </div>
    </section>
  );
};

export default QuizResults;

