import React from 'react';

const Video = ({ selectedVideo }) => {
  const videoSources = {
    video1: 'https://www.youtube.com/embed/jqUDipMoMu0', 
    video2: 'https://www.youtube.com/embed/DxJQTNo5jwI', 
    video3: 'https://www.youtube.com/embed/VO89weyBK0k',
    video4: 'https://www.youtube.com/embed/CDZDd2KkqLE', 
  };

  return (
    <div className='video-box'>
      <iframe
        width="600"
        height="400"
        src={videoSources[selectedVideo]}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;