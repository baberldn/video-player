import React from 'react';

const Menu = ({ onVideoChange }) => {
  const handleChange = (e) => {
    onVideoChange(e.target.value); 
  };

  return (
    <div className='video-container'>
      <label>
        <input
          type="radio"
          value="video1"
          name="video"
          onChange={handleChange}
          defaultChecked
        />
        Geyik
      </label>
      <label>
        <input
          type="radio"
          value="video2"
          name="video"
          onChange={handleChange}
        />
        Salyangoz
      </label>
      <label>
        <input
          type="radio"
          value="video3"
          name="video"
          onChange={handleChange}
        />
        Kedi
      </label>
      <label>
        <input
          type="radio"
          value="video4"
          name="video"
          onChange={handleChange}
        />
        Örümcek
      </label>
    </div>
  );
};

export default Menu;