import { useState } from 'react'

import './App.css'
import Login from "./Components/Login";
import Signup from "./Components/Signup";



//App

import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Components/Home";
import Planner from "./Components/Planner";
import Moodboard from "./Components/Moodboard";
import Resources from "./Components/Resources";

function App() {

  return (
<Router>
  <div>
    <header>

      <h1>Photoshoot Plannings App</h1>
      <nav>

        <ul>

          <li><Link to="/">Home</Link></li>
          <li><Link to="/planner">Planner</Link></li>
          <li><Link to="/moodboard">Moodboard</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/login">Log In</Link></li> 
          <li><Link to="/signup">Sign Up</Link></li>

        </ul>

      </nav>




    </header>

    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/moodboard" element={<Moodboard />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/login" element={<Login />}/> 
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </main>
  </div>
</Router>


  );

}

export default App;



