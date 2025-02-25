import React from 'react'
import './hero.css';
import cover from '../../assets/imgs/cover4.png';
import Rotating from '../../Components/Rotating';

function Hero() {
  return (
    <div className='hero-section'>
      <Rotating></Rotating>
      
        <div className="img-section">
            <div className="img-1">
                <img className='cover1' src={cover} alt="Cover image" />
            </div>
        </div>
        <div className="header-section">
            <h2>product designer + web developer </h2>
            {/* <h1>Shamita Goyal</h1> */}
            {/* <h4>Passionate about the interconnections of software development, frontend development, and web development</h4>
            <button className="bt1" onClick={() => window.location.href = "#about-me-section"}>Learn More</button> */}
        </div>
    </div>
  )
}

export default Hero;
