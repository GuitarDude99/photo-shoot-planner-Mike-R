//Signup.jsx

import React, { useState } from 'react';
import Button from './Button';

function SignUp() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Check if the password includes at least one number

  function containsNumber(password) {
    for (let i = 0; i < password.length; i++) {
      if (!isNaN(password[i]) && password[i] !== ' ') {
        return true;
      }
      
    }
    return false;

   }


  // Handle form submission

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check that both fields are filled

    if (!username || !password) {
      setMessage('Please fill in all fields.');
      return;

    }

    // Check that password is strong enough.

    if (password.length < 6 || !containsNumber(password)) {
      setMessage('Password must be at least 6 characters and include a number.');
      return;
    }

    // If everything is valid

    setMessage('Creating account, standby...');

    // This is where you would normally send data to your server

  };

  return (

    <div className="form-container">
      <h2>Create an Account</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />


        </label>

        <br/>

        <label>
          Password:
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 

          />

        </label>

        <br />

        <Button type="submit">Create Account</Button>
      </form>

      {message && <p>{message}</p>}

    </div>
  );

}

export default SignUp;

