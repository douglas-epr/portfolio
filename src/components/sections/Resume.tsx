'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { experiences } from '@/mocks/experience';
import { educations } from '@/mocks/education';

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-[11px] top-6 bottom-0 w-px bg-gradient-to-b from-blue-500/30 to-transparent" />
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-[22px] h-[22px] rounded-full border-2 border-blue-500/50 bg-[#0a0a0f] flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-blue-400" />
      </div>

      <div className="glass rounded-xl p-5 hover:border-blue-500/25 hover:-translate-y-1 transition-all duration-300">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="font-semibold text-slate-100 text-sm">{exp.role}</h3>
            <p className="text-blue-400 text-sm font-medium">{exp.company}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <Calendar size={11} />
              {exp.startDate} — {exp.endDate}
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
              <MapPin size={11} />
              {exp.location}
            </div>
          </div>
        </div>

        <ul className="space-y-1.5">
          {exp.highlights.slice(0, 3).map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
              <span className="w-1 h-1 rounded-full bg-blue-400/60 mt-1.5 flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        {exp.stack && (
          <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/5">
            {exp.stack.map((s) => (
              <Badge key={s} variant="tool">{s}</Badge>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Resume() {
  return (
    <section id="resume" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Resume"
          title="Experience &"
          titleHighlight="Education"
          description="A global track record from Brazil to Hungary to the United States."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Briefcase size={16} className="text-blue-400" />
              </div>
              <h3 className="font-semibold text-slate-200">Work Experience</h3>
            </div>
            <div>
              {experiences.map((exp, i) => (
                <ExperienceCard key={exp.id} exp={exp} index={i} />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <GraduationCap size={16} className="text-amber-400" />
              </div>
              <h3 className="font-semibold text-slate-200">Education</h3>
            </div>
            <div className="space-y-4">
              {educations.map((edu, i) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass rounded-xl p-5 hover:border-amber-500/20 hover:-translate-y-1 transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h4 className="font-semibold text-slate-100 text-sm">{edu.institution}</h4>
                      <p className="text-amber-400 text-sm mt-0.5">
                        {edu.subtitle ? edu.degree : `${edu.degree} · ${edu.field}`}
                      </p>
                      {edu.subtitle && (
                        <p className="text-amber-400 text-xs mt-0.5">{edu.subtitle}</p>
                      )}
                      <div className="flex items-center gap-1 text-xs text-slate-500 mt-1.5">
                        <MapPin size={10} />
                        {edu.location}
                      </div>
                    </div>
                    <span className="text-xs text-slate-500 bg-white/5 px-2 py-1 rounded-lg flex-shrink-0">
                      {edu.startYear === edu.endYear
                        ? edu.startYear
                        : `${edu.startYear}–${edu.endYear}`}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-6 glass rounded-xl p-5"
            >
              <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
                Languages
              </h4>
              <div className="space-y-3">
                {[
                  { lang: 'Portuguese', level: 'Native', pct: 100 },
                  { lang: 'English', level: 'Bilingual / Fluent', pct: 95 },
                ].map(({ lang, level, pct }) => (
                  <div key={lang}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-slate-300">{lang}</span>
                      <span className="text-slate-500 text-xs">{level}</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
