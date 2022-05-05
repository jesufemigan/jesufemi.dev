import Home from "../components/Home/Home";
import About from "../components/About/About";
import Project from "../components/Project/Project";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Main = ({isDark, toggleMode}) => {
  return (
    <>
      <Home isDark={isDark} toggleMode={toggleMode}/>
      <About />
      <Project />
      <Contact />
      <Footer />

    </>
  )
}

export default Main;