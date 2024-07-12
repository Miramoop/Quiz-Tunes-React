import React from "react";

const QuizResults = ({
  resetQuiz,
  spotifyLink,
  youTubeVideos,
  spotifyTrack,
  dominantGenre,
}) => {

  return (
    <section id="results">
      <div id="resultsContent" role="alert">
        <h2>Your Recommended Song is: </h2>
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
                <p>
                  Genre:{" "}
                  {dominantGenre
                    ? dominantGenre.charAt(0).toUpperCase() +
                      dominantGenre.slice(1)
                    : "Not Available"}
                </p>
              </>
            )}
          </div>
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
        {youTubeVideos &&
          youTubeVideos.length > 0 &&
          youTubeVideos.map((video) => (
            <div key={video.id.videoId} className="video-container">
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
          ))}
      </div>

      <div id="buttonHolder">
        <button
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
