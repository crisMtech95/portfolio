import './App.css';
import React, { useState } from 'react'
// import { Switch, Route } from 'react-router-dom'
import Background from './components/Background';
import Navbar from './components/NavBar';
import Projects from './components/Projects';
import Footer from './components/Footer'
import Skills from './components/Skills';
import Contact from './components/Contact';
import SideBar from './components/SideBar'

function App() {
  let [showSideBar, setShowSideBar] = useState(false)


  return (
    <div className="App">
        <Navbar setShowSideBar={setShowSideBar} showSideBar={showSideBar}/>
        <Background/>
        <Skills/>
        <Projects/>
        <Contact/>
        {showSideBar &&
          <SideBar setShowSideBar={setShowSideBar}/>
        }
        <Footer/>
    </div>
  );
}

export default App;
