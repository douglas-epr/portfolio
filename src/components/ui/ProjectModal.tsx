'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ExternalLink, Wrench } from 'lucide-react';
import { YoutubeIcon } from '@/components/ui/SocialIcons';
import { Project } from '@/types';
import { Badge } from './Badge';

const TYPE_COLORS: Record<string, string> = {
  'SaaS': 'cyan',
  'SaaS (CRM)': 'cyan',
  'SaaS (Fitness & Wellness)': 'cyan',
  'Marketplace': 'blue',
  'Social Network': 'amber',
  'Management': 'ghost',
  'Other': 'ghost',
};

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#16161f] border border-blue-500/15 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Hero image */}
            <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden rounded-t-2xl">
              <Image
                src={project.imageUrl}
                alt={project.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
              {/* Bottom gradient so header reads cleanly */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#16161f] to-transparent" />

              {/* Type badge overlaid bottom-left */}
              <div className="absolute bottom-4 left-5">
                <Badge variant={TYPE_COLORS[project.type] as 'cyan' | 'blue' | 'amber' | 'ghost'}>
                  {project.type}
                </Badge>
              </div>
            </div>

            {/* Sticky header */}
            <div className="sticky top-0 z-10 flex items-start justify-between px-6 py-4 bg-[#16161f]/95 backdrop-blur-sm border-b border-white/5">
              <div>
                <h3 className="text-xl font-bold text-slate-100 leading-tight">{project.name}</h3>
                <p className="text-slate-400 text-sm mt-0.5">{project.tagline}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-white/5 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer ml-4 flex-shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6">
              {/* Links row */}
              {(project.websiteUrl || (project.youtubeUrls && project.youtubeUrls.length > 0)) && (
                <div className="flex flex-wrap gap-3">
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-white text-sm font-medium transition-colors"
                    >
                      <ExternalLink size={14} /> View Live
                    </a>
                  )}
                  {project.youtubeUrls && project.youtubeUrls.map((url, idx) => (
                    <a
                      key={url}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 text-sm font-medium transition-colors"
                    >
                      <YoutubeIcon size={14} />
                      {project.youtubeUrls!.length > 1 ? `Demo ${idx + 1}` : 'Watch Demo'}
                    </a>
                  ))}
                </div>
              )}

              {/* About */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
                  About
                </h4>
                <div className="space-y-3">
                  {project.description.split('\n').map((para, i) => (
                    para.trim() ? (
                      <p key={i} className="text-slate-300 leading-relaxed text-sm">
                        {para.trim()}
                      </p>
                    ) : null
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.keyFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-1.5">
                  <Wrench size={12} /> Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Badge key={tool} variant="tool">{tool}</Badge>
                  ))}
                </div>
              </div>

              {/* Testimony — conditional */}
              {project.testimonyImageUrl && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
                    Client Testimony
                  </h4>
                  <div className="rounded-xl overflow-hidden border border-white/8">
                    <div className="relative w-full">
                      <Image
                        src={project.testimonyImageUrl}
                        alt="Client testimony"
                        width={800}
                        height={400}
                        className="w-full h-auto object-cover"
                        sizes="(max-width: 768px) 100vw, 768px"
                      />
                    </div>
                  </div>
                  {project.testimonyLink && (
                    <a
                      href={project.testimonyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink size={13} /> Read on Clutch →
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
