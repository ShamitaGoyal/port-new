import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './projects.css';
import projects from './projectsData'; 



const Projects = () => {
  return (
    <div id='projects'>
      <div className="project-section">
            <div class="project-header">
              <h1>Projects</h1>
              <h3>View some of my works:</h3>
            </div>
            <div className="card-container">
              {projects.map((project, index) => (
              <div key={index} className="col-md-4">
                  <div className="card">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <img src={project.image} className="card-img" alt={project.title} />
                  </a>
                  <div className="card-text">
                      {/* <h5 className="card-name-small">{project.role}</h5> */}
                      {/* <p className="card-name-small">{project.tools}</p> */}
                      <p className="card-name-large">{project.title}</p>
                      <p className="card-name-tools">{project.tools}</p>
                      <h5 className="card-name-small-para">{project.description}</h5>
                  </div>
                  </div>
              </div>
              ))}
            </div>
      </div>
    </div>
  );
};

export default Projects;