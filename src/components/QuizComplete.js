import React from "react";
import "../styles/quizCompleteStyles.scss";

const QuizComplete = ({ handleCalculateResults }) => (
  <section id="quizComplete" role="alert">
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
