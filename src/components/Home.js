import React from "react";

const Home = ({ startQuiz }) => (
  <section id="home">
    <div className="hero">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to Quiz Tunes!</h1>
          <p className="mb-5">
            Discover new music with Quiz Tunes, a web application that offers a
            fun and interactive quiz experience.
          </p>
          <button
            id="startQuizButton"
            onClick={startQuiz}
            aria-label="Start the Quiz"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
