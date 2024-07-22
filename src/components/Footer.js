import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <footer>
    <nav>
      <h6>Check out my Socials</h6>
      <div>
        <a
          href="https://github.com/Miramoop"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Page"
        >
          <FontAwesomeIcon icon={faGithub} size="1.5x" />
        </a>
        <a
          href="https://www.linkedin.com/in/mirandamorris845/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Page"
        >
          <FontAwesomeIcon icon={faLinkedin} size="1.5x" />
        </a>
      </div>
    </nav>
  </footer>
);

export default Footer;

