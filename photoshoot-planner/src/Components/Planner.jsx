//Planner

 import React, { useState } from "react";


function Planner() {
  const [updateMessage, setUpdateMessage] = useState("");

  const handleUpdateClick = () => {

    setUpdateMessage("Updated!");
      setTimeout(() => setUpdateMessage(""), 3000);
  };
     


  return (
    <section id="planner">
      <h2>Photo Shoot Planner</h2>

      <form>

        <label>
          Photographer Name:<br />
          <input type="text" />
        </label>

        <br/>

        <label>
          Assistant Name:<br />
          <input type="text" />
        </label>

        <br/>

        <label>
          Model(s):<br />
          <input type="text" />
        </label>

        <br />


        <label>
          Hair & Makeup Artist:<br />
          <input type="text" />
        </label>

        <br />

        <label>
          Stylist / Creative Director:<br />
          <input type="text" />
        </label>

        <br/>

        <label>
          Designer / Brand:<br />
          <input type="text" />
        </label>
        <br/>

        <label>
          Shoot Date & Time:<br />
          <input type="text" />
        </label>

        <br />

        <label>
          Location:<br />
          <input type="text"/>
        </label>
        <br />

        <label>
          Genre:<br />
          <input type="text" />
        </label>

        <br/>

        <label>
          Shoot Theme / Description:<br/>
          <textarea></textarea>
        </label>

        <br/>

        <label>
          Client:<br/>
          <input type="text"/>
        </label>


        <br/>

<button type="button" onClick={handleUpdateClick}>
   Update
  </button>

{updateMessage && (
  <p style={{ fontWeight: "bold" }}>
    {updateMessage}

  </p>

)}

 </form>

    </section>

  );

}

export default Planner;

