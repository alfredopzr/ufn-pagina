import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Global, css } from '@emotion/react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import Degrees from './pages/Degrees.tsx';
import Contact from './pages/Contact.tsx';
import Registration from './pages/Registration.tsx';
import Accreditations from './pages/Accreditations.tsx';

const theme = createTheme({
  typography: {
    fontFamily: '"Libre Franklin", "Cerebri Sans", "Hurme Geometric Sans 2", "Hurme Geometric Sans 3", sans-serif',
    h1: {
      fontFamily: '"Hurme Geometric Sans 3", sans-serif',
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontFamily: '"Hurme Geometric Sans 3", sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
    },
    h3: {
      fontFamily: '"Hurme Geometric Sans 2", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    body1: {
      fontFamily: '"Cerebri Sans", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    button: {
      fontFamily: '"Libre Franklin", sans-serif',
      fontWeight: 500,
    },
  },
  palette: {
    primary: {
      main: '#0046AD', // Deep blue
    },
    secondary: {
      main: '#F7403A', // Red
    },
    text: {
      primary: '#51626F', // Dark gray
    },
    warning: {
      main: '#F2AF00', // Yellow
    },
    background: {
      default: '#FFFFFF',
      paper: '#F7F7F7',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
        containedPrimary: {
          backgroundColor: '#0046AD',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#003380',
          },
        },
        outlinedPrimary: {
          borderColor: '#0046AD',
          color: '#0046AD',
          '&:hover': {
            backgroundColor: 'rgba(0, 70, 173, 0.04)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#F2AF00',
        },
      },
    },
  },
});

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;500;600;700&display=swap');
  
  body {
    background-color: #FFFFFF;
    color: #51626F;
    transition: all 0.3s ease-in-out;
  }

  .fade-in {
    animation: fadeIn 0.5s ease-in;
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Global styles={globalStyles} />
      <Router>
        <div className="App fade-in">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/degrees" element={<Degrees />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/accreditations" element={<Accreditations />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
