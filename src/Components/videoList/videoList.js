import React from "react";
import VideoItem from "../VideoItem/videoItem";

const VideoList = (props) => {
  return (
    <div className="ui relaxed divided list selection animated segment">
      {props.videos.map((item) => (
        <VideoItem
          video={item}
          key={item.id.videoId}
          onSelect={props.onSelect}
        />
      ))}
    </div>
  );
};

export default VideoList;
