import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/privacy-policy" element={()=>{
            window.location.href = 'www.linkedin.com/in/david-ebula-10b1b2231'; 
            return null;
          }} />
        </Routes>
      </BrowserRouter>

      <NavBar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
