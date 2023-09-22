import React, { useContext, useState } from 'react'
import '../Styles/Login.css'
import { useNavigate } from 'react-router-dom'

import alertContext from '../Context/alertContext'
const AdminLogin = () => {
    const {showAlert}=useContext(alertContext)
    const navigate=useNavigate()
    const [credentials, setCredentials] = useState({
        username:'',password:''
    })

    const handleOnChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()

        if(credentials.username=="infinity" && credentials.password=="00000000")
        {
            showAlert("success","Logged In Successfully")
            navigate('/admindashboard')
        }
        else(
            showAlert("error","Username or Password wrong")
        )
        console.log(credentials)
    }
  return (
    <div className='login-form-con' >
      <form className='login-form'>
        <h3 className='sub-heading text-center'>Admin Login</h3>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input className='login-form-input-fields' name='username' value={credentials.username} onChange={handleOnChange} id='username'   placeholder='Username' />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input className='login-form-input-fields' name='password' value={credentials.password} onChange={handleOnChange} id='password'  type="password" placeholder='Password' />
        </div>
        <div className='form-group'>
            <a href="#">Forgot Your Password ?</a>
        </div>
        <button className='login-button' onClick={handleSubmit} type='submit'>Login</button>
      </form>
    </div>
  )
}

export default AdminLogin
