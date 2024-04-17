import * as React from 'react';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import getLPTheme from '../actions/getLPTheme';
import FAQ from '../components/FAQ';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import LogoCollection from '../components/LogoCollection';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import NavBar from '../components/navigation/AppBar';

export default function LandingPage() {
  const [mode, setMode] = React.useState('light');
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <NavBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: 'background.paper' }}>
        {/* <LogoCollection /> */}
        <Features />
        <Divider />
        {/* <Testimonials /> */}
        {/* <Divider /> */}
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}