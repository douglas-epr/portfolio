'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { LinkedinIcon, YoutubeIcon } from '@/components/ui/SocialIcons';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MagneticElement } from '@/components/ui/MagneticElement';
import { person } from '@/mocks/person';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'send failed');
      setSent(true);
    } catch {
      setError('Something went wrong. Please email me directly at douglas.epr@hotmail.com');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: person.email, href: `mailto:${person.email}` },
    { icon: Phone, label: 'Phone', value: person.phone, href: `tel:${person.phone}` },
    { icon: MapPin, label: 'Location', value: person.location, href: undefined },
  ];

  const socials = [
    { icon: LinkedinIcon, label: 'LinkedIn', href: person.linkedinUrl, color: 'hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/10' },
    { icon: YoutubeIcon, label: 'YouTube', href: person.youtubeUrl, color: 'hover:text-red-400 hover:border-red-500/30 hover:bg-red-500/10' },
    { icon: Mail, label: 'Email', href: `mailto:${person.email}`, color: 'hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/10' },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Contact Me"
          title="Let's Build"
          titleHighlight="Something Great"
          description="Have a project in mind? I'd love to hear about it."
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <p className="text-slate-400 leading-relaxed">
                Whether you need an AI-powered product, a complex NoCode system, or a strategic product partner — I&apos;m here. Let&apos;s connect and turn your vision into a shipped product.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm text-slate-200 hover:text-blue-400 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-200">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">Find me on</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href, color }) => (
                  <MagneticElement
                    key={label}
                    as="a"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    strength={0.4}
                    className={`p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 transition-all duration-200 ${color}`}
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </MagneticElement>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-8">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <CheckCircle size={28} className="text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100">Message Sent!</h3>
                    <p className="text-slate-400 text-sm mt-1">I&apos;ll get back to you shortly.</p>
                  </div>
                  <button
                    onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); setError(null); }}
                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all"
                        suppressHydrationWarning
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all"
                        suppressHydrationWarning
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all resize-none"
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={loading || !form.name || !form.email || !form.message}
                    className="w-full py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer btn-shine"
                    suppressHydrationWarning
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
