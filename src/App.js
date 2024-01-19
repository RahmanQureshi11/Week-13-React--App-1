// import logo from './logo.svg';
import React from 'react';

import './App.css';
import LoginForm from './LoginForm';
import Navigation from './Navigation';
/*The app component is a container with div with the class name App 
and it renders two child compoenets. */
// The navigation will be displayed at the top , and loginform will be displayed under it.
function App() {
  return (
    <div className="App">
      <Navigation/>
      <LoginForm/>
    </div>
  );
}

export default App; // This for default export fromn the module. 
