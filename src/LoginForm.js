// LoginForm.js
import React from 'react';
import './LoginForm.css'; // This importing css file to java script file. 
//

// This is the Login form which has input feild for Username and Paaword plus Submit Button. 
const LoginForm = () => {
  return (
    <div className="login-form">
      <h3 className="login-heading">Log In</h3>
      <div>
        <label htmlFor="username">UserName:</label>
        <input type="text"id="username" placeholder='username' />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password"id="password"placeholder='password' />
      </div>
        <button type='submit'>Submit</button>  
    </div>
  );
};

export default LoginForm; // This is exporting the loginform component of the module . 