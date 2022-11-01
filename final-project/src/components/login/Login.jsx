import React from 'react'
import Form from './Form'
import img from '../../images/Group 5552.svg'
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className='login'>
        <Form/>
        <div>
            <div className='signin-img'><img src={img} alt="" /></div>
            <div className='signin-log'><p>Hesabınız yoxdur?   <Link to='/signin'>Qeydiyyatdan keçin </Link></p></div>
        </div>
    </div>
  )
}

export default Login