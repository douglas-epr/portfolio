'use client';

import { motion } from 'framer-motion';
import {
  Layers, PenTool, BarChart2, Database, Plug, Server, TrendingUp,
  Settings2, Users, ClipboardList, Cpu, Code2, Sparkles, Zap,
} from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { skills } from '@/mocks/skills';
import { SkillCategory } from '@/types';
import { cn } from '@/lib/utils';

// ─── Logo chips for tool-based categories ──────────────────────────────────

// Brands with verified logos on cdn.simpleicons.org
const SIMPLE_ICONS: Record<string, { slug: string; color: string; border: string }> = {
  // AI Tools
  'Claude Code':       { slug: 'claude',        color: 'D97706', border: 'border-amber-500/30'   },
  'Figma Make':        { slug: 'figma',         color: 'A78BFA', border: 'border-purple-500/30'  },
  'Supabase':          { slug: 'supabase',      color: '3ECF8E', border: 'border-emerald-500/30' },
  // APIs
  'Stripe':            { slug: 'stripe',        color: '818CF8', border: 'border-violet-500/30'  },
  'PayPal':            { slug: 'paypal',        color: '60A5FA', border: 'border-blue-500/30'    },
  'OpenAI':            { slug: 'openai',        color: 'ffffff', border: 'border-emerald-500/30' },
  'Gemini':            { slug: 'googlegemini',  color: '22D3EE', border: 'border-cyan-500/30'    },
  'Claude':            { slug: 'claude',        color: 'D97706', border: 'border-amber-500/30'   },
  'HubSpot':           { slug: 'hubspot',       color: 'FB923C', border: 'border-orange-500/30'  },
  'Salesforce':        { slug: 'salesforce',    color: '22D3EE', border: 'border-sky-500/30'     },
  'Slack':             { slug: 'slack',         color: 'E879F9', border: 'border-fuchsia-500/30' },
  'WhatsApp Business': { slug: 'whatsapp',      color: '4ADE80', border: 'border-green-500/30'   },
  'Google APIs':       { slug: 'google',        color: 'FBBF24', border: 'border-yellow-500/30'  },
  'Microsoft APIs':    { slug: 'microsoftazure',color: '60A5FA', border: 'border-blue-500/30'    },
  'Apify':             { slug: 'apify',         color: 'FF9619', border: 'border-orange-500/30'  },
};

// Fallback abbreviations for brands not on Simple Icons
const ABBR_MAP: Record<string, { abbr: string; text: string; border: string }> = {
  'Bubble':        { abbr: 'BB', text: 'text-blue-300',   border: 'border-blue-500/30'   },
  'Lovable':       { abbr: 'LV', text: 'text-pink-300',   border: 'border-pink-500/30'   },
  'Relevance AI':  { abbr: 'RA', text: 'text-purple-300', border: 'border-purple-500/30' },
  'Apollo':        { abbr: 'AP', text: 'text-indigo-300', border: 'border-indigo-500/30' },
  'Build with AI': { abbr: 'BW', text: 'text-teal-300',   border: 'border-teal-500/30'   },
  'Full Enrich':   { abbr: 'FE', text: 'text-lime-300',   border: 'border-lime-500/30'   },
  'Firecrawl':     { abbr: 'FC', text: 'text-red-300',    border: 'border-red-500/30'    },
  'Nylas':         { abbr: 'NY', text: 'text-rose-300',   border: 'border-rose-500/30'   },
};

function ToolLogo({ name }: { name: string }) {
  const cdn = SIMPLE_ICONS[name];

  if (cdn) {
    return (
      <motion.div
        whileHover={{ y: -3, scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        className={cn(
          'flex items-center gap-2.5 px-3 py-2 rounded-xl border cursor-default bg-[#1a1a2e]',
          cdn.border
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://cdn.simpleicons.org/${cdn.slug}/${cdn.color}`}
          alt={name}
          width={16}
          height={16}
          className="w-4 h-4 flex-shrink-0"
        />
        <span className="text-slate-300 text-xs font-medium whitespace-nowrap">{name}</span>
      </motion.div>
    );
  }

  // Abbreviation fallback
  const config = ABBR_MAP[name] ?? { abbr: name.slice(0, 2).toUpperCase(), text: 'text-slate-300', border: 'border-white/10' };
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={cn('flex items-center gap-2.5 px-3 py-2 rounded-xl border cursor-default bg-[#1a1a2e]', config.border)}
    >
      <span className={cn('text-[10px] font-black tracking-tight leading-none', config.text)}>
        {config.abbr}
      </span>
      <span className="text-slate-300 text-xs font-medium whitespace-nowrap">{name}</span>
    </motion.div>
  );
}

// ─── Icon list for expertise categories ───────────────────────────────────

const EXPERTISE_ICONS: Record<string, React.ElementType> = {
  // Product
  'Product Architecture': Layers,
  'UI/UX Design':         PenTool,
  'Product Management':   BarChart2,
  // Engineering
  'Database Architecture': Database,
  'API Integrations':      Plug,
  'Backend Workflows':     Server,
  'Scalability Design':    TrendingUp,
  // Management
  'Operations Management': Settings2,
  'Stakeholder Alignment': Users,
  'Project Management':    ClipboardList,
};

const EXPERTISE_COLORS: Record<string, string> = {
  Product:     'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  Engineering: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  Management:  'text-green-400 bg-green-500/10 border-green-500/20',
};

function ExpertiseList({ category, items }: { category: string; items: string[] }) {
  const iconColor = EXPERTISE_COLORS[category] ?? 'text-blue-400 bg-blue-500/10 border-blue-500/20';
  return (
    <div className="space-y-2.5">
      {items.map((name, i) => {
        const Icon = EXPERTISE_ICONS[name] ?? Cpu;
        return (
          <motion.div
            key={name}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
            whileHover={{ x: 4 }}
            className="flex items-center gap-3 group cursor-default"
          >
            <div className={cn('w-8 h-8 rounded-lg border flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110', iconColor)}>
              <Icon size={15} />
            </div>
            <span className="text-sm text-slate-300 group-hover:text-slate-100 transition-colors duration-200 font-medium">
              {name}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

// ─── Category header badge ─────────────────────────────────────────────────

const CATEGORY_CONFIG: Record<SkillCategory, {
  label: string;
  badge: string;
  icon: React.ElementType;
  borderHover: string;
}> = {
  'AI Tools':    { label: 'AI Tools',    badge: 'border-blue-500/20 bg-blue-500/10 text-blue-400',    icon: Sparkles,     borderHover: 'hover:border-blue-500/25'   },
  'NoCode':      { label: 'NoCode',      badge: 'border-amber-500/20 bg-amber-500/10 text-amber-400',  icon: Code2,        borderHover: 'hover:border-amber-500/25'  },
  'Product':     { label: 'Product',     badge: 'border-cyan-500/20 bg-cyan-500/10 text-cyan-400',     icon: Layers,       borderHover: 'hover:border-cyan-500/25'   },
  'Engineering': { label: 'Engineering', badge: 'border-purple-500/20 bg-purple-500/10 text-purple-400', icon: Server,    borderHover: 'hover:border-purple-500/25' },
  'Management':  { label: 'Management',  badge: 'border-green-500/20 bg-green-500/10 text-green-400',  icon: Settings2,    borderHover: 'hover:border-green-500/25'  },
  'APIs':        { label: 'APIs',        badge: 'border-rose-500/20 bg-rose-500/10 text-rose-400',     icon: Zap,          borderHover: 'hover:border-rose-500/25'   },
};

const TOOL_CATEGORIES: SkillCategory[] = ['AI Tools', 'NoCode', 'APIs'];
const EXPERTISE_CATEGORIES: SkillCategory[] = ['Product', 'Engineering', 'Management'];

// ─── Main component ────────────────────────────────────────────────────────

export function Skills() {
  const byCategory = (cat: SkillCategory) =>
    skills.filter((s) => s.category === cat).map((s) => s.name);

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="My Skills"
          title="Tools, Tech &"
          titleHighlight="Expertise"
          description="A multi-disciplinary stack spanning AI, product, engineering, and operations."
        />

        {/* ── Row 1: Tool-based categories (AI Tools, NoCode, APIs) ── */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {TOOL_CATEGORIES.map((cat, ci) => {
            const cfg = CATEGORY_CONFIG[cat];
            const Icon = cfg.icon;
            const items = byCategory(cat);
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: ci * 0.08 }}
                className={cn('glass rounded-2xl p-6 transition-all duration-300', cfg.borderHover)}
              >
                {/* Header */}
                <div className="flex items-center gap-2 mb-5">
                  <div className={cn('w-7 h-7 rounded-lg border flex items-center justify-center', cfg.badge)}>
                    <Icon size={14} />
                  </div>
                  <span className={cn('px-2.5 py-1 rounded-lg border text-xs font-semibold', cfg.badge)}>
                    {cfg.label}
                  </span>
                </div>

                {/* Tool chips */}
                <div className={cn(
                  'flex flex-wrap gap-2',
                  cat === 'APIs' ? 'gap-1.5' : 'gap-2'
                )}>
                  {items.map((name) => <ToolLogo key={name} name={name} />)}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Row 2: Expertise categories (Product, Engineering, Management) ── */}
        <div className="grid md:grid-cols-3 gap-6">
          {EXPERTISE_CATEGORIES.map((cat, ci) => {
            const cfg = CATEGORY_CONFIG[cat];
            const Icon = cfg.icon;
            const items = byCategory(cat);
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: ci * 0.08 + 0.15 }}
                className={cn('glass rounded-2xl p-6 transition-all duration-300', cfg.borderHover)}
              >
                {/* Header */}
                <div className="flex items-center gap-2 mb-5">
                  <div className={cn('w-7 h-7 rounded-lg border flex items-center justify-center', cfg.badge)}>
                    <Icon size={14} />
                  </div>
                  <span className={cn('px-2.5 py-1 rounded-lg border text-xs font-semibold', cfg.badge)}>
                    {cfg.label}
                  </span>
                </div>

                {/* Expertise icon list */}
                <ExpertiseList category={cat} items={items} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
