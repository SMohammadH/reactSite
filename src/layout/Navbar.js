import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="inner-nav">
        <div className="left-side">
          <h1>
            <Link to="/">
              <span className="icon-text">Mohammad Hashemi</span>
            </Link>
          </h1>
        </div>
        <div className="right-side">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
