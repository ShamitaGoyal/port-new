import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../TopNavBar/topnavbar.css';
import resume from '../../assets/imgs/swe-24.pdf'

function TopNavbar() {
  return (
    <nav className='top-navbar'>
      <li><a href="/"><div className="logo">SHAMITA GOYAL</div></a></li>
      <ul>
        <li><Link to="/#projects">WORK</Link></li>
        {/* <li><a href="/forfun">FOR FUN</a></li> */}
        <li><a href="/about">ABOUT</a></li>
        <li><a href={resume} target="_blank" rel="noopener noreferrer">RESUME</a></li>
      </ul>
    </nav>
  );
}

export default TopNavbar;
