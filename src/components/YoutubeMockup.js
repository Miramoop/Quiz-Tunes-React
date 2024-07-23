import React from "react";
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
    <div className="mockup-browser bg-base-300 border">
      <div className="mockup-browser-toolbar">
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
    </div>
  );
};

export default YoutubeMockup;
