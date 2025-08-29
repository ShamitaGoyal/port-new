import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../TopNavBar/topnavbar.css';
import resume from '../../assets/imgs/shamita-swe-resume.pdf'

function TopNavbar() {
  return (
    <>
    <header>
      <a href="/" className="topbar-title">Shamita Goyal</a>
      <ul class="topbar-links">
        <li><Link to="/#projects">WORK</Link></li>
        {/* <li><a href="https://drive.google.com/file/d/1DK4iLaLvz47Ff2bADmGqbyBJegi0MPIN/view?usp=sharing" target="_blank">Resume</a></li> */}
        <li><a href="/about">About</a></li>
        <li><a href={resume} target="_blank">Resume</a></li>
      </ul>
    </header>
    </>

    // <nav className='top-navbar'>
    //   <li><a href="/"><div className="logo">SHAMITA GOYAL</div></a></li>
    //   <ul>
    //     <li><Link to="/#projects">WORK</Link></li>
    //     {/* <li><a href="/forfun">FOR FUN</a></li> */}
    //     <li><a href="/about">ABOUT</a></li>
    //     <li><a href={resume} target="_blank" rel="noopener noreferrer">RESUME</a></li>
    //   </ul>
    // </nav>
  );
}

export default TopNavbar;
