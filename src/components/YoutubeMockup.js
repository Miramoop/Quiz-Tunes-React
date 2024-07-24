import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCircleXmark,
  faArrowLeft,
  faArrowRight,
  faArrowRotateRight,
  faSquareMinus,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";
import he from "he";

const YoutubeMockup = ({ youTubeVideos }) => {
  const youtubeVideoUrl =
    youTubeVideos && youTubeVideos.length > 0
      ? `https://www.youtube.com/watch?v=${youTubeVideos[0].id.videoId}`
      : "https://www.youtube.com";
  const youtubeTitle =
    youTubeVideos && youTubeVideos.length > 0
      ? he.decode(youTubeVideos[0].snippet.title)
      : "No video title available";
  return (
    <section className="youtube-mockup">
      <div className="browser-toolbar">
        <div className="navbar">
          <div className="navbar-start">
            <button aria-label="Navigation Bar Button">
              <FontAwesomeIcon icon={faArrowLeft} size="2x" />
            </button>
            <button aria-label="Navigation Bar Button">
              <FontAwesomeIcon icon={faArrowRight} size="2x" />
            </button>
            <button aria-label="Navigation Bar Button">
              <FontAwesomeIcon icon={faArrowRotateRight} size="2x" />
            </button>
          </div>
          <div className="navbar-middle"></div>
          <div className="navbar-end">
            <button aria-label="Navigation Bar Button">
              <FontAwesomeIcon icon={faSquareMinus} size="2x" />
            </button>
            <button aria-label="Navigation Bar Button">
              <FontAwesomeIcon icon={faExpand} size="2x" />
            </button>
            <button aria-label="Navigation Bar Button">
              <FontAwesomeIcon icon={faCircleXmark} size="2x" />
            </button>
          </div>
        </div>
        <div className="input">{youtubeVideoUrl}</div>
      </div>
      <div className="bg-base-200 flex flex-col items-center px-4 py-16">
        {youTubeVideos && youTubeVideos.length > 0 ? (
          <div id="videoSection">
            {youTubeVideos.map((video) => (
              <div key={video.id.videoId} className="video-container mb-4">
                <iframe
                  title={video.snippet.title}
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-64"
                ></iframe>
                <div className="videoInfo">
                  <p>{youtubeTitle}</p>
                </div>
                <noscript>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  >
                    Your browser does not support this type of embed. Watch the
                    video here instead.
                  </a>
                </noscript>
              </div>
            ))}
          </div>
        ) : (
          <p>No videos available</p>
        )}
      </div>
    </section>
  );
};

export default YoutubeMockup;
