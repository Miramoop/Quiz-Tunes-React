import React from "react";

function Header() {
  return (
    <header>
      <nav>
        <div>
          <img
            id="headerLogo"
            src="/img/logo/QuizTunesLogo.png"
            alt="QuizTunes Logo"
          />
        </div>
        <h1>Quiz Tunes</h1>
        <ul>
          <li>
            <a
              href="https://github.com/Miramoop"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Page"
              className="hover:text-gray-400"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mirandamorris845/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Page"
              className="hover:text-gray-400"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.miramoop.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Portfolio Page"
              className="hover:text-gray-400"
            >
              Portfolio
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;


// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
// import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

// function Header() {
//   return  (
//     <header>
//         <img
//           id="headerLogo"
//           src="/img/logo/QuizTunesLogo.png"
//           alt="QuizTunes Logo"
//         />
//         <h1>Quiz Tunes</h1>
//         <nav>
//           <ul>
//           <li>
//             <a
//               href="https://github.com/Miramoop"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="GitHub Page"
//             >
//               GitHub
//             </a>
//           </li>
//           <li>
//             <a
//               href="https://www.linkedin.com/in/mirandamorris845/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="GitHub Page"
//             >
//               LinkedIn
//             </a>
//           </li>
//           <li>
//             <a
//               href="https://www.miramoop.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="GitHub Page"
//             >
//               Portfolio
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;
