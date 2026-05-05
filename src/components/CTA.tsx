import React from 'react';

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white md:py-32 border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#16428c]/20 rounded-full blur-[120px] z-0 pointer-events-none"></div>
      
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-8 text-center px-4">
        <h2 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl font-pt-serif">
          Secure Your Supply Chain Today.
        </h2>
        <p className="max-w-2xl text-lg text-white/60 md:text-xl font-light">
          Partner with Pey and Cey for reliable, high-quality commodity trading. Let's discuss your sourcing requirements.
        </p>
        
        <div className="mt-8">
          <a href="mailto:info@peyandcey.com" className="group relative inline-flex items-center justify-center gap-4 overflow-hidden rounded-full bg-white px-8 py-5 text-sm font-bold uppercase tracking-[0.2em] text-black transition-all hover:scale-105 active:scale-95">
            <span className="relative z-10">Contact Our Team</span>
            <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
            <div className="absolute inset-0 bg-gray-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
