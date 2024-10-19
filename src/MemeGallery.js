import React, { useState } from 'react';

const MemeGallery = () => {
  const memes = [
    { url: 'https://via.placeholder.com/200x200', likes: 0 },
    { url: 'https://via.placeholder.com/200x200/FF0000', likes: 0 }
  ];
  const [gallery, setGallery] = useState(memes);

  const likeMeme = (index) => {
    const updatedGallery = gallery.map((meme, i) =>
      i === index ? { ...meme, likes: meme.likes + 1 } : meme
    );
    setGallery(updatedGallery);
  };

  return (
    <div>
      {gallery.map((meme, index) => (
        <div key={index}>
          <img src={meme.url} alt={`Meme ${index}`} />
          <p>Likes: {meme.likes}</p>
          <button onClick={() => likeMeme(index)}>Like</button>
        </div>
      ))}
    </div>
  );
};

export default MemeGallery;
