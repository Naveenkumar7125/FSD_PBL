import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css'
function Header() {
  return (
    <header>
      <nav className='d-flex align-items-center justify-content-between'>
        <div className="logo">Polling System</div>
        <ul className='header nav'>
          <li className='nav-item'><Link className='nav-link' to="/">Home</Link></li>
          <li className='nav-item'><Link className='nav-link' to="/about">About</Link></li>
          <li className='nav-item'><Link className='nav-link' to="/contact">Contact</Link></li>
          <li className='nav-item'><Link className='nav-link' to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;