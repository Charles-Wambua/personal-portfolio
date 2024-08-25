import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  
import '@fortawesome/fontawesome-free/css/all.min.css';

import $ from 'jquery';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Switch from '@mui/material/Switch';
import { Home } from './components/Home';
import { About } from './components/About'
import Projects from './components/Projects';
import { Skills } from './components/Skills';
import Banner from './components/Banner';
import Experience from './components/experie';
import CustomModal from './components/modal';
import Footer from './components/Footer';
// import Experience from './components/Experience';


window.$ = $;
export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
 <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
   <Banner isDarkTheme={isDarkTheme} onToggleTheme={handleThemeToggle} />
  <About  isDarkTheme={isDarkTheme} onToggleTheme={handleThemeToggle}/>
  <Skills isDarkTheme={isDarkTheme} onToggleTheme={handleThemeToggle}/>
  <Experience isDarkTheme={isDarkTheme} onToggleTheme={handleThemeToggle}/>
  <Projects isDarkTheme={isDarkTheme} onToggleTheme={handleThemeToggle}/> 
  <Footer isDarkTheme={isDarkTheme} onToggleTheme={handleThemeToggle}/>
  </div>
  );
}
