import React from 'react'
import Bot from './ChatBot'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home'; 
import Products from './Products.js';
import About from './About';
import Contact from './Contact';
import LocationMap from './LocationMap.js';

const App = () => {
  return (
  <div>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    <LocationMap />
    <Bot />
  </div>
  )
}

export default App