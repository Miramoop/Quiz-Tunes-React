import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faBell,
  faMicrophone,
  faVideo,
  faMagnifyingGlass,
  faBars,
  faXmark,
  faExpand,
  faMinus,
  faArrowLeft,
  faArrowRight,
  faArrowRotateRight,
  faChevronDown,
  faPlus,
  faWindowRestore,
  faPuzzlePiece,
  faThumbsUp,
  faThumbsDown,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import he from "he";

const YouTubeMockup = ({ youTubeVideos }) => {
  const youtubeVideoUrl =
    youTubeVideos && youTubeVideos.length > 0
      ? `https://www.youtube.com/watch?v=${youTubeVideos[0].id.videoId}`
      : "https://www.youtube.com";
  const youtubeTitle =
    youTubeVideos && youTubeVideos.length > 0
      ? he.decode(youTubeVideos[0].snippet.title)
      : "No video title available";
  const youtubeDescription =
    youTubeVideos && youTubeVideos.length > 0
      ? he.decode(youTubeVideos[0].snippet.description)
      : "No video description available";

  return (
    <section className="mockup">
      <div className="browser-toolbar no-hover-effect" role="presentation">
        <div className="browser-toolbar-start">
          <div className="toolbar-icons" aria-label="toolbar icons">
            <FontAwesomeIcon icon={faWindowRestore} size="1x" />
          </div>
          <div className="tabs tabs-boxed no-hover-effect" role="presentation">
            <ul>
              <li role="tab" className="tab tab-active no-hover-effect">
                YouTube
              </li>
              <li role="tab" className="tab no-hover-effect">
                Miramoop Coding
              </li>
              <li role="tab" className="tab no-hover-effect">
                Quiz Tunes
              </li>
            </ul>
          </div>
          <div className="toolbar-icons-end">
            <FontAwesomeIcon icon={faPlus} size="1x" />
          </div>
          <div className="toolbar-icons-end">
            <FontAwesomeIcon icon={faChevronDown} size="1x" />
          </div>
        </div>
        <div className="browser-toolbar-middle"></div>
        <div className="browser-toolbar-end">
          <div className="toolbar-icons">
            <FontAwesomeIcon icon={faMinus} size="1x" />
          </div>
          <div className="toolbar-icons">
            <FontAwesomeIcon icon={faExpand} size="1x" />
          </div>
          <div className="toolbar-icons">
            <FontAwesomeIcon icon={faXmark} size="1x" />
          </div>
        </div>
      </div>
      <div className="mockup-navbar">
        <div className="mockup-navbar-start">
          <div className="toolbar-icons">
            <FontAwesomeIcon icon={faArrowLeft} size="1x" />
          </div>
          <div className="toolbar-icons">
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </div>
          <div className="toolbar-icons">
            <FontAwesomeIcon icon={faArrowRotateRight} size="1x" />
          </div>
        </div>
        <div className="mockup-navbar-middle">
          <div className="address-bar" role="presentation">
            <div className="address-bar-search-icon">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" />
            </div>
            <span className="youtube-video-url no-hover-effect">
              {youtubeVideoUrl}
            </span>
          </div>
        </div>
        <div className="mockup-navbar-end">
          <div>
            <div className="skeleton h-5 w-5 shrink-0 rounded-full"></div>
          </div>
          <div className="toolbar-icons">
            <FontAwesomeIcon icon={faPuzzlePiece} size="1x" />
          </div>
          <div className="mobile-toolbar-icon">
            <FontAwesomeIcon icon={faBars} size="1x" />
          </div>
        </div>
      </div>
      <div className="youtube-mockup-navbar">
        <div className="youtube-navbar-start">
          <div className="youtube-navbar-bars">
            <FontAwesomeIcon icon={faBars} size="1x" />
          </div>
          <div className="youtube-navbar-icons youtube-icon">
            <FontAwesomeIcon icon={faYoutube} size="1x" />
          </div>
        </div>
        <div className="youtube-navbar-middle">
          <div className="youtube-search-wrapper">
            <div className="youtube-search">
              <div
                className="youtube-search-input no-hover-effect"
                role="presentation"
              >
                Search
              </div>
            </div>
            <div className="rounded-icon">
              <FontAwesomeIcon icon={faMicrophone} size="1x" />
            </div>
            <div className="youtube-search-icon">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" />
            </div>
          </div>
        </div>
        <div className="youtube-navbar-end">
          <div className="mobile-icons">
            <FontAwesomeIcon icon={faMicrophone} size="1x" />
          </div>
          <div className="mobile-icons">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" />
          </div>

          <div className="youtube-navbar-icons">
            <FontAwesomeIcon icon={faVideo} size="1x" />
          </div>
          <div className="youtube-navbar-icons">
            <FontAwesomeIcon icon={faBell} size="1x" />
          </div>
          <div>
            <div className="skeleton h-5 w-5 shrink-0 rounded-full youtube-navbar-skeleton"></div>
          </div>
        </div>
      </div>
      <div className="youtube-content-wrapper">
        <div className="video-section">
          {youTubeVideos && youTubeVideos.length > 0 ? (
            <article
              key={youTubeVideos[0].id.videoId}
              className="video-container"
            >
              <iframe
                title={youtubeTitle}
                src={`https://www.youtube.com/embed/${youTubeVideos[0].id.videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="video-frame"
              ></iframe>
              <div className="video-info">
                <div className="flex flex-col w-full">
                  <div className="youtube-title" role="presentation">
                    {youtubeTitle}
                  </div>
                  <div className="flex w-full mt-2 justify-start">
                    <div className="flex items-center gap-4">
                      <div className="skeleton h-8 w-8 shrink-0 rounded-full"></div>
                      <div className="skeleton h-5 w-20"></div>
                    </div>
                    <div className="flex flex-col gap-4 ml-4 flex-1">
                      <div className="flex justify-end">
                        <div className="rounded-icon">
                          <FontAwesomeIcon icon={faThumbsUp} size="1x" />
                        </div>
                        <div className="rounded-icon">
                          <FontAwesomeIcon icon={faThumbsDown} size="1x" />
                        </div>
                        <div className="rounded-icon youtube-share">
                          <FontAwesomeIcon icon={faShare} size="1x" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="youtube-description no-hover-effect"
                role="presentation"
              >
                {youtubeDescription}
              </div>
            </article>
          ) : (
            <p>No videos available</p>
          )}
        </div>
        <div className="right-section" role="presentation">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-10 w-full"></div>
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-10 w-full"></div>
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-10 w-full"></div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeMockup;
