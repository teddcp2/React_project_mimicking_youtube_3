import React from "react";

const VideoPlayer = ({ video }) => {
  console.log(video);
  return (
    <div className="ui">
      <div className="ui embed player">
        <iframe
          title="VideoPlayer"
          height="315"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className=" ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p className="ui description">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
