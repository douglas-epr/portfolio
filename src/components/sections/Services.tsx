'use client';

import { motion } from 'framer-motion';
import {
  BrainCircuit, Layers, Compass, Plug, Settings2, PenTool,
} from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { services } from '@/mocks/services';

const ICON_MAP: Record<string, React.ElementType> = {
  BrainCircuit, Layers, Compass, Figma: PenTool, Plug, Settings2,
};

export function Services() {
  return (
    <section id="services" className="section-padding bg-[#0d0d14] relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Services"
          title="What I"
          titleHighlight="Deliver"
          description="From AI-native apps to complex NoCode systems — end-to-end product engineering."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = ICON_MAP[service.icon] ?? BrainCircuit;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <SpotlightCard
                  tilt
                  tiltMax={6}
                  className="glass rounded-2xl p-6 group cursor-default hover:border-blue-500/25 transition-all duration-300 h-full"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:bg-blue-500/20 group-hover:border-blue-500/40 group-hover:scale-110 transition-all duration-300">
                    <Icon size={22} className="text-blue-400" />
                  </div>

                  <h3 className="font-semibold text-slate-100 mb-2 group-hover:text-blue-300 transition-colors duration-300">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>

                  {/* Hover accent line */}
                  <div className="mt-5 h-px w-0 group-hover:w-full bg-gradient-to-r from-blue-500/50 to-cyan-500/0 transition-all duration-500" />
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
