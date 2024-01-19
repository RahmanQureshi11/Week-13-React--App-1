// Navigation.js
import React from 'react';
import './Navigation.css'; //  This importing css file to java script file. 
// This is for the navigation Bar 
const Navigation = () => {
  return (
    <nav className="navbar">
      <a href="#">Home</a>
      <a href="#">Contact</a>
      <a href="#">AboutUs</a>
    </nav>
  );
};

export default Navigation;