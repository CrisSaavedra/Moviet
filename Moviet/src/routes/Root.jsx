import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from "react-router-dom";
import { reLoadUser } from '../api/reLoadUser';
import { Footer } from '../component/footer/Footer';
import { NavBar } from '../component/navbar/NavBar';



export const Root = () => {

  

  const [user, setUser] = useState({
    login: false,
    username: '',
    uid: '',
    idMovies: []
  });


  // useEffect(() => {
  //   if(localStorage.uid){
  //     reLoadUser(setUser, localStorage.uid);
  //   }
  // }, []);

  return (
    <>
      <NavBar setUser={setUser} user={user}/>
      <Outlet context={[user,setUser]} />
      <Footer />

    </>
  )
}
