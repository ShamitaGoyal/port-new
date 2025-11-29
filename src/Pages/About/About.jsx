import React from 'react'
import '../About/about.css'
// import sampleVideo from '../../assets/About/catwalk.mp4'
import selfie from '../../assets/About/ab.png'
import content from '../../assets/About/ab2.png'
import cafeVid from '../../assets/About/cafe.mp4'
import matcha from '../../assets/About/matcha.png'
import mngo from '../../assets/About/mngo.png'


function About() {
  return (
    <section className='profile-section'>

      <div className="about-section">
        <div className="title-section">
          <h1>Hi! I'm Shamita <i class="ri-sparkling-fill"></i></h1>
          <div className="para-text">
            <p>I'm an incoming senior at the University of California, San Diego, majoring in Cognitive Science with a specialization in Human-Computer Interaction Design.
            Originally from San Jose, California, I love exploring new environments that inspire my curiosity and shape my approach to empathetic, creative design.</p>

            <p>
              Ever since I was little, I've been drawn to creative 
              outlets—video editing, art, coding, and design—all 
              fueled by a love for building and bringing ideas to 
              life. Today, I channel that same passion into web 
              development and UI design through hands-on work 
              in several clubs that inspire me. Being part of <a href='https://designatucsd.com/' target='_blank'>Design Co</a>, 
              the  <a href='https://www.ds3ucsd.com/' target='_blank'>Data Science Student Society</a>, and <a href='https://acmucsd.com/' target='_blank'>ACM</a> at UC San Diego have shaped my skills
               as a developer, strengthened my eye for design, and taught 
               me how to create digital experiences that make an impact.</p>

            <p>When I'm not developing, you'll find me cooking, drawing, or listening to music.
              I also enjoy capturing moments with my digital camera and creating nostalgic edits of my friends.
            </p>
          </div>
        </div>

        <div className="video-section">
          {/* <video className='video2' src={sampleVideo} autoPlay loop muted/> */}
          <img className='video2' src={selfie} alt="" />
        </div>
      </div>

      <h2 className='about2-title'>To me, development is all about community—sharing ideas, solving problems, and creating meaningful experiences <i class="ri-chat-heart-line"></i></h2>
      <p className='about2-subtitle'>My community is made up of people I cherish and learn alongside, as well as shared interests that inspire us to grow and create together. </p>
      <div className="content-section">
        <img className='contentAbout' src={content} alt="" />
        <video className='cafeVideo' src={cafeVid} muted autoPlay playsInline loop></video>
        <img className='mngoImg' src={mngo} alt="" />
        <img className='matchaImg' src={matcha} alt="" />


      </div>


    </section>
  )
}

export default About