import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import { NavBar } from '../component/navbar/NavBar';



export const Root = () => {
  return (
    <>
      <NavBar />
      <Outlet />
     
    </>
  )
}
