'use client';

import Image from 'next/image';

export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 items-start sm:flex-row sm:items-center sm:justify-between">
          {/* Brand — avatar + wordmark, matches Navbar */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2 cursor-pointer group"
            suppressHydrationWarning
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-blue-500/40 group-hover:border-blue-500/70 transition-all duration-300">
              <Image
                src="/images/Gemini_Generated_Image_lfzuf4lfzuf4lfzu.png"
                alt="Douglas Gouveia"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-col leading-none">
              <div className="flex items-baseline gap-0.5">
                <span className="text-slate-100 font-bold text-sm tracking-tight">DG</span>
                <span className="gradient-text text-sm font-bold">.</span>
              </div>
              <span className="text-[9px] font-semibold tracking-widest text-slate-500 uppercase whitespace-nowrap group-hover:text-slate-400 transition-colors duration-200">AI &amp; NoCode Developer</span>
            </div>
          </button>

          {/* Copyright */}
          <p className="text-xs text-slate-600">
            © 2026 Douglas Gouveia · All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
