import React from "react";
import "./item.css";

const VideoItem = ({ video, onSelect }) => {
  return (
    <div className="item vid-item" onClick={() => onSelect(video)}>
      <img
        className="ui image img"
        src={video.snippet.thumbnails.medium.url}
        alt={video.id.videoId}
      />
      <div className="content">
        <p className="header">{video.snippet.title}</p>
        <div className="description">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoItem;
