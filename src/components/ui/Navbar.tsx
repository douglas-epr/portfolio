'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useActiveSection } from '@/hooks/useActiveSection';
import { MagneticElement } from '@/components/ui/MagneticElement';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'testimonials', label: 'Clients' },
  { id: 'tutorials', label: 'Tutorials' },
  { id: 'contact', label: 'Contact' },
];

const SECTION_IDS = ['hero', 'about', 'resume', 'services', 'skills', 'projects', 'testimonials', 'tutorials', 'contact'];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          scrolled
            ? 'bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.button
              onClick={() => scrollTo('hero')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 cursor-pointer group"
              suppressHydrationWarning
            >
              {/* Avatar photo */}
              <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-blue-500/40 shadow-lg shadow-blue-500/20 group-hover:border-blue-500/70 group-hover:shadow-blue-500/40 transition-all duration-300">
                <Image
                  src="/images/Gemini_Generated_Image_lfzuf4lfzuf4lfzu.png"
                  alt="Douglas Gouveia"
                  fill
                  className="object-cover object-top"
                />
              </div>
              {/* Wordmark */}
              <div className="flex flex-col leading-none">
                <div className="flex items-baseline gap-0.5">
                  <span className="text-slate-100 font-bold text-sm tracking-tight">DG</span>
                  <span className="gradient-text text-sm font-bold">.</span>
                </div>
                <span className="text-[9px] font-semibold tracking-widest text-slate-500 uppercase group-hover:text-slate-400 transition-colors duration-200">AI &amp; NoCode Developer</span>
              </div>
            </motion.button>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1 relative">
              {NAV_LINKS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={cn(
                    'relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer',
                    activeSection === id
                      ? 'text-blue-400'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  )}
                  suppressHydrationWarning
                >
                  {/* Animated active background pill */}
                  {activeSection === id && (
                    <motion.div
                      layoutId="nav-active-pill"
                      className="absolute inset-0 bg-blue-500/10 rounded-lg"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              ))}
            </div>

            {/* CTA — magnetic + shine */}
            <div className="hidden md:flex items-center gap-3">
              <MagneticElement
                as="button"
                strength={0.2}
                onClick={() => scrollTo('contact')}
                className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-white text-sm font-medium transition-all duration-200 cursor-pointer shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 btn-shine"
              >
                Hire Me
              </MagneticElement>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors cursor-pointer"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-30 md:hidden bg-[#111118]/95 backdrop-blur-md border-b border-white/5 px-4 py-4"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map(({ id, label }, i) => (
                <motion.button
                  key={id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => scrollTo(id)}
                  className={cn(
                    'w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer',
                    activeSection === id
                      ? 'text-blue-400 bg-blue-500/10'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  )}
                >
                  {label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.04 }}
                onClick={() => scrollTo('contact')}
                className="mt-2 w-full px-4 py-3 rounded-xl bg-blue-500 text-white text-sm font-medium text-center cursor-pointer"
              >
                Hire Me
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
