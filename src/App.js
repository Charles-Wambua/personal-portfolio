import { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Switch from '@mui/material/Switch';
import { Home } from './components/Home';
import { About } from './components/About'
import Projects from './components/Projects';
import Skillls from './components/skii';
import "./App.css"
import CustomizedTimeline from './components/ex';
import { Skills } from './components/Skills';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212', 
      paper: '#1e1e1e', 
    },
    primary: {
      main: '#bb86fc', 
    },
    secondary: {
      main: '#03dac6', 
    },
    text: {
      primary: '#e0e0e0', 
      secondary: '#b3b3b3', 
    },
    accent: {
      main: '#ff4081', 
    },
    success: {
      main: '#00e676', 
    },
    error: {
      main: '#cf6679', 
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '--bg-color': '#121212',
          '--paper-color': '#1e1e1e',
          '--text-color': '#e0e0e0',
          '--accent-color': '#bb86fc',
          '--about-me-bg': '#2e2e2e', // Slightly darker for a more immersive look
        },
      },
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f5f5f5', // Soft grey with a warm tone
      paper: '#ffffff', // Pure white for clean contrasts
    },
    primary: {
      main: '#1976d2', // Rich blue for a professional feel
    },
    secondary: {
      main: '#ff9800', // Warm amber for vibrancy
    },
    text: {
      primary: '#212121', // Dark grey for readability without starkness
      secondary: '#757575', // Muted grey for subtler text
    },
    accent: {
      main: '#ff5722', // Burnt orange for emphasis
    },
    success: {
      main: '#4caf50', // Fresh green for positive indicators
    },
    error: {
      main: '#f44336', // Bright red for error messages
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '--bg-color': '#f5f5f5',
          '--paper-color': '#ffffff',
          '--text-color': '#212121',
          '--accent-color': '#1976d2',
          '--about-me-bg': '#eeeeee', // Soft off-white for a clean, minimalist feel
        },
      },
    },
  },
});


export default function App() {
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const handleThemeChange = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <div style={{ padding: '16px' }}>
        <Switch
          checked={isDark}
          onChange={handleThemeChange}
          color="primary"
          inputProps={{ 'aria-label': 'theme switch' }}
        />
        <label>{isDark ? "Dark Mode" : "Light Mode"}</label>
      </div>
      <Home />
      <About/>
      <Projects/>
      <CustomizedTimeline/>
      <Skills/>
    </ThemeProvider>
  );
}
