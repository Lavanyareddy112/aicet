import React from 'react'
import './signup.css'

function signup() {
  return (
    <>
        <h1>Sign Up Page</h1>
        <form>
           
            <div className="body1">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            </div>
            <label htmlFor="password">Confirm Password:</label>
            <input type="password" id="password" name="password" required />
            <button type="submit"><a href="/">Sign Up</a></button>
            <p>Already have an account? <a href="/login">Login</a></p>
        
        </form>
    </>
  )
}

export default signup