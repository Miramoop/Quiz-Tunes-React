import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import QuizComplete from "./components/QuizComplete";
import QuizResults from "./components/QuizResults";
import { calculateDominantGenre } from "./utils";
import { fetchTrackInfo } from "./services/spotifyService";
import { fetchYouTubeVideos } from "./services/youtubeService";
import { loadInitialData } from "./services/dataService";
import ErrorBoundary from "./components/errors/ErrorBoundary";
import { ErrorMessages } from "./components/errors/ErrorMessages";

import "./App.css";
import "./styles/styles.css";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [questions, setQuestions] = useState([]);
  const [weights, setWeights] = useState({});
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [isCalculatedResults, setCalculatedResults] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorType, setErrorType] = useState("");
  const [dominantGenre, setDominantGenre] = useState(null);
  const [spotifyLink, setSpotifyLink] = useState("");
  const [youTubeVideos, setYouTubeVideos] = useState([]);
  const [spotifyTrack, setSpotifyTrack] = useState(null);

  useEffect(() => {
    setError(false);
    try {
      const { questions, weights } = loadInitialData();
      setQuestions(questions);
      setWeights(weights);
    } catch (error) {
      console.error("Error loading intial data:", error);
      setError(true);
      setErrorType("InitialDataLoadError");
      setErrorMessage(ErrorMessages.InitialDataLoadError);
    }
  }, []);

  const updateWeights = (updatedWeights) => {
    setWeights(updatedWeights);
  };

  const handleStartQuiz = () => {
    setCurrentQuestionIndex(0);
  };

  const handleCalculateResults = () => {
    setCalculatedResults(true);
    const dominant = calculateDominantGenre(weights);
    setDominantGenre(dominant);
    displayRecommendedTracks(dominant);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(-1);
    setIsQuizComplete(false);
    setCalculatedResults(false);
    setSpotifyLink("");
    setYouTubeVideos([]);
    setSpotifyTrack(null);
    setDominantGenre(null);
    setError(false);
    setErrorMessage("");
    setErrorType("");
  };

  const displaySpotifyInfo = async () => {
    try {
      const track = await fetchTrackInfo(dominantGenre);
      if (!track || !track.spotifyUrl) {
        throw new Error("Invalid Spotify track data");
      }
      setSpotifyLink(track.spotifyUrl);
    } catch (error) {
      console.error("Error in displaying Spotify link:", error);
      setError(true);
      setErrorType("SpotifyFetchError");
      setErrorMessage(ErrorMessages.SpotifyFetchError);
    }
  };

  const fetchYouTubeDataAndDisplay = async () => {
    try {
      const trackName = localStorage.getItem("track_Name");
      const artistName = localStorage.getItem("artist_Name");
      if (!trackName || artistName) {
        throw new Error("Missing track name or artist name in local storage");
      }
      const videos = await fetchYouTubeVideos(trackName, artistName);
      if (!videos || !videos.items) {
        throw new Error("Invalid YouTube video data");
      }
      setYouTubeVideos(videos.items);
    } catch (error) {
      console.error("Error displaying YouTube video:", error);
      setError(true);
      setErrorType("YouTubeFetchError");
      setErrorMessage(ErrorMessages.YouTubeFetchError);
    }
  };

  const displayRecommendedTracks = async (genre) => {
    try {
      const trackInfo = await fetchTrackInfo(genre);
      if (!trackInfo || !trackInfo.name || !trackInfo.artist) {
        throw new Error("Invalid recommended track data");
      }
      setSpotifyTrack(trackInfo);

      if (trackInfo.name && trackInfo.artist) {
        localStorage.setItem("track_Name", trackInfo.name);
        localStorage.setItem("artist_Name", trackInfo.artist);
      }
    } catch (error) {
      console.error("Error fetching recommended track:", error);
      setError(true);
      setErrorType("RecommendedTrackFetchError");
      setErrorMessage(ErrorMessages.RecommendedTrackFetchError);
    }
  };

  return (
    <div className="App">
      <Header />
      <ErrorBoundary resetQuiz={resetQuiz}>
        {error ? (
          <div className="error-section">
            <p>{errorMessage}</p>
            <button
              id="returnHomeButton"
              onClick={resetQuiz}
              aria-label="Return to HomePage"
            >
              Return to HomePage
            </button>
          </div>
        ) : (
          <>
            {currentQuestionIndex === -1 && (
              <Home startQuiz={handleStartQuiz} />
            )}
            {currentQuestionIndex >= 0 &&
              currentQuestionIndex < questions.length &&
              !isQuizComplete && (
                <Quiz
                  questions={questions}
                  weights={weights}
                  updateWeights={updateWeights}
                  setIsQuizComplete={setIsQuizComplete}
                />
              )}
            {isQuizComplete && !isCalculatedResults && (
              <QuizComplete handleCalculateResults={handleCalculateResults} />
            )}
            {isCalculatedResults && (
              <QuizResults
                resetQuiz={resetQuiz}
                displaySpotifyInfo={displaySpotifyInfo}
                fetchYouTubeDataAndDisplay={fetchYouTubeDataAndDisplay}
                spotifyLink={spotifyLink}
                youTubeVideos={youTubeVideos}
                spotifyTrack={spotifyTrack}
                dominantGenre={dominantGenre}
              />
            )}
          </>
        )}
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default App;
