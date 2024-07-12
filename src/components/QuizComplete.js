import React from "react";

const QuizComplete = ({ handleCalculateResults }) => (
  <section id="quizComplete">
    <div className="hero" style={{ minHeight: "75vh" }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Quiz is Complete!</h1>
          <p className="mb-5">
            Thanks for taking the quiz! 
            Press the button to get your song recommendation!
          </p>
          <button
            id="calculateResultsButton"
            onClick={handleCalculateResults}
            aria-label="Calculate the Results"
          >
            Calculate Results
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default QuizComplete;
