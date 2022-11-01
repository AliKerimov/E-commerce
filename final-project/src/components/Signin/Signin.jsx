import React from 'react'
import Form from './Form'
import img from '../../images/Group 5552.svg'
import { Link } from "react-router-dom";
function Signin() {
  return (
    <div className='signin'>
        
        <Form/>
        <div>
            <div className='signin-img'><img src={img} alt="" /></div>
            <div className='signin-log'><p>Artıq hesabınız var?  <Link to='/login'>Daxil olun </Link></p></div>
        </div>
    </div>
  )
}

export default Signin