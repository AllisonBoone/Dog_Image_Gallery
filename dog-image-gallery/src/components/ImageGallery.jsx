import React from 'react';

// Map the images array to give each image a unique class and key.

const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Dog ${index}`}
          className="gallery-image"
        />
      ))}
    </div>
  );
};

export default ImageGallery;
