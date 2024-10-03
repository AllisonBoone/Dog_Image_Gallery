import React from 'react';

// Makes the breeds options in the dropdown bar as well as making you able to change images.

const BreedSelector = ({
  breeds,
  selectedBreed,
  imageCount,
  onBreedChange,
  onImageCountChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Select Breed:
        <select value={selectedBreed} onChange={onBreedChange}>
          <option value="">Select a breed</option>
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {' '}
              {breed}
            </option>
          ))}
        </select>
      </label>
      <label>
        Number of Images:
        <input
          type="number"
          value={imageCount}
          onChange={onImageCountChange}
          min="1"
          max="100"
        />
      </label>
      <button type="submit">Fetch Images</button>
    </form>
  );
};

export default BreedSelector;
