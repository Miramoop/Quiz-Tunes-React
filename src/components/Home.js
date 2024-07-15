import React from "react";

const Home = ({ startQuiz }) => (
  <section id="home">
    <h2 aria-label="Welcome to Quiz Tunes!">Welcome to Quiz Tunes!</h2>
    <button
      id="startQuizButton"
      onClick={startQuiz}
      aria-label="Start the Quiz"
    >
      Start Quiz
    </button>
  </section>
);

export default Home;