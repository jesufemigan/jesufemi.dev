import { createGlobalStyle } from "styled-components";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import { useEffect, useState } from "react";

import Main from './pages/Main';
import AllProject from "./pages/AllProject/AllProject";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Poppins, sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    ${'' /* background-color: #fef9f8;
    color: #0d0d0d; */}
  }

  body.dark {
    background-color: hsl(13,29%,6%);
    color: #ffffff;
  }

  button {
    cursor: pointer;
  }

  button:hover {
    transform: scale(1.05);
  }

  ::-webkit-scrollbar {
    width: .60rem;
    background-color: #ffe2dc;
    border-radius: .5rem;
  }

::-webkit-scrollbar-thumb {
    background-color: #ef9273;
    border-radius: .5rem;
  }

::-webkit-scrollbar-thumb:hover {
    background-color: rgba(239, 146, 115, 0.7);
  }

  .dark {
      background-color: #27252f;
      color: #ffffff;
  }

  .light {
    background-color: #fef9f8;
    color: #0d0d0d;
  }
`
function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleMode = () => {
    setIsDark(prev => !prev)
  }

  
  
  useEffect(() => {
    const dark = localStorage.getItem('darkMode');
    if (dark === 'dark') {
      setIsDark(true)
    }
  },[])
  useEffect(() => {
    localStorage.setItem('darkMode', isDark ? 'dark' : 'light')
  })
  
  return (
    <>
      <GlobalStyles />
      <Router>
        <Helmet>
          <title>Jesufemi Oladapo: Front-end Developer</title>
          <meta name="description" content="Jesufemi Portfolio"/>
          <meta name="keywords" content="Frontend Developer, frontend engineer, Portfolio website"/>
          <meta name="twitter:card" content="app"/>
          <meta name="twitter:site" content="" />
          <meta name="twitter:description" content="Jesufemi's Portfolio" />
          <meta name="twitter:title" content="Home" />
          <meta name="twitter:creator" content="Jesufemi Oladapo" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="Jesufemi's website" />
        </Helmet>
        <div className={isDark ? "dark" : "light"}>
          <Routes>
            <Route path="/" element={<Main isDark={isDark} toggleMode={toggleMode}/>} />
            <Route path="/projects" element={<AllProject />}/>
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
