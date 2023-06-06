import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import "../App.css";
import Hero from "./Hero";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { useRef } from "react";


function App() {
  const home = useRef(null);
  const portfolio = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) =>{
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Hero />
      <Portfolio />
      <Contact />
      {/* <Routes>
        <Route path="/" element={<h1>hello</h1>} />
        <Route path="/hero" element={<Hero/>} />
    </Routes> */}
    </BrowserRouter>
  );
}

export default App;
