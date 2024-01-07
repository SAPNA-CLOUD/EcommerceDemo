import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='login-signup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type='name' placeholder='Your Name'/>
          <input type='email' placeholder='Email Address'/>
          <input type='password' placeholder='Password'/>
          <button className='loginsignup-button'>Continue</button>
        </div>
    
    <p className='loginsignup-login'>Already have an acount?
    <span> Login here</span></p>
  
    <div className='loginsignup-agree'>
    <input type='checkbox' name=' ' id=''></input>
    <p>By continuing, I agree to the terms of use & privacy policy</p>
    </div>
      </div>
    </div>
  )
}

export default LoginSignup