import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import getLPTheme from '../actions/getLPTheme';
import Layout from '../views/Layout';
import Hero from '../components/Hero';
import HowWeHelp from '../components/HowWeHelp';
import LogoCollection from '../components/LogoCollection';
import Capabilities from '../components/Capabilities';

export default function LandingPage() {
  const LPtheme = createTheme(getLPTheme('light'));

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <Layout>
        <Hero />
        <HowWeHelp />
        <LogoCollection />
        <Capabilities />
      </Layout>
    </ThemeProvider>
  );
}