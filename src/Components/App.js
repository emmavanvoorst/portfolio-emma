import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import "../App.css";
import Hero from "./Hero";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function App() {
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
