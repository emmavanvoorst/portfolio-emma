import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import "../App.css";
import Hero from "./Hero";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { useRef } from "react";


function App() {
  const hero = useRef(null);
  const portfolio = useRef(null);
  const contact = useRef(null);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header hero={hero} portF={portfolio} contact={contact}/>
      <Hero innerRef={hero} portF={portfolio}/>
      <Portfolio innerRef={portfolio}/>
      <Contact innerRef={contact}/>
      {/* <Routes>
        <Route path="/" element={<h1>hello</h1>} />
        <Route path="/hero" element={<Hero/>} />
    </Routes> */}
    </BrowserRouter>
  );
}

export default App;
