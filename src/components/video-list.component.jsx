import React from 'react'

import "./video-list.styles.scss";

import VideoItem from './video-item.component'

const VideoList = (props) => (
  <div className="video-list">
      {
          props.videos.map((video, i) => (
              <VideoItem key={`video-${i}`} video={video} />
          ))
      }
  </div>
);

export default VideoList