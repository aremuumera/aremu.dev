

// import React from 'react'
import About from '../components/About';
import Contact from '../components/contact';
import Header from '../components/header';
import Home from '../components/home';
import Projects from '../components/projects';

const Layout = () => {
  return (
    <div>
    <Header />
      <Home />
      <About />
      <Projects />
      <Contact/>
    </div>
  )
}

export default Layout
