import React from 'react';
import YouTube from 'react-youtube'

 function VideosSection() {
  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  const opts = {
    height: '390',
    width: '640',
    playerVars: { 
      autoplay: 1
    }
  };
  return (
    <div>
      <YouTube
        videoId="2g811Eo7K8U"
        opts={opts}
        onReady={onReady}
      />
    </div>
  )
}

export default VideosSection;
