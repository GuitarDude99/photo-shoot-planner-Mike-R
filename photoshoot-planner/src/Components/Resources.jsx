//Resources

import React from "react";

function Resources() {

  return (

    <section id="resources">


      <h2>Helpful Resources for Shoots and Planning</h2>

      <p>Need a hand planning your shoot? We've got you covered!:</p>
      

      {/* List of clickable links to external planning tools */}
      <ul>

        <li>
          <a href="https://www.canva.com/" target="_blank" rel="noopener noreferrer">
            Canva for Moodboards
          </a>

        </li>

        <li>
          <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">
            Free Stock Photos Unsplash
          </a>
        </li>
        <li>

          <a href="https://www.studiobinder.com/blog/" target="_blank" rel="noopener noreferrer">
            StudioBinder Articles
          </a>
        </li>

      </ul>

    </section>

  );

}
export default Resources;
