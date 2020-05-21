import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
