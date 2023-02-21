import React from 'react'
import ReactDOM from 'react-dom/client';
// import {
//   BrowserRouter,
// } from "react-router-dom";

import {
  createBrowserRouter,
  Link,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";


import './styles/styles.css';
import './styles/normalize.css'

import { Favorites, Home, Root } from './routes';
import ErrorPage from './component/errorpage/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      }
      
    ],

  },

  {
    path: "*",
    element: <Navigate to="/home" replace={true} />,

  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

)