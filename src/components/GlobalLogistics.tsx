import React from 'react';

export function GlobalLogistics() {
  return (
    <section id="logistics" className="relative overflow-hidden bg-[#16428c] py-24 text-white md:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img src="/agricultural_fields_aerial.png" alt="Fields" className="h-full w-full object-cover mix-blend-luminosity grayscale" />
        <div className="absolute inset-0 bg-[#16428c]/80 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] z-0 mix-blend-overlay"></div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col gap-12 px-4 md:px-8 xl:px-16 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col gap-8 max-w-xl">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
              <span className="h-1 w-8 rounded-full bg-white"></span>
              <span>007</span>
              <span>Global Operations</span>
            </div>
            
            <h2 className="text-[44px] font-semibold tracking-tight md:text-5xl lg:text-[56px] leading-tight">
              Bridging Continents. <br />
              <span className="text-white/60">Delivering Value.</span>
            </h2>
            
            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-light">
              Our strategic hubs in Brazil and Sri Lanka empower us to secure the finest agricultural outputs. Combined with an extensive logistics network, we ensure your commodities arrive safely, efficiently, and exactly when you need them.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/10 mt-4">
              <div>
                <div className="text-4xl font-bold mb-2 font-pt-serif">2<span className="text-white/50 text-2xl"> Origins</span></div>
                <div className="text-sm text-white/60 uppercase tracking-widest">Brazil & Sri Lanka</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 font-pt-serif">25<span className="text-white/50 text-2xl">+</span></div>
                <div className="text-sm text-white/60 uppercase tracking-widest">Global Markets</div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] w-full rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl">
            <img src="/cargo_ship_logistics.png" alt="Logistics" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16428c]/80 via-transparent to-transparent"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
