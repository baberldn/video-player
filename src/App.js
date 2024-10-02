import React, { useState } from 'react';
import Menu from './Menu';
import Video from './Video';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState('video1');

  const handleVideoChange = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className='video-container'>
      <h1>Project 6 : Video Player</h1>
      <Menu onVideoChange={handleVideoChange} />
      <Video selectedVideo={selectedVideo} />
    </div>
  );
};

export default App;