import React from "react";

const QuizComplete = ({handleCalculateResults}) => (
  <section id="quizComplete" role="alert">
    <img
      id="progressImage"
      role="img"
      src="img/quizcompleteprogress.jpg"
      alt="Progress indicator with all 10 circles filled"
    />
    <h2 id="completeTextContainer" aria-label="Quiz is Complete!">
      Quiz is Complete!
    </h2>
    <button
      id="calculateResults"
      onClick={handleCalculateResults}
      aria-label="Calculate the Results"
    >
      Calculate Results
    </button>
  </section>
);

export default QuizComplete;
