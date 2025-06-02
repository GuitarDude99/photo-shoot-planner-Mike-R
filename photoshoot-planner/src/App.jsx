// App

// This is the main component that holds the structure of our entire application.

import './App.css';

// These are all the page components we'll route to

import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Planner from "./Components/Planner";
import Moodboard from "./Components/Moodboard";
import Resources from "./Components/Resources";
import Footer from "./Components/Footer";

// Import React and React Router tools for navigation

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom" ;

 function App() {

  return (
    <Router>
      <div>

        {/* Header and navigation links for the app */}

        <header>

          <h1>Photoshoot Planning App</h1>

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

        {/* Defines the routes and links them to components */}

        <main>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/moodboard" element={<Moodboard />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>

   </main>

   <Footer/>

      </div>

    </Router>
  );

}

export default App;



