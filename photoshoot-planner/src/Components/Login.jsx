// login

import React, { useState } from "react";

import Button from "./Button";

function Login() {

  // State to manage form fields

  const [username, setUsername] = useState("") ;
  const [password, setPassword] = useState("");

  // State to manage feedback message

  const [message, setMessage] = useState("");

  // This function is triggered when the form is submitted

  const handleLogin = (e) => {
    e.preventDefault();

    // check if both fields are filled

    if (!username || !password) {

      setMessage("Please enter both username and password.");
      return;

    }

    // Display loading message after validation passes

    setMessage("Logging in, one moment...");
  };

  return (

    <div className="login-form">
      <h2>Log In</h2>

      {/* Form to collect login info */}

      <form onSubmit={handleLogin}>
        
        {/* Username input */}

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />

        {/* Password input */}

        <label htmlFor="password">Password:</label>

        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}

        />

        {/* Submit button that uses reusable component */}

        <Button type="submit">Log In</Button>

      </form>

      {/* Feedback message displayed to the user */}
      {message && <p>{message}</p>}

    </div>

  );
  
}

export default Login;
