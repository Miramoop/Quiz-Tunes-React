<div className="mockup-browser bg-base-300 border">
  <div className="mockup-browser-toolbar">
    <div className="input">
      {youTubeVideos && youTubeVideos.length > 0
        ? `https://www.youtube.com/watch?v=${youTubeVideos[0].id.videoId}`
        : "https://www.youtube.com/"}
    </div>
  </div>
  <div className="bg-base-200 flex justify-center px-4 py-16">
    <div id="videoSection">
      {youTubeVideos &&
        youTubeVideos.length > 0 &&
        youTubeVideos.map((video) => (
          <div key={video.id.videoId} className="video-container">
            <iframe
              title={video.snippet.title}
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="video-title">{he.decode(video.snippet.title)}</p>
            <noscript>
              <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
                Your browser does not support this type of embed. Watch the
                video here instead.
              </a>
            </noscript>
          </div>
        ))}
    </div>
  </div>
</div>;
