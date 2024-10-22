import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import type { Metadata } from 'next';

// Metaandmete eksport
export const metadata: Metadata = {
  title: 'Sleek Portfolio - Fredi Raba',
  description: 'Fredi Raba portfoolio veebileht - tutvu minu tööde ja oskustega!',
};

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
