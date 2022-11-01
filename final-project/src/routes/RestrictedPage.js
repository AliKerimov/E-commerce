import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from '../context/authProvider';
const RestrictedPage = ({roles}) => {
    const auth =useAuth();
  // console.log(auth);
    return (
    <>
    {roles.includes(auth?.auth?.profile?.role) ? <Outlet/> : auth.auth.auth ? <Navigate to='/unauthorize'/> : <Navigate to='/login'/>}
    </>
  )
  // return (
  //   <>
  //   {auth!=='' ? <Outlet/> : <Navigate to='/login'/>}
  //   </>
  // )
}

export default RestrictedPage;