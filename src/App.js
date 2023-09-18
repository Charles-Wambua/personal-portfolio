
// import './App.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Footer/>
    </div>
  );
}

export default App;
