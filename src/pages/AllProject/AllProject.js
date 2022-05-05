import { AllProjectStyle } from "./AllProject.style";
import { ProjectStyle } from "../../components/Project/Project.style";
import { projects } from "../../data";

import { Link } from "react-router-dom";

import play from '../../assets/live.svg';
import code from '../../assets/code.svg';

import GoToTop from "./GoToTop";

const AllProject = () => {
  return (
    <AllProjectStyle>
      <header>
        <Link to='/' style={{ marginRight: "auto" }}>
          <div className='home'></div>
        </Link>
        <h1>Projects</h1>
      </header>
      <ProjectStyle>
        <div className="project-container">
          {projects.map(project => (
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
      </ProjectStyle>
      <GoToTop />
    </AllProjectStyle>
  )
}

export default AllProject