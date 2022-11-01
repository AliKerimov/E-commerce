import React,{useEffect} from 'react'
import {useNavigate,Outlet} from 'react-router-dom'
import { useAuth } from '../context/authProvider';
const RestrictLogin = () => {
    const user=useAuth();
    const navigate=useNavigate()
    useEffect(()=>{
        if(user.auth){
            navigate('/my-profile',{replace:true})
        }
    },[user.auth,navigate])
  return (
    <>
    <Outlet/>
    </>
  )
}

export default RestrictLogin