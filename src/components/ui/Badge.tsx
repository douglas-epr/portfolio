'use client';

import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'cyan' | 'amber' | 'ghost' | 'tool';
  className?: string;
}

export function Badge({ children, variant = 'blue', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        {
          'bg-blue-500/10 text-blue-400 border border-blue-500/20': variant === 'blue',
          'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20': variant === 'cyan',
          'bg-amber-500/10 text-amber-400 border border-amber-500/20': variant === 'amber',
          'bg-white/5 text-slate-400 border border-white/10': variant === 'ghost',
          'bg-slate-800 text-slate-300 border border-slate-700 text-[11px]': variant === 'tool',
        },
        className
      )}
    >
      {children}
    </span>
  );
}
