import React from "react";

const YoutubeMockup = ({ youTubeVideos }) => {
  return (
    <section id="results">
      {youTubeVideos && youTubeVideos.length > 0 && (
        <div id="videoSection">
          {youTubeVideos.map((video) => (
            <div key={video.id.videoId} className="video-container">
              <iframe
                title={video.snippet.title}
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <noscript>
                <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
                  Your browser does not support this type of embed. Watch the
                  video here instead.
                </a>
              </noscript>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default YoutubeMockup;
