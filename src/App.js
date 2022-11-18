import { Routes, Route, HashRouter } from 'react-router-dom'
import Header from './components/menu/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/items/Projects'
import './css/reset.css'
import './App.css';
import './css/style.css'
import React from 'react'


function App() {
  return (
      <HashRouter>
        <div className="App">
          <Header />
        </div>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='portfolio' element={<Projects />} />
        </Routes>
      </HashRouter>
  )
}

export default App;
