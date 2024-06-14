import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import QuizComplete from "./components/QuizComplete";
import QuizResults from "./components/QuizResults";
import { calculateDominantGenre } from "./utils";
import { fetchSpotifyLink } from "./services/spotifyService";
import { fetchYouTubeVideos } from "./services/youtubeService";
import { loadInitialData } from "./services/dataService";
import "./App.css";
import "./styles/styles.css";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [questions, setQuestions] = useState([]);
  const [weights, setWeights] = useState({});
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [isCalculatedResults, setCalculatedResults] = useState(false);
  const [error, setError] = useState(false);
  const [dominantGenre, setDominantGenre] = useState(null);
  const [spotifyLink, setSpotifyLink] = useState("");
  const [youTubeVideos, setYouTubeVideos] = useState([]);

  useEffect(() => {
    setError(false);
    try {
      const { questions, weights } = loadInitialData();
      setQuestions(questions);
      setWeights(weights);
    } catch (e) {
      console.error(e);
      setError(true);
    }
  }, []);

  const updateWeights = (updatedWeights) => {
    setWeights(updatedWeights);
    console.log("Updated Weights:", updatedWeights);
  };

  const handleStartQuiz = () => {
    setCurrentQuestionIndex(0);
  };

  const handleCalculateResults = () => {
    setCalculatedResults(true);
    console.log("Weights:", weights);
    const dominant = calculateDominantGenre(weights);
    console.log("Dominant Genre:", dominant);
    setDominantGenre(dominant);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(-1);
    setIsQuizComplete(false);
    setCalculatedResults(false);
    setSpotifyLink("");
    setYouTubeVideos([]);
  };

  const displaySpotifyLink = async () => {
    try {
      const link = await fetchSpotifyLink(dominantGenre);
      setSpotifyLink(link);
    } catch (error) {
      console.error("Error in displaying Spotify link:", error);
    }
  };

  const fetchYouTubeDataAndDisplay = async () => {
    try {
      const trackName = localStorage.getItem("track_Name");
      const artistName = localStorage.getItem("artist_Name");
      const videos = await fetchYouTubeVideos(trackName, artistName);
      setYouTubeVideos(videos.items);
    } catch (error) {
      console.error("Error displaying YouTube videos:", error);
    }
  };

  return (
    <div className="App">
      <Header />
      {error && <div>I'm an Error</div>}
      {currentQuestionIndex === -1 && <Home startQuiz={handleStartQuiz} />}
      {currentQuestionIndex >= 0 && currentQuestionIndex < questions.length && !isQuizComplete && (
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
          displaySpotifyLink={displaySpotifyLink}
          fetchYouTubeDataAndDisplay={fetchYouTubeDataAndDisplay}
          spotifyLink={spotifyLink}
          youTubeVideos={youTubeVideos}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
