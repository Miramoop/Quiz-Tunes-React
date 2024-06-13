import logo from "./logo.svg";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import Quiz from "./components/Quiz.js";
import QuizComplete from "./components/QuizComplete.js";
import QuizResults from "./components/QuizResults.js";
import questionsData from "./data/questions.json";
import weightsData from "./data/weights.json";
import { useState, useEffect } from "react";
import "./App.css";
import "./styles/styles.css";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [questions, setQuestions] = useState([]);
  const [weights, setWeights] = useState([]);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [isCalculatedResults, setCalculatedResults] = useState(false);
  const [error, setError] = useState(false);
  
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
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(-1);
    setIsQuizComplete(false);
    setCalculatedResults(false);
    console.log("Reset Quiz");
  };

  const displaySpotifyLink = () => {
    console.log("Display Spotify Link");
  };

  const fetchYouTubeDataAndDisplay = () => {
    console.log("Fetch YouTube Data & Display");
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
      />
      )}
      <Footer />
    </div>
  );
}

export default App;
