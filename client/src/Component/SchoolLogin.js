import React, { useContext, useState } from 'react'
import { BASE_URL } from '../helper'
import '../Styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import alertContext from '../Context/alertContext'

const SchoolLogin = () => {
  const navigate = useNavigate()
  const { showAlert } = useContext(alertContext)

  const [credential, setCredential] = useState({ email: '', password: '' })
  const { email, password } = credential

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value })
}
  const handleLogin = async (e) => {
    e.preventDefault()
    const response = await fetch(`${BASE_URL}/schoola/schoollogin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }) // body data type must match "Content-Type" header
    });
    const json = await response.json()
    if (json.success) {
        navigate('/dataentry')
        localStorage.setItem('token',json.authtoken)
        showAlert("success","Logged In successfully")
    }
    else {
        showAlert("error","Invalid credentials")
    }


}
  return (
    <div className='login-form-con' >
      <form className='login-form'  onSubmit={handleLogin}>
        <h3 className='sub-heading text-center'>Login to Your School Account</h3>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input className='login-form-input-fields' id='email' onChange={onChange} value={email} name='email' type='email'  placeholder='Email' />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input className='login-form-input-fields' id='password' onChange={onChange} value={password} name='password' type="password" placeholder='Password' />
        </div>
        <div className='form-group'>
            <a href="#">Forgot Your Password ?</a>
        </div>
        <button className='login-button' type='submit'>Login</button>
        <div className='register-div'>
            <span className=''>Don't Have Account?</span>
            <Link  to={'/schoolregister'}>Register Now</Link>
        </div>
      </form>
    </div>
  )
}

export default SchoolLogin
