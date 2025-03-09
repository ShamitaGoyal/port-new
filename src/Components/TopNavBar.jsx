import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './topnavbar.css';

function TopNavbar() {
  return (
    <nav className='top-navbar'>
      <div className="logo">SHAMITA GOYAL</div>
      <ul>
        <li><Link to="/#projects">WORK</Link></li>
        {/* <li><a href="/forfun">FOR FUN</a></li> */}
        <li><a href="/about">ABOUT</a></li>
        <li><a href="https://drive.google.com/file/d/1pAtWBGdDVD9gJ6dE0I_zvN1ykpRjjTGq/view?usp=sharing" target="_blank" rel="noopener noreferrer">RESUME</a></li>
      </ul>
    </nav>
  );
}

export default TopNavbar;
