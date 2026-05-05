import React from 'react';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col px-4 md:px-8 xl:px-16 2xl:px-24">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="flex items-center justify-center rounded-2xl bg-white p-2 shadow-xl w-fit">
              <img src="/logo.jpg" alt="Pey and Cey Logo" className="h-10 w-auto object-contain" />
            </div>
            <p className="max-w-md text-sm text-white/50 leading-relaxed">
              Pey and Cey World Wide Sugar Trading LLC specializes in sourcing and supplying high-quality agricultural commodities from Brazil and Sri Lanka to international markets.
            </p>
          </div>
          
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#16428c]">Navigation</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#16428c]">Contact</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              <li>info@peyandcey.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Global Operations Team</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Pey and Cey World Wide Sugar Trading LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
