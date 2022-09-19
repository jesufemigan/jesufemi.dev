import { Link } from "react-scroll";

import { HomeStyle } from "./Home.style";
import Header from "../Header/Header";

import mail from '../../assets/mail.svg';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import twitter from '../../assets/twitter.svg';


const Home = ({isDark, toggleMode}) => {
  return (
    <>
      <Header isDark={isDark} toggleMode={toggleMode}/>
      <HomeStyle id="home">
        <div className="main-home-container">
          <div className="my-description">
              <h1>Hi, I'm Jesufemi</h1>
              <h3>A Frontend Developer</h3>
              <p>I focus on writing clean, readable and maintainable code that make web pages interactive and dynamic for awesome user experience</p>
              <button><Link smooth spy duration={100}to="contact" style={{textDecoration:"none", color:"white"}}>Contact Me</Link></button>
          </div>
          <figure>
            <span></span>
          </figure>
          <ul className="social-links">
            <a href='mailto:oladapofemmy@gmail.com' target="_blank" rel="noopener noreferrer"><img src={mail} alt="email" /></a>
            <a href='https://www.linkedin.com/in/jesufemi-oladapo/' target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" /></a>
            <a  href='https://github.com/jesufemigan' target="_blank" rel="noopener noreferrer"><img src={github} alt="github" /></a>
            <a  href='https://twitter.com/jesufemigan' target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" /></a>
          </ul>
        </div>
      </HomeStyle>
    </>
  )
}

export default Home;