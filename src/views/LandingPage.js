import * as React from 'react';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import getLPTheme from '../actions/getLPTheme';
import FAQ from './FAQ';
import Features from './Features';
import Footer from './Footer';
import Hero from './Hero';
import Highlights from './Highlights';
import LogoCollection from './LogoCollection';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import NavBar from './navigation/AppBar';

export default function LandingPage() {
  const LPtheme = createTheme(getLPTheme('dark'));

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <NavBar />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
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