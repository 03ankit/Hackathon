import React from 'react';

const ExampleCarouselImage = ({ text, imageUrl }) => {
    return (
      <div>
        <img
          src={imageUrl}
          alt={text}
          style={{ width: '100%', height: '400px', objectFit: 'cover' }}
        />
      </div>
    );
  };

export default ExampleCarouselImage;