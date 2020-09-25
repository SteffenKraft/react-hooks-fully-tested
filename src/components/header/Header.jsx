import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="header">
      <Link to="/use-state/counter">useState Counter</Link>
      <span className="divider">|</span>
      <Link to="/use-state/input"> useState Input</Link>
      <span className="divider">|</span>
      <Link to="/use-ref/input"> useRef Input</Link>
      <span className="divider">|</span>
      <Link to="/use-ref/prev-input"> useRef PrevState</Link>
      <span className="divider">|</span>
      <Link to="/use-effect"> useEffect</Link>
      <span className="divider">|</span>
      <Link to="/use-custom-hook-1"> useLocalStorage</Link>
      <span className="divider">|</span>
      <Link to="/use-custom-hook-2"> useLogger</Link>
    </header>
  );
}

export default Header;
