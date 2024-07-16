import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <footer className="footer footer-center text-primary-content">
    <img
      id="miramoopLogo"
      src="/img/logo/miramoopLogo.png"
      alt="Miramoop Logo"
    />
    <p>
      Copyright © {new Date().getFullYear()} Miramoop <br></br> All right
      reserved
    </p>
    <nav>
      <div className="grid grid-flow-col social-links">
        <a
          href="https://github.com/Miramoop"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Page"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/mirandamorris845/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Page"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://www.miramoop.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Portfolio Website"
        >
          <FontAwesomeIcon icon={faBriefcase} size="2x" />
        </a>
      </div>
    </nav>
  </footer>
);

export default Footer;
