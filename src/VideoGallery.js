import React, { useState } from 'react';

const VideoGallery = () => {
  const videos = [
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/movie.mp4'
  ];
  const [currentVideo, setCurrentVideo] = useState(0);

  const nextVideo = () => setCurrentVideo((currentVideo + 1) % videos.length);
  const prevVideo = () => setCurrentVideo((currentVideo - 1 + videos.length) % videos.length);

  return (
    <div>
      <video width="400" controls>
        <source src={videos[currentVideo]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>
        <button onClick={prevVideo}>Previous</button>
        <button onClick={nextVideo}>Next</button>
      </div>
    </div>
  );
};

export default VideoGallery;
