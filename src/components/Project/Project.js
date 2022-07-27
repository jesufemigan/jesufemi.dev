import { ProjectStyle } from "./Project.style";

import { NavHashLink } from "react-router-hash-link";

import play from '../../assets/live.svg';
import code from '../../assets/code.svg';

import { projects } from "../../data";

const Project = () => {
  return (
    <ProjectStyle id="projects">
      <h1>Projects</h1>
      <div className="project-container">
        {projects.slice(0,5).map(project => (
          <div className="each-project" key={project.id}>
          <div className="screenshot">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="details">
            <h1>{project.title}</h1>
            <p className="description">{project.details}</p>
            <p className="tools"><span>Technologies Used: </span>{project.tools.join(', ')}</p>
            <div className="action">
              <a href={project.website} className="live" target="_blank" rel="noopener noreferrer">
                <img src={play} alt="" />
                <p>Live</p>
              </a>
              <a href={project.github} className="code" target="_blank" rel="noopener noreferrer">
                <img src={code} alt="" />
                <p>Code</p>
              </a>
            </div>
          </div>
        </div>
        ))}    
      </div>
      <div className="button"><button><NavHashLink to="/projects" style={{textDecoration: "none", color: "white"}}>View All</NavHashLink></button></div>
    </ProjectStyle>
  )
}

export default Project