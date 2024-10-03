import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BreedSelector from './components/BreedSelector';
import ImageGallery from './components/ImageGallery';
import './App.css';

/* Variables to select the breed, the image amount, and to fetch the images. */
const App = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [imageCount, setImageCount] = useState(1);
  const [images, setImages] = useState([]);

  /* Fetch the dog breed list and to get dog breed names.  */
  useEffect(() => {
    const fetchBreeds = async () => {
      const response = await axios.get('https://dog.ceo/api/breeds/list/all');
      setBreeds(Object.keys(response.data.message));
    };
    fetchBreeds();
  }, []);

  /* Function to fetch images and be able to select number of images. */
  const fetchImages = async () => {
    if (selectedBreed && imageCount > 0 && imageCount <= 100) {
      const response = await axios.get(
        `https://dog.ceo/api/breed/${selectedBreed}/images/random/${imageCount}`
      );
      setImages(response.data.message);
    }
  };

  /* Event for changing a selected breed. */
  const handleBreedChange = (event) => {
    setSelectedBreed(event.target.value);
  };

  /* Event for changing the amount of images. */
  const handleImageCountChange = (event) => {
    setImageCount(event.target.value);
  };

  /* Event to submit the form. */
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchImages();
  };

  return (
    <div className="App">
      <h1>Dog Image Gallery</h1>
      <BreedSelector
        breeds={breeds}
        selectedBreed={selectedBreed}
        imageCount={imageCount}
        onBreedChange={handleBreedChange}
        onImageCountChange={handleImageCountChange}
        onSubmit={handleSubmit}
      />
      <ImageGallery images={images} />
    </div>
  );
};

export default App;
