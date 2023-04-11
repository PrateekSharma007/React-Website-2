import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero.jsx';
function App() {
  return (
    // <Router>
    <div className="pt-20">
      {/* <Navbar /> */}
      {/* <Routes> */}
      {/* <Route path="/" element={<Home />}/> */}
      {/* <Route path="/about" element={<About />} /> */}
      {/* </Routes> */}
      <h1>heyy</h1>

      <Hero />
      {/* </Router> */}
    </div>
  )
}

export default App
