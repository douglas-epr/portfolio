'use client';

import { useState } from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { ProjectModal } from '@/components/ui/ProjectModal';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Resume } from '@/components/sections/Resume';
import { Services } from '@/components/sections/Services';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Testimonials } from '@/components/sections/Testimonials';
import { Tutorials } from '@/components/sections/Tutorials';
import { Contact } from '@/components/sections/Contact';
import { Project } from '@/types';

export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Resume />
        <Services />
        <Skills />
        <Projects onProjectClick={setActiveProject} />
        <Testimonials />
        <Tutorials />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}
