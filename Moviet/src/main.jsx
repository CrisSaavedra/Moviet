import React from 'react'
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
} from "react-router-dom";

import './styles/styles.css';
import './styles/normalize.css'

import { Root } from './routes';




ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  </BrowserRouter>
)
