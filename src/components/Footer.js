import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <footer className="active">
    <p> Check out my Socials Below: </p>
    <a
      href="https://github.com/Miramoop"
      target="_blank"
      rel="noopener, noreferrer"
      aria-label="GitHub Page"
    >
      <FontAwesomeIcon icon={faGithub} />
    </a>

    <a
      href="https://www.linkedin.com/in/mirandamorris845/"
      target="_blank"
      rel="noopener, noreferrer"
      aria-label="Linkedin Page"
    >
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
  </footer>
);

export default Footer;
