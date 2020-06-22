import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const darkModeChange = () => setDarkMode(pre => !pre)
  return (
    <div className="App">
      <Home darkMode={darkMode} onDarkChange={darkModeChange}/>
      <About darkMode={darkMode}/>
      <Skills darkMode={darkMode}/>
      <Projects darkMode={darkMode}/>
      <Contact darkMode={darkMode}/>
    </div>
  );
}

export default App;
