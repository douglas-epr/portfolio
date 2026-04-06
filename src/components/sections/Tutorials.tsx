'use client';

import { motion } from 'framer-motion';
import { YoutubeIcon } from '@/components/ui/SocialIcons';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MagneticElement } from '@/components/ui/MagneticElement';
import { tutorials } from '@/mocks/tutorials';
import { person } from '@/mocks/person';

export function Tutorials() {
  return (
    <section id="tutorials" className="section-padding bg-[#0d0d14] relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Tutorials"
          title="Learn from"
          titleHighlight="Real Builds"
          description="Walkthroughs, demos, and breakdowns from projects I built and shipped."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {tutorials.map((tutorial, i) => (
            <motion.div
              key={tutorial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="glass rounded-2xl overflow-hidden border border-white/8 hover:border-red-500/25 hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300 group">
                {/* Video embed */}
                <div className="relative aspect-video bg-slate-900">
                  <iframe
                    src={tutorial.embedUrl}
                    title={tutorial.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-red-500/20 group-hover:border-red-500/40 transition-all duration-300">
                      <YoutubeIcon size={14} className="text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-100 text-sm group-hover:text-blue-400 transition-colors duration-200">
                        {tutorial.title}
                      </h3>
                      <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                        {tutorial.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Channel CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <MagneticElement
            as="a"
            href={person.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            strength={0.2}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 hover:border-red-500/40 font-medium transition-all duration-200 btn-shine"
          >
            <YoutubeIcon size={18} />
            Visit @dgnocode on YouTube
          </MagneticElement>
        </motion.div>
      </div>
    </section>
  );
}
