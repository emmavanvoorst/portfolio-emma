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

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header home={home} portF={portfolio} contact={contact}/>
      <Hero ref={home}/>
      <Portfolio ref={portfolio}/>
      <Contact ref={contact}/>
      {/* <Routes>
        <Route path="/" element={<h1>hello</h1>} />
        <Route path="/hero" element={<Hero/>} />
    </Routes> */}
    </BrowserRouter>
  );
}

export default App;
