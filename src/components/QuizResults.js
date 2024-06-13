import React, { useEffect, useState } from "react";
const QuizResults = ({}) => (
    <section id="results">
    <div id="resultsContent" role="alert"></div>
    <div id="videoContent"></div>
    <div id="spotifyContent"></div>
    <div id="buttonHolder">
        <ul>
            <li><button id="resetQuizButton" aria-label="Reset and Start the Quiz Over">Return to HomePage</button></li>
            <li><button id="spotifyTrackButton" aria-label="View the Spotify Track Link">View the Spotify Track</button></li>
            <li><button id="youtubeVideoButton" aria-label="View the YouTube Video">View the YouTube Video</button></li>
        </ul>
    </div>
    </section>
  );
export default QuizResults;