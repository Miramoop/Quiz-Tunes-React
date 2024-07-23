import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header>
      <div className="navbar">
        <div className="navbar-start">
          <img
            id="headerLogo"
            src="/img/logo/QuizTunesLogo.png"
            alt="Quiz Tunes Logo"
          />
        </div>
        <div className="navbar-end">
          <div className="dropdown lg:hidden">
            <button
              className="header-navigation-bar-button lg:hidden"
              aria-label="Navigation Bar Button"
            >
              <FontAwesomeIcon icon={faBars} size="1x" />
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow right-0 p-2"
            >
              <li className="menu-item">
                <a
                  href="https://github.com/Miramoop"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Page"
                >
                  GitHub
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="https://www.linkedin.com/in/mirandamorris845/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Page"
                >
                  LinkedIn
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="https://www.miramoop.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Portfolio Website"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className="menu-item">
                <a
                  href="https://github.com/Miramoop"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Page"
                >
                  GitHub
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="https://www.linkedin.com/in/mirandamorris845/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Page"
                >
                  LinkedIn
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="https://www.miramoop.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Portfolio Website"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
