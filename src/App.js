import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import Quiz from "./components/Quiz.js";
import QuizComplete from "./components/QuizComplete.js";
import QuizResults from "./components/QuizResults.js";
import questionsData from "./data/questions.json";
import weightsData from "./data/weights.json";
import "./App.css";
import "./styles/styles.css";
import { getTrackInfo, getToken } from "./api/spotifyApi.js";
import { fetchYouTubeData } from "./api/youtubeApi.js";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [questions, setQuestions] = useState([]);
  const [weights, setWeights] = useState([]);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [isCalculatedResults, setCalculatedResults] = useState(false);
  const [error, setError] = useState(false);
  const [dominantGenre, setDominantGenre] = useState(null);
  const [spotifyLink, setSpotifyLink] = useState('');
  const [youTubeVideos, setYouTubeVideos] = useState([]);

  useEffect(() => {
    if (isQuizComplete) {
      console.log("Quiz is Complete");
    }
  }, [isQuizComplete]);

  useEffect(() => {
    if (isCalculatedResults) {
      console.log("Calculate the Results");
    }
  }, [isCalculatedResults]);

  useEffect(() => {
    setError(false);
    try {
      setQuestions(questionsData);
      setWeights(weightsData);
    } catch (e) {
      console.error(e);
      setError(true);
    }
  }, []);

  const handleStartQuiz = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    console.log("Start Quiz");
  };

  const handleCalculateResults = () => {
    setCalculatedResults(true);
    console.log("Calculate the Results!");
    const dominant = calculateDominantGenre(weights);
    setDominantGenre(dominant);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(-1);
    setIsQuizComplete(false);
    setCalculatedResults(false);
    setSpotifyLink('');
    setYouTubeVideos([]);
    console.log("Reset Quiz");
  };

  const calculateDominantGenre = (weights) => {
    let maxValue = -Infinity;
    let dominantGenre;
    for (const genre in weights) {
      if (weights.hasOwnProperty(genre)) {
        if (weights[genre] > maxValue) {
          maxValue = weights[genre];
          dominantGenre = genre;
        }
      }
    }
    return dominantGenre;
  };

  const displaySpotifyLink = async () => {
    try {
      const token = await getToken();
      const trackInfo = await getTrackInfo(token, dominantGenre);
      setSpotifyLink(trackInfo.tracks[0].external_urls.spotify);
    } catch(error) {
      console.error("Error fetching Spotify track:", error);
    }
  };

  const fetchYouTubeDataAndDisplay = async () => {
    try {
      const trackName = localStorage.getItem('track_Name');
      const artistName = localStorage.getItem('artist_Name');
      const data = await fetchYouTubeData(trackName, artistName);
      setYouTubeVideos(data.items);
    } catch(error){
      console.error("Error fetching YouTube data:", error);
    }
  };

  return (
    <div className="App">
      <Header />
      {error && <div>I&apos;m an Error</div>}
      {currentQuestionIndex === -1 && <Home startQuiz={handleStartQuiz} />}
      {currentQuestionIndex >= 0 && currentQuestionIndex < questions.length && !isQuizComplete && (
        <Quiz
          questions={questions}
          weights={weights}
          setIsQuizComplete={setIsQuizComplete}
        />
      )}
      {isQuizComplete && !isCalculatedResults &&(
        <QuizComplete
          handleCalculateResults={handleCalculateResults}
        />
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
