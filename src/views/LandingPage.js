import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import getLPTheme from "../actions/getLPTheme";
import Layout from "../views/Layout";
import Hero from "../components/Hero";
import HowWeHelp from "../components/HowWeHelp";
import LogoCollection from "../components/LogoCollection";
import Capabilities from "../components/Capabilities";
import BlogCarousel from "../components/BlogListCarousel";
import Header from "../components/Header";

export default function LandingPage() {
  return (
      <Layout>
        <Header/>
        <Hero />
        <BlogCarousel />
        <HowWeHelp />
        <LogoCollection />
        <Capabilities />
      </Layout>
  );
}
