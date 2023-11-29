import React from 'react';
import { Link } from 'react-router-dom'; // using React Router

const Navbar = () => {
  return (
    <nav>
      <img src='images/logo.jpeg' alt='logo'/>
      <img src='images/profile.png' alt='owner'/>
      <h1>शंकर ऑप्टिकल वर्क्स</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
