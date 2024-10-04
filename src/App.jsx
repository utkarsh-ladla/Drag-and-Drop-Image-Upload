import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [dragging, setDragging] = useState(false);

  // Handle image drop 
  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);

    // Check for dropped image
    const files = event.dataTransfer.files;
    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  // allow drop event
  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  // for stop dragging state
  const handleDragLeave = () => {
    setDragging(false);
  };

  return (
    <>
    <h1>Drag & Drop</h1>
    <h2>(Implement drag-and-drop functionality for the image only)</h2>
    <div
    className={`drop-area ${dragging ? 'dragging' : ''}`}
    onDrop={handleDrop}
    onDragOver={handleDragOver}
    onDragLeave={handleDragLeave}
    >
      {imageSrc ? (
        <img src={imageSrc} alt="Dropped" className="dropped-image" />
      ) : (
        <p>Drag and drop an image here</p>
      )}
    </div>
    </>
  );
};

export default App;
