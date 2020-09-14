import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="header">
      <Link to="/use-state">UseState</Link>
    </header>
  );
}

export default Header;
