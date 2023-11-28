import React from 'react';
import { Link } from 'react-router-dom'; // using React Router

const Navbar = () => {
  return (
    <nav>
      <img src='images/logo.jpeg' alt='logo'/>
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
        <img src='images/profile.png' alt='owner profile'/>
    </nav>
  );
};

export default Navbar;
