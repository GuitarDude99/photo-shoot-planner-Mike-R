//Home

//  This is the homepage that also acts as an About page

import React from "react";

function Home() {

  return (

    // Main section for the homepage

    <section id="home">

      {/* Welcome message and intro */}

      <h2>Hello!</h2>
      <p><strong>Welcome to your photoshoot planning app.</strong></p>
      <p>Use the menu above to get started on your project.</p>
      <p>Please Note: To save your progress, you must be logged in to an account.</p>

      {/* About and instructions */}

      <h2>About/How to Use This App</h2>
      <p>This app is designed to help photographers in the planning of photoshoots.</p>

      <p>
       You can fill out a form with your shoot information for easy reference,
        add inspiration to moodboards.
</p>

<p>
  Or browse our recommended resources to help you in the planning process.
</p>

    </section>
  );

}

export default Home;

