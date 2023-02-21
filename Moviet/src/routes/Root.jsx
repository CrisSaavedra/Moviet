import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import { Footer } from '../component/footer/Footer';
import { NavBar } from '../component/navbar/NavBar';



export const Root = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer/>
     
    </>
  )
}
