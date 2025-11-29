import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './projects.css';
import projects from './projectsData'; 
import HoverEffect from '../../Components/HoverEffect';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = sectionRef.current.querySelectorAll('.card');
      
      // Set initial state
      gsap.set(cards, {
        opacity: 0,
        y: 50,
      });

      ScrollTrigger.batch(cards, {
        start: "top 90%",
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 1,
            ease: "expo.out",
          }),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id='projects' ref={sectionRef}>
      {/* Attach HoverEffect globally */}
      <HoverEffect />  
      
      <div className="project-section">
        <div className="project-header">
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
                  <p className="card-name-large">{project.title} | <span className="card-name-role">{project.role}</span></p>                
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
