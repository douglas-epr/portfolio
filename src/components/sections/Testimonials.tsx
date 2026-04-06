'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { testimonials } from '@/mocks/testimonials';

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Client Reviews"
          title="What My"
          titleHighlight="Clients Say"
          description="Feedback from global teams who trusted me to build their products."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <SpotlightCard
                tilt
                tiltMax={5}
                className="glass rounded-2xl p-6 flex flex-col hover:border-blue-500/20 transition-all duration-300 h-full"
              >
                {/* Quote icon */}
                <Quote size={20} className="text-blue-400/40 mb-4 flex-shrink-0" />

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <motion.div
                      key={si}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + si * 0.07, type: 'spring', stiffness: 300 }}
                    >
                      <Star size={13} className="text-amber-400 fill-amber-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Text — scrollable to read full review */}
                <div className="flex-1 overflow-y-auto max-h-36 testimonial-scroll pr-1">
                  <p className="text-slate-300 text-sm leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                </div>

                {/* Author row */}
                <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-3">
                  {/* Avatar */}
                  {t.photo ? (
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                      <Image
                        src={t.photo}
                        alt={t.author}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-400 text-sm font-bold">
                        {t.author.slice(0, 1)}
                      </span>
                    </div>
                  )}

                  <div className="min-w-0">
                    <p className="text-slate-200 text-sm font-semibold truncate">{t.author}</p>
                    <p className="text-xs text-blue-400 truncate">{t.company}</p>
                    {t.date && (
                      <p className="text-xs text-slate-600 mt-0.5">{t.date}</p>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-2 gap-6 max-w-sm mx-auto"
        >
          {[
            { value: 5, suffix: '.0', label: 'Average Rating', duration: 1.5 },
            { value: 100, suffix: '%', label: 'Client Satisfaction', duration: 2.0 },
          ].map(({ value, suffix, label, duration }) => (
            <SpotlightCard key={label} className="text-center glass rounded-xl py-5 px-3">
              <div className="text-2xl font-bold gradient-text">
                <AnimatedCounter target={value} suffix={suffix} duration={duration} />
              </div>
              <div className="text-xs text-slate-500 mt-1">{label}</div>
            </SpotlightCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
