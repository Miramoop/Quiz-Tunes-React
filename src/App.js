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
import './styles/styles.css';

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
  const [spotifyTrack, setSpotifyTrack] = useState(null);

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
  };

  const handleStartQuiz = () => {
    setCurrentQuestionIndex(0);
  };

  const handleCalculateResults = async () => {
    setCalculatedResults(true);
    const dominant = calculateDominantGenre(weights);
    setDominantGenre(dominant);

    try {
      const trackInfo = await fetchTrackInfo(dominant);
      setSpotifyTrack(trackInfo);

      if (trackInfo.spotifyUrl) {
        setSpotifyLink(trackInfo.spotifyUrl);
      } else {
        throw new Error("No Spotify link available.");
      }

      const videos = await fetchYouTubeVideos(trackInfo.name, trackInfo.artist);
      setYouTubeVideos(videos.items);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(-1);
    setIsQuizComplete(false);
    setCalculatedResults(false);
    setSpotifyLink("");
    setYouTubeVideos([]);
    setSpotifyTrack(null);
    setDominantGenre(null);
  };

  return (
    <div className="App">
      <Header />
      {error && <div>I'm an Error</div>}
      {currentQuestionIndex === -1 && <Home startQuiz={handleStartQuiz} />}
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
          spotifyLink={spotifyLink}
          youTubeVideos={youTubeVideos}
          spotifyTrack={spotifyTrack}
          dominantGenre={dominantGenre}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;