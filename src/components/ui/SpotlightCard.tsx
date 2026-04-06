'use client';

import { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  as?: React.ElementType;
  tilt?: boolean;
  tiltMax?: number;
  onClick?: () => void;
}

/**
 * A card wrapper that shows a radial spotlight glow following the cursor
 * and optionally applies a subtle 3D tilt effect.
 */
export function SpotlightCard({
  children,
  className,
  spotlightColor = 'rgba(59,130,246,0.08)',
  as: Tag = 'div',
  tilt = false,
  tiltMax = 8,
  onClick,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [transform, setTransform] = useState('perspective(800px) rotateX(0deg) rotateY(0deg)');

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setPos({ x, y });

      if (tilt) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -tiltMax;
        const rotateY = ((x - centerX) / centerX) * tiltMax;
        setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
      }
    },
    [tilt, tiltMax]
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (tilt) {
      setTransform('perspective(800px) rotateX(0deg) rotateY(0deg)');
    }
  }, [tilt]);

  const MotionTag = motion.create(Tag as React.ElementType);

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={cn('relative overflow-hidden', className)}
      suppressHydrationWarning
      style={{
        transform: tilt ? transform : undefined,
        transition: tilt ? 'transform 0.15s ease-out' : undefined,
      }}
    >
      {/* Spotlight gradient */}
      <div
        className="pointer-events-none absolute -inset-px z-10 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      {/* Border glow */}
      <div
        className="pointer-events-none absolute -inset-px z-10 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(59,130,246,0.12), transparent 40%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />
      {children}
    </MotionTag>
  );
}
