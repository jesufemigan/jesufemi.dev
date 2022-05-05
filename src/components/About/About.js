import { AboutStyle } from "./About.style";
import { mySkills } from "./SkillData";

import aboutMe from '../../assets/aboutme.svg';
import resume from '../../assets/Jesufemi_Resume.pdf';

const About = () => {
  return (
    <AboutStyle id="about">
      <h1>About Me</h1>

      <div className="main-content">
        <div className="aboutme-bg">
          <img src={aboutMe} alt="" />
        </div>
        <div className="about-me">
          <p>
            Hi, my name is Jesufemi. I’m a frontend developer based in Lagos, Nigeria. I am passionate about creating dynamic and interactive webpages that make for awesome user experience. I enjoy working with React.
            <br/>
            <br/>
            I learn very fast and I am always committed to any project I lay my hands on to achieve the best result. 
          </p>

          <button><a href={resume} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "white"}}>Download Resume</a></button>
        </div>
      </div>

      <div className="skill-container">
        <h1>My Skills</h1>
        <div className="skill-box">
          <div className="skills">
            {mySkills.map(skill => (
              <div className="each-skill" key={skill.id}>
                <img src={skill.image} alt="" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AboutStyle>
  )
}

export default About