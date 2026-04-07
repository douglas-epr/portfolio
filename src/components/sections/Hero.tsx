'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown, Download } from 'lucide-react';
import { LinkedinIcon, YoutubeIcon } from '@/components/ui/SocialIcons';
import { MagneticElement } from '@/components/ui/MagneticElement';
import { TextReveal } from '@/components/ui/TextReveal';
import { person } from '@/mocks/person';
import { useRef } from 'react';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Parallax transforms for background orbs
  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const orbY3 = useTransform(scrollYProgress, [0, 1], [0, -160]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grid-pattern"
    >
      {/* Parallax background glow orbs */}
      <motion.div style={{ y: orbY1 }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />
      <motion.div style={{ y: orbY2 }} className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/6 rounded-full blur-3xl pointer-events-none" />
      <motion.div style={{ y: orbY3 }} className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for new projects
            </motion.div>

            {/* Name — staggered character reveal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <TextReveal text="Douglas Gouveia" className="text-slate-100" delay={0.1} />
            </h1>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-4 flex flex-wrap gap-2"
            >
              <motion.span
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold cursor-default transition-colors hover:bg-amber-500/20"
              >
                AI Product Engineer
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-sm cursor-default transition-colors hover:bg-white/10"
              >
                Senior Bubble Developer
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-sm cursor-default transition-colors hover:bg-white/10"
              >
                Product & Operations Manager
              </motion.span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-6 text-slate-400 text-lg leading-relaxed max-w-xl"
            >
              Building scalable products at the intersection of{' '}
              <span className="text-blue-400 font-medium">AI</span>,{' '}
              <span className="text-cyan-400 font-medium">NoCode</span>, and{' '}
              <span className="text-amber-400 font-medium">strategic engineering</span>.
              Claude Code · Bubble · Supabase · Figma Make · Lovable.
            </motion.p>

            {/* CTA buttons — magnetic + shine */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <MagneticElement as="button" strength={0.25} onClick={() => scrollTo('projects')} className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 cursor-pointer btn-shine">
                View My Work
              </MagneticElement>
              <MagneticElement as="button" strength={0.25} onClick={() => scrollTo('contact')} className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 hover:border-white/20 font-semibold transition-all duration-200 cursor-pointer">
                Contact Me
              </MagneticElement>
            </motion.div>

            {/* Social links — magnetic */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-8 flex items-center gap-4"
            >
              <MagneticElement
                as="a"
                href={person.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                strength={0.4}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-blue-500/20 text-slate-400 hover:text-blue-400 border border-white/10 hover:border-blue-500/30 transition-all duration-200"
              >
                <LinkedinIcon size={18} />
              </MagneticElement>
              <MagneticElement
                as="a"
                href={person.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                strength={0.4}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-400 border border-white/10 hover:border-red-500/30 transition-all duration-200"
              >
                <YoutubeIcon size={18} />
              </MagneticElement>
              <MagneticElement
                as="a"
                href="/Douglas-Gouveia-CV.pdf"
                download
                strength={0.4}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-slate-200 border border-white/10 hover:border-white/20 text-sm transition-all duration-200"
              >
                <Download size={14} /> Download CV
              </MagneticElement>
            </motion.div>
          </div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 blur-2xl scale-110 animate-glow group-hover:from-blue-500/30 group-hover:to-cyan-500/20 transition-all duration-500" />

              {/* Decorative ring — spins slowly on hover */}
              <div className="absolute -inset-3 rounded-3xl border border-blue-500/15 group-hover:border-blue-500/30 transition-colors duration-500" />
              <div className="absolute -inset-6 rounded-3xl border border-blue-500/8 group-hover:border-blue-500/15 transition-colors duration-500 group-hover:rotate-1" style={{ transition: 'all 0.7s ease' }} />

              {/* Photo */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[480px] rounded-3xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-500">
                <Image
                  src={person.heroPhoto}
                  alt="Douglas Gouveia"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                {/* Gradient overlay bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent" />
              </div>

              {/* Floating badge — AI tool */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.1, rotate: -3 }}
                className="absolute -top-4 -left-4 glass rounded-xl px-3 py-2 text-xs font-semibold text-blue-400 shadow-xl cursor-default"
              >
                ✦ Claude Code
              </motion.div>

              {/* Floating badge — projects */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                whileHover={{ scale: 1.1, rotate: 3 }}
                className="absolute -bottom-4 -right-4 glass rounded-xl px-3 py-2 text-xs font-semibold text-amber-400 shadow-xl cursor-default"
              >
                Bubble
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
