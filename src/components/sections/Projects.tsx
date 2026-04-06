'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { projects } from '@/mocks/projects';
import { Project } from '@/types';

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
}

export function Projects({ onProjectClick }: ProjectsProps) {
  return (
    <section id="projects" className="section-padding bg-[#0d0d14] relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Featured Projects"
          title="Products I've"
          titleHighlight="Engineered"
          description="Click any project to see the full breakdown — stack, features, and demos."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <SpotlightCard
                as="button"
                tilt
                tiltMax={8}
                onClick={() => onProjectClick(project)}
                className="group text-left glass rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 cursor-pointer w-full"
              >
                {/* Screenshot thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <Image
                    src={project.imageUrl}
                    alt={project.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />

                  {/* Dark gradient overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0d0d14]/80 to-transparent" />

                  {/* Blue hover overlay */}
                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Arrow icon on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      <ArrowUpRight size={18} className="text-white" />
                    </div>
                  </div>

                  {/* Type badge — top left, dark overlay so it reads on any background */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold bg-black/65 backdrop-blur-sm text-white border border-white/15 shadow-sm">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-slate-100 text-sm group-hover:text-blue-400 transition-colors duration-200">
                    {project.name}
                  </h3>
                  <p className="text-slate-500 text-xs mt-1 line-clamp-1 leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Tools preview */}
                  <div className="flex flex-wrap gap-1 mt-3">
                    {project.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="px-1.5 py-0.5 rounded text-[10px] bg-white/5 text-slate-500 border border-white/5 group-hover:border-white/10 group-hover:text-slate-400 transition-all duration-300"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-white/5 text-slate-500 border border-white/5">
                        +{project.tools.length - 3}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="mt-3 flex items-center gap-1 text-xs text-slate-500 group-hover:text-blue-400 transition-colors duration-200">
                    <ArrowUpRight size={11} />
                    <span>View details →</span>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
