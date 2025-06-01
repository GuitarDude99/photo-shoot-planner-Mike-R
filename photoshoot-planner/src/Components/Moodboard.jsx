//Moodboard

import React, { useState, useRef } from "react";
import Button from "./Button";

function Moodboard() {

  // Start with 3 default example images from the public folder

  const [imagePreviews, setImagePreviews] = useState([
    "/example1.jpg",
    "/example2.jpg",
    "/example3.jpg",
  ]);

  const [updateMessage, setUpdateMessage] = useState("");
  const fileInputRef = useRef(null); // for hidden file input

  // When the Add button is clicked, simulate a click on the hidden file input

  const handleAddClick = () => {
    fileInputRef.current.click();
    
  };

  // When a user selects an image to upload

  const handleImageChange = (event) => {

    const selectedFiles = Array.from(event.target.files).slice(0, 3);
    const newPreviews = [];
    let loadedCount = 0;
  
    selectedFiles.forEach((file) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        newPreviews.push(reader.result);
        loadedCount++;
  
        // When all files are loaded, update the state

        if (loadedCount === selectedFiles.length) {
          setImagePreviews((prev) => [...prev, ...newPreviews]);
          setUpdateMessage("Images added!");
          setTimeout(() => setUpdateMessage(""), 3000);
        }
      };
  
      reader.readAsDataURL(file);

    });
  
    // Reset file input so same file can be re-selected later

    event.target.value = null;
  };
  

  // Remove an image by its index

  const handleRemove = (indexToRemove) => {
    const updatedImages = imagePreviews.filter((_, index) => index !== indexToRemove);
    setImagePreviews(updatedImages);
  };

  return (
    <div style={{ padding: "2rem", color: "white", textAlign: "center" }}>
      <h2>Moodboard</h2>
      <p>Use this space to collect visual ideas for your shoot.</p>

{/*External Resources*/} 
      <a
        href="https://www.pinterest.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Pinterest
      </a>
      <br />
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Browse Instagram
      </a>

      <h3 style={{ marginTop: "2rem" }}>Uploaded Inspirations:</h3>

      <div className="moodboard-grid">
        {imagePreviews.map((src, index) => (
          <div key={index} className="image-wrapper">
            <img src={src} alt={`Moodboard ${index + 1}`} />
            <Button onClick={() => handleRemove(index)}>Remove</Button>
          </div>
        ))}
      </div>

      {/* Hidden file input */}

      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        ref={fileInputRef}
        style={{ display: "none" }}
      />

      {/* Add Button */}

      <Button onClick={handleAddClick}>Add</Button>

      {/* Upload message */}
      {updateMessage && (
        <p style={{ fontWeight: "bold", marginTop: "1rem" }}>{updateMessage}</p>
      )}
    </div>
  );
}

export default Moodboard;
