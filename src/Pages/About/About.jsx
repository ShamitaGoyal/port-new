import React from 'react'
import '../About/about.css'
import sampleVideo from '../../assets/imgs/catwalk.mp4'


function About() {
  return (
    <div className='about-section'>
      <div className="title-section">
        <h1>Hi! I'm Shamita <i class="ri-sparkling-fill"></i></h1>
        <div className="para-text">
          <p>I'm a junior and a transfer student at the University of California, San Diego, majoring in Cognitive Science with a specialization in Human-Computer Interaction Design.
          Originally from San Jose, California, I love exploring new environments that inspire my curiosity and shape my approach to empathetic, creative design.</p>

          <p>Since I was little, I've been passionate about exploring hobbies that spark my creativity—whether it's video editing, art, 
            coding, or design. At the heart of it all is my love for creating.</p>

          <p>When I'm not developing, you'll find me cooking, drawing, or listening to music.
             I also enjoy capturing moments with my digital camera and creating nostalgic edits of my friends.
          </p>

        </div>

      </div>

      <div className="video-section">
        <video className='video2' src={sampleVideo} autoPlay loop muted/>
      </div>



    </div>
  )
}

export default About