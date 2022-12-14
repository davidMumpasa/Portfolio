import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Skills from './Components/Skills';
import Work from './Components/Work';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
       <Work/>
      <Contact/>
    </div>
  );
}

export default App;
