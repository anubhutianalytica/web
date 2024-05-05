import * as React from 'react';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import getLPTheme from '../actions/getLPTheme';
import Capabilities from '../components/Capabilities';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HowWeHelp from '../components/HowWeHelp';
import LogoCollection from '../components/LogoCollection';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
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
        <WhyUs />
        <Divider />
        <Capabilities />
        <Divider />
        <HowWeHelp />
        <Divider />
        <LogoCollection />
        <Divider />
        <Services />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}