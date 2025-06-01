//Planner

import React, { useState } from "react";
import Button from "./Button";

function Planner() {
  const [updateMessage, setUpdateMessage] = useState("");

  // Handles what happens when "Update" is clicked – shows a message for 3 seconds.

  const handleUpdateClick = () => {
    setUpdateMessage("Updated!");
    setTimeout(() => setUpdateMessage(""), 3000);
  };

  return (
    <section id="planner">
      <h2>Photo Shoot Planner</h2>

      <form>
        {/* Reworked layout stacks labels above inputs to work better on mobile. */}

        <div className="planner-row">
          <label>Photographer Name:</label>
          <input type="text" />

        </div>

        <div className="planner-row">
          <label>Assistant Name:</label>
          <input type="text" />

        </div>

        <div className="planner-row">
          <label>Model(s):</label>
          <input type="text" />

        </div>

        <div className="planner-row">
          <label>Hair & Makeup Artist:</label>
          <input type="text" />

        </div>

        <div className="planner-row">
          <label>Stylist / Creative Director:</label>
          <input type="text" />
          
        </div>

        <div className="planner-row">
          <label>Designer / Brand:</label>
          <input type="text" />

        </div>

        <div className="planner-row">
          <label>Shoot Date & Time:</label>
          <input type="text" />

        </div>

        <div className="planner-row">
          <label>Location:</label>
          <input type="text" />

        </div>

        <div className="planner-row">
          <label>Genre:</label>
          <input type="text" />

        </div>

        <div className="planner-row">
          <label>Shoot Theme / Description:</label>
          <textarea></textarea>

        </div>

        <div className="planner-row">
          <label>Client:</label>
          <input type="text" />

        </div>

        <Button onClick={handleUpdateClick}>Update</Button>

        {updateMessage && (
          <p style={{ fontWeight: "bold" }}>{updateMessage}</p>

        )
        }

      </form>
    </section>

  );

}

export default Planner;
