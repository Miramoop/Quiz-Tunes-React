import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <a aria-label="Navigation Bar Button">
              <FontAwesomeIcon icon={faBars} size="2x" />
            </a>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              {" "}
              <a
                href="https://github.com/Miramoop"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Page"
              >
                GitHub
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://www.linkedin.com/in/mirandamorris845/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Page"
              >
                LinkedIn
              </a>
            </li>
            <li>
              {" "}
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
        <p>Quiz Tunes</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            {" "}
            <a
              href="https://github.com/Miramoop"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Page"
            >
              GitHub
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://www.linkedin.com/in/mirandamorris845/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Page"
            >
              LinkedIn
            </a>
          </li>
          <li>
            {" "}
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
      <div className="navbar-end"></div>
    </div>
  );
}

export default Header;
