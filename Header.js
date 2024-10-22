import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Header({ themeColor }) {
  return (
    <header className="header" style={{ backgroundColor: themeColor }}>
      <h1>Welcome to ABC College!!</h1>
      <nav className="nav">
        <Link to="/about">About</Link> | 
        <Link to="/courses">Courses</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
