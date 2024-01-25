import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import './reset.css';
import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';
import Messanger from './components/messanger/messanger';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <NavBar />
      <div className='page-container'>
        <Header />
        <Routes>
          <Route index Component={Messanger} />
        </Routes>
      </div>
    </React.StrictMode>
  </BrowserRouter>
)