// login

import React, { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {

    e.preventDefault();
    console.log("Logging in with:", email, password);
  
  }



  return (
    
    <section id="login">

      <h2>Log In</h2>

      <form onSubmit={handleSubmit}>

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
        <br /><br />

        <button type="submit">Log In</button>

      </form>

    </section>

  );

}


export default Login;
