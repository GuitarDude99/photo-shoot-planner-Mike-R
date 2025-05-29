//Moodboard

import React, { useState, useRef } from "react";

function Moodboard() {

  const [imagePreview, setImagePreview] = useState("/samplejac.jpg");


   const [updateMessage, setUpdateMessage] = useState("");

  const fileInputRef = useRef(null); //  Ref for hidden file input

  const handleAddClick = () => {
    fileInputRef.current.click(); // Trigger file picker 
  };

  const handleImageChange = (event) => {

    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {

        setImagePreview(reader.result);
        setUpdateMessage("Added!");
        setTimeout(() => setUpdateMessage(""), 3000);

      };

        reader.readAsDataURL(file);
    }

  };

  return (

    <div style={{ padding: "2rem", color: "white" }}>

      <h2>Moodboard / Inspiration</h2>

      <p>Use this space to collect visual ideas for your shoot.</p>

      <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
        Visit Pinterest
      </a>

      <br/>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        Browse Instagram
      </a>

      <h3 style={{ marginTop: "2rem" }}>Uploaded Inspiration:</h3>

      <div>
        <p>Example Image</p>
        <p>Model: Jacyln Tripp</p>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInputRef}
          style={{ display: "none" }}
        />

        
        <button type="button" onClick={handleAddClick}>
          Add
        </button>

       
        {updateMessage && (

          <p style={{ fontWeight: "bold", marginTop: "1rem" }}>
            {updateMessage}
          </p>
        )}

      
        {imagePreview && (
          
          <div style={{ marginTop: "1rem" }}>
            <img
              src={imagePreview}
              alt="Preview"
              style={{ maxWidth: "300px", border: "1px solid #ccc" }}
            />

          </div>
        )}

      </div>

    </div>
  );

}

export default Moodboard;
