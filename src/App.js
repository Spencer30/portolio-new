import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import ProjectPage from './components/ProjectPage';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [projectPage, setProjectPage] = useState(false);
  const [sitePositionCoords, setSitePositionCoords] = useState(null);
  const [projectId, setProjectId] = useState(null)
  const closeProjectPage = () => setProjectPage(false);
  const openProjectPage = e => {
    setProjectId(e.target.id);
    console.log('clicked')
    if (!projectPage) {
      const yPosition = Number(window.pageYOffset);
      setSitePositionCoords(yPosition)
    }
    setProjectPage(true);
  }
  useEffect(() => {
    if (sitePositionCoords && !projectPage) {
      window.scrollTo(0, sitePositionCoords)
    }
  }, [projectPage, sitePositionCoords])
  const darkModeChange = () => setDarkMode(pre => !pre)
  return (
    <div className="App">
      <div style={{ display: projectPage ? 'none' : 'block' }}>
        <Home darkMode={darkMode} onDarkChange={darkModeChange} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} goToProject={openProjectPage} />
      </div>
      <div style={{ display: projectPage ? 'block' : 'none' }}>
        <ProjectPage darkMode={darkMode} closeProject={closeProjectPage} display={projectPage} projectId={projectId} goToProject={openProjectPage} />
      </div>
      <Contact darkMode={darkMode} />
    </div>
  );
}

export default App;
