import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from './Home';


export const Root = () => {
  return (
    <>

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<Navigate to="/home" />} />
      </Routes>

        {/* //footer */}
    </>
  )
}
