import React from 'react'
import '../Styles/SchoolLogin.css'
import loginbg from '../images/login-bg.png'
const SchoolLogin = () => {
  return (
    <div className='login-form-con' >
      <form className='login-form'>
        <h3>Login to Your School Account</h3>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input className='login-form-input-fields' id='email' name='email' type="email" placeholder='Email' />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input className='login-form-input-fields' id='password' name='password' type="password" placeholder='Password' />
        </div>
        <div className='form-group'>
            <a href="#">Forgot Your Password ?</a>
        </div>
        <button className='login-button' type='submit'>Login</button>
        <div className='register-div'>
            <span>Don't Have Account?</span>
            <a href="#">Register Now</a>
        </div>
      </form>
    </div>
  )
}

export default SchoolLogin
