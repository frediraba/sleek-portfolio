import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import type { Metadata } from 'next';
import Head from 'next/head';

// Metaandmete eksport
export const metadata: Metadata = {
  title: 'Sleek Portfolio - Fredi Raba',
  description: 'Fredi Raba portfoolio veebileht - tutvu minu tööde ja oskustega!',
};

export default function Home() {
  return (
    <>
      <Head>
        <meta name="keywords" content="veebiarendus, portfell, Fredi Raba, HTML, CSS, JavaScript, React, Next.js" />
        <meta property="og:title" content="Sleek Portfolio - Fredi Raba" />
        <meta property="og:description" content="Tutvu Fredi Raba portfoolioga ja avasta tema loodud töid." />
        <meta property="og:image" content="/images/portfolio-og-image.jpg" />
      </Head>
      <main className="container mx-auto px-4">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
