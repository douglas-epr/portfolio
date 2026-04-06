'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, GraduationCap, Briefcase } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { person } from '@/mocks/person';

const highlights = [
  { icon: Briefcase, label: 'Current Role', value: 'Operations Manager @ Blur Studio' },
  { icon: GraduationCap, label: 'Education', value: "Master's, Engineering Management" },
  { icon: MapPin, label: 'Location', value: 'Ervália, MG, Brazil · Remote' },
];

const tools = [
  { name: 'Claude Code', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20', hoverBg: 'hover:bg-blue-500/20 hover:border-blue-500/40' },
  { name: 'Bubble', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20', hoverBg: 'hover:bg-amber-500/20 hover:border-amber-500/40' },
  { name: 'Supabase', color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20', hoverBg: 'hover:bg-green-500/20 hover:border-green-500/40' },
  { name: 'Figma Make', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20', hoverBg: 'hover:bg-purple-500/20 hover:border-purple-500/40' },
  { name: 'Lovable', color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20', hoverBg: 'hover:bg-cyan-500/20 hover:border-cyan-500/40' },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-[#0d0d14] relative">
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="About Me"
          title="The Engineer Who"
          titleHighlight="Builds at AI and NOCODE Speed"
          description="Bridging technical complexity and business systems clarity across global teams."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto lg:mx-0 group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 blur-xl group-hover:from-blue-500/30 group-hover:to-cyan-500/20 transition-all duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/5] group-hover:border-white/20 transition-all duration-500">
                <Image
                  src={person.profilePhoto}
                  alt="Douglas Gouveia"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating stats — animated counters */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="absolute -right-6 top-12 glass rounded-xl p-4 text-center shadow-xl cursor-default"
              >
                <div className="text-2xl font-bold gradient-text">
                  <AnimatedCounter target={4} suffix="+" duration={1.5} />
                </div>
                <div className="text-xs text-slate-500 mt-0.5">Years Building</div>
              </motion.div>

            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="text-slate-300 text-lg leading-relaxed">{person.bio}</p>

            {/* Primary stack — hover effects */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
                Primary Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <motion.span
                    key={tool.name}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className={`px-3 py-1.5 rounded-lg border text-sm font-medium cursor-default transition-all duration-200 ${tool.color} ${tool.bg} ${tool.hoverBg}`}
                  >
                    {tool.name}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Highlights — staggered */}
            <div className="space-y-3 pt-2">
              {highlights.map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300">
                    <Icon size={16} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="text-sm font-medium text-slate-200 group-hover:text-slate-100 transition-colors">{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-4 pl-4 border-l-2 border-blue-500/50 hover:border-blue-500/80 transition-colors duration-300"
            >
              <p className="text-slate-400 italic text-sm leading-relaxed">
                &quot;My superpower is connecting the dots — translating technical complexity into business clarity, ensuring systems, people, and ideas are perfectly aligned.&quot;
              </p>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
