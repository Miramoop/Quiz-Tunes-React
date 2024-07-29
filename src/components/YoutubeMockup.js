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

const Mockup = ({ youTubeVideos }) => {
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
      <header className="browser-toolbar">
        <div className="browser-toolbar-start">
          <button className="toolbar-icons" aria-label="toolbar icons">
            <FontAwesomeIcon icon={faWindowRestore} size="1x" />
          </button>
          <div role="tablist" className="tabs tabs-boxed">
            <a role="tab" className="tab tab-active">
              YouTube
            </a>
            <a role="tab" className="tab">
              Miramoop Coding
            </a>
            <a role="tab" className="tab">
              Quiz Tunes
            </a>
          </div>
          <button className="toolbar-icons-end" aria-label="toolbar icons">
            <FontAwesomeIcon icon={faPlus} size="1x" />
          </button>
          <button className="toolbar-icons-end" aria-label="toolbar icons">
            <FontAwesomeIcon icon={faChevronDown} size="1x" />
          </button>
        </div>
        <div className="browser-toolbar-middle"></div>
        <div className="browser-toolbar-end">
          <button className="toolbar-icons" aria-label="toolbar icons">
            <FontAwesomeIcon icon={faMinus} size="1x" />
          </button>
          <button className="toolbar-icons" aria-label="toolbar icons">
            <FontAwesomeIcon icon={faExpand} size="1x" />
          </button>
          <button className="toolbar-icons" aria-label="toolbar icons">
            <FontAwesomeIcon icon={faXmark} size="1x" />
          </button>
        </div>
      </header>
      <nav className="mockup-navbar">
        <div className="mockup-navbar-start">
          <button className="toolbar-icons" aria-label="toolbar icons">
            <FontAwesomeIcon icon={faArrowLeft} size="1x" />
          </button>
          <button className="toolbar-icons" aria-label="toolbar icons">
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </button>
          <button className="toolbar-icons" aria-label="toolbar icons">
            <FontAwesomeIcon icon={faArrowRotateRight} size="1x" />
          </button>
        </div>
        <div className="mockup-navbar-middle">
          <div className="address-bar">
            <button className="address-bar-search-icon">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" />
            </button>
            <span className="youtube-video-url">{youtubeVideoUrl}</span>
          </div>
        </div>
        <div className="mockup-navbar-end">
          <button>
            <div className="skeleton h-5 w-5 shrink-0 rounded-full"></div>
          </button>
          <button className="toolbar-icons" aria-label="toolbar icons">
            <FontAwesomeIcon icon={faPuzzlePiece} size="1x" />
          </button>
          <button className="mobile-toolbar-icon" aria-label="toolbar icons">
            <FontAwesomeIcon icon={faBars} size="1x" />
          </button>
        </div>
      </nav>
      <nav className="youtube-mockup-navbar">
        <div className="youtube-navbar-start">
          <button>
            <FontAwesomeIcon icon={faBars} size="1x" />
          </button>
          <button className="youtube-icon">
            <FontAwesomeIcon icon={faYoutube} size="1x" />
          </button>
        </div>
        <div className="youtube-navbar-middle">
          <div className="youtube-search-wrapper">
            <div className="youtube-search">
              <input
                className="youtube-search-input"
                type="text"
                placeholder="Search"
                disabled
              />
              <button className="youtube-search-icon">
                <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" />
              </button>
            </div>
            <button className="rounded-icon">
              <FontAwesomeIcon icon={faMicrophone} size="1x" />
            </button>
          </div>
        </div>
        <div className="youtube-navbar-end">
          <button className="youtube-icons" aria-label="youtube icons">
            <FontAwesomeIcon icon={faVideo} size="1x" />
          </button>
          <button className="youtube-icons" aria-label="youtube icons">
            <FontAwesomeIcon icon={faBell} size="1x" />
          </button>
          <button>
            <div className="skeleton h-5 w-5 shrink-0 rounded-full"></div>
          </button>
        </div>
      </nav>
      <div className="content-wrapper">
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
                  <div className="youtube-title">{youtubeTitle}</div>
                  <div className="flex w-full mt-2 justify-start">
                    <div className="flex items-center gap-4">
                      <div className="skeleton h-8 w-8 shrink-0 rounded-full"></div>
                      <div className="skeleton h-5 w-20"></div>
                    </div>
                    <div className="flex flex-col gap-4 ml-4 flex-1">
                      <div className="flex justify-end">
                        <button className="rounded-icon">
                          <FontAwesomeIcon icon={faThumbsUp} size="1x" />
                        </button>
                        <button className="rounded-icon">
                          <FontAwesomeIcon icon={faThumbsDown} size="1x" />
                        </button>
                        <button className="rounded-icon">
                          <FontAwesomeIcon icon={faShare} size="1x" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="youtube-description">{youtubeDescription}</div>
            </article>
          ) : (
            <p>No videos available</p>
          )}
        </div>
        <div className="right-section">
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

export default Mockup;
