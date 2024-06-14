import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import Quiz from "./components/Quiz.js";
import QuizComplete from "./components/QuizComplete.js";
import QuizResults from "./components/QuizResults.js";
import "./App.css";
import "./styles/styles.css";
import { calculateDominantGenre } from "./utils.js";
import { fetchSpotifyLink } from "./services/spotifyService.js";
import { fetchYouTubeVideos } from "./services/youtubeService.js";
import { loadInitialData } from "./services/dataService.js";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [questions, setQuestions] = useState([]);
  const [weights, setWeights] = useState([]);
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

  //might need to use these in the future for testing
  // useEffect(() => {
  //   if (isQuizComplete) {
  //     console.log("Quiz is Complete");
  //   }
  // }, [isQuizComplete]);

  // useEffect(() => {
  //   if (isCalculatedResults) {
  //     console.log("Calculate the Results");
  //   }
  // }, [isCalculatedResults]);

  const handleStartQuiz = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    console.log("Start Quiz");
  };

  const handleCalculateResults = () => {
    setCalculatedResults(true);
    console.log("Calculate the Results!");
    const dominant = calculateDominantGenre(weights);
    setDominantGenre(dominant);
    console.log(dominant);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(-1);
    setIsQuizComplete(false);
    setCalculatedResults(false);
    setSpotifyLink("");
    setYouTubeVideos([]);
    console.log("Reset Quiz");
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
      {error && <div>I&apos;m an Error</div>}
      {currentQuestionIndex === -1 && <Home startQuiz={handleStartQuiz} />}
      {currentQuestionIndex >= 0 &&
        currentQuestionIndex < questions.length &&
        !isQuizComplete && (
          <Quiz
            questions={questions}
            weights={weights}
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
