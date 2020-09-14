import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="header">
      <Link to="/use-state/counter">useState Counter</Link>
      <span className="divider">|</span>
      <Link to="/use-state/input"> useState Input</Link>
    </header>
  );
}

export default Header;
