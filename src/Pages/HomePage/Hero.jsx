import React from 'react'
import './hero.css';
import port from './../../assets/imgs/change2.webp'
import smiski1 from './../../assets/imgs/smiski1.webp'
import smiski2 from './../../assets/imgs/smiski2.webp'
import disk from './../../assets/imgs/disk.webp'
import guppy from './../../assets/imgs/guppy.webp'
import threelines from './../../assets/imgs/threelines.svg'
import vid from './../../assets/imgs/vid1.mp4'
import './heroanimations.css'



function Hero() {
  return (
    // <div className='hero-section'>
      
    //   <section className='img-part'>
    //     <Vid></Vid>
    //     <Rotating></Rotating>
    //     <Smiski></Smiski>
    //     <Guppy></Guppy>
    //     <div className="img-section">
    //       <div className="img-1">
    //         <img className='cover1' src={cover} alt="Cover image" />
    //       </div>
    //     </div>
    //   </section>

    //   <div className="header-section">
    //     <h2>product designer + web developer </h2>
    //   </div>
    // </div>


  <section className='main-hero'>
    <div class="main-wrapper">
        <img className="port-bg" src={port} alt=""/>
        <img className="smiski1-img" src={smiski1} alt=""/>
        <img className="smiski2-img" src={smiski2} alt=""/>
        <img className="vinyl-img" src={disk} alt=""/>
        <img className="gup-img" src={guppy} alt=""/>
        <img className="threelines-img" src={threelines} alt=""/>
        <video className='video1' src={vid} autoPlay loop muted></video>
    </div>
    <h3 className='text-title'>Product Designer + Web Develepor</h3>

</section>
  )
}

export default Hero;

