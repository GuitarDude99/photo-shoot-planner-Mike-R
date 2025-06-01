// Reusable Button Component

import React from "react";

function Button({ onClick, children, type = "button", style = {} }) {

  return (

    <button
      type={type}
      onClick={onClick}
      style={{
        backgroundColor: "#add8f7",
        padding: "0.5rem 1.5rem",
        border: "none",
        marginTop: "0.5rem",
        fontStyle: "italic",
        cursor: "pointer",
        ...style,

      }
     }
    >
      {children}
    </button>
  );

}

export default Button;
