"use client";

import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Navbar from '@/components/Navbar';
import Deities from '@/components/Deities';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import ParticleBackground from '@/components/ParticleBackground';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />
      <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <About />
        <Deities />
        <Services />
        <Contact />
      </div>
    </main>
  );
}
