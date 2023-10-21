import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import "../App.css";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

import { useRef } from "react";


function App() {
  const hero = useRef(null);
  const skills = useRef(null);
  const portfolio = useRef(null);
  const contact = useRef(null);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <NavBar hero={hero} skills={skills} portF={portfolio} contact={contact}/>
      <Hero innerRef={hero} portF={portfolio}/>
      <Skills innerRef={skills}/>
      <Portfolio innerRef={portfolio}/>
      
      <Contact innerRef={contact}/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
