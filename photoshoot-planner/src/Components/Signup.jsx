//Signup.jsx

import React, { useState } from "react";

function Signup() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function handleSubmit(e) {

    e.preventDefault();
    console.log("Signing up with:", name, email, password);
    // Future: send this data to a backend ?s
  }

  return (

    <section id="signup">

      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <label>

          Name:<br/>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 

          />
          
        </label>

        <br/>

        <label>
          Email:<br/>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 

          />
        </label>

        <br/>


        <label>
          Password:<br/>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />

        </label>

        <br/><br/>

        <button type="submit">Create Account</button>
      </form>

        </section>

  );


}

export default Signup;
