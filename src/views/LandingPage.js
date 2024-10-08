import React from "react";
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
        <Capabilities />
        <LogoCollection />
        <HowWeHelp />
      </Layout>
  );
}
