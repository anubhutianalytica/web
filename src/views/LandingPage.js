import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import getLPTheme from '../actions/getLPTheme';
import Layout from '../views/Layout';
import Hero from '../components/Hero';
import HowWeHelp from '../components/HowWeHelp';
import LogoCollection from '../components/LogoCollection';
import Capabilities from '../components/Capabilities';
import Footer from '../components/Footer';

export default function LandingPage() {
  const [mode, setMode] = React.useState('light');
  const LPtheme = createTheme(getLPTheme(mode));

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <Layout>
        <Hero />
        <HowWeHelp />
        <LogoCollection />
        <Capabilities />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
}