// import { useState } from 'react'
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Layout from './layout'
import Header from './components/header'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path='/' element={<Layout />} ></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
      <Layout />

    </>
  )
}

export default App
