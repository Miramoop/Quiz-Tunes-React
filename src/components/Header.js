import React from "react";
import "../styles/headerStyles.scss";

const Header = () => (
  <header className="active">
    <img
      id="headerLogo"
      src="/img/logo/QuizTunesLogo.png"
      alt="QuizTunes Logo"
    />
    <h1>Quiz Tunes</h1>
  </header>
);

export default Header;
