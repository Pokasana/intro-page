import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './app/NavBar.jsx'
import Intro from './features/intro/Intro.jsx'
import Info from './features/cv/Cv.jsx'
import Projects from './features/projects/Projects.jsx'
import Blog from './features/writing/Blog.jsx'

function App() {

  return (
    <>

      <NavBar />

      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/cv" element={<Info />} />
        <Route exact path="/writing" element={<Blog />} />
      </Routes>

    </>
  )
}

export default App
