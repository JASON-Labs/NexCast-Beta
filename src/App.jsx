import { useState, useEffect, useRef } from 'react';
import Navbar from './constants/navbar/Navbar';
import HomeAbout from './components/HomeAbout';
import './App.css';
import Home from './components/Home';

function App() {
 
  return (
    <>
      <div>
        {/* <h1 className="gradient-animation bg-gradient-to-r from-indigo-500 via-red-500 to-fuchsia-500 bg-clip-text text-transparent text-7xl font-roboto">
          NexCast
        </h1> */}

          <Navbar/>
          <Home />
          <HomeAbout />
      </div>
    </>
  );
};

export default App;
