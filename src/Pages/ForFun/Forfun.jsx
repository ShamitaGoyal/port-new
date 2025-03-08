import React from 'react'
import '../ForFun/forfun.css'
import projects from './forfunData'; 


function Forfun() {
  return (
    <div className='forfun-section'>

      <div className="forfun-title">
        <h1>For Fun</h1>
        <h5>To show some things I am passionate about!</h5>
      </div>

      <div className="art-title">
        <h5>Selected artworks: </h5>
      </div>

      <div className="card-container">
              {projects.map((project, index) => (
              <div key={index} className="col-md-4">
                  <div className="card">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <img src={project.image} className="card-img" alt={project.title} />
                  </a>
                  <div className="card-text">
                      <h5 className="card-name-small">{project.role}</h5>
                      {/* <p className="card-name-small">{project.tools}</p> */}
                      <p className="card-name-large">{project.title}</p>
                      <h5 className="card-name-small-para">{project.description}</h5>
                  </div>
                  </div>
              </div>
              ))}
      </div>




      
    </div>
  )
}

export default Forfun


//my art
// the video marketing thing i did
// cooking
//taking digital camera pics