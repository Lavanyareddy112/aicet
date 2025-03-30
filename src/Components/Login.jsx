import React from 'react'
import './login.css'

function login() {
  return (
    <>
      <h1>Login Page</h1>
      <form action="login.php">
        <label htmlFor="email">Email Id: </label>
        <input type="email" id="email" name="email" required />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <br />
        <button type="submit"><a href="/">Login</a></button>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
             </form>
    </>
  )
}

export default login