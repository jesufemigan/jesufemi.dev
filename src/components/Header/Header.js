import { HeaderStyle } from "./Header.style";

import { useState } from "react";
import { Link } from 'react-scroll';

import logoImage from '../../assets/logo-image.jpg';
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';
import hamburger from '../../assets/hamburger.svg';
import close from '../../assets/close.svg';

const Header = ({isDark, toggleMode}) => {

  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(prev => !prev)
  }
  return (
    <HeaderStyle>
      <div className="logo">
          <img src={logoImage} alt="logo" />
          <p>jesufemi.dev</p>
        </div>

        <nav className={isDark ? "dark": undefined}>
          <ul className={menu ? 'show' : undefined}>
            <Link activeClass="highlight" smooth spy to="home" delay={0} duration={100}>Home</Link>
            <Link activeClass="highlight" smooth spy to="about" delay={0} duration={100}>About Me</Link>
            <Link activeClass="highlight" smooth spy to="projects" delay={0} duration={100}>Projects</Link>
            <a href="https://blog.jesufemi.dev" target="_blank" rel="noopener noreferrer">Blog</a>
            <Link activeClass="highlight" smooth spy to="contact" delay={0} duration={100}>Contact Me</Link>
            <span onClick={() => toggleMode()}><img src={isDark ? sun : moon} alt="toggle mode" /></span>
          </ul>
        </nav>
        <div className="hamburger" onClick={() => handleMenu()}>
          <img src={menu ? close : hamburger} alt="menu" />
        </div>
    </HeaderStyle>
  )
}

export default Header