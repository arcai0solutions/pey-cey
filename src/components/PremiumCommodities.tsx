"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const initialProducts = [
  { id: "sugar", name: "Brazilian Sugar", category: "ICUMSA 45 & VHP", src: "/commodity_brazilian_sugar.png" },
  { id: "coffee", name: "Brazilian Coffee", category: "Arabica & Robusta", src: "/commodity_brazilian_coffee.png" },
  { id: "tea", name: "Sri Lankan Tea", category: "Ceylon Black & Green", src: "/commodity_sri_lankan_tea.png" },
  { id: "soybeans", name: "Brazilian Soybeans", category: "High Protein", src: "/commodity_brazilian_soybeans.png" },
  { id: "corn", name: "Brazilian Corn", category: "Yellow Corn (Maize)", src: "/commodity_brazilian_corn.png" },
  { id: "spices", name: "Sri Lankan Spices", category: "Cinnamon, Cloves, Pepper", src: "/commodity_sri_lankan_spices.png" },
];

export function PremiumCommodities() {
  const [items, setItems] = useState(initialProducts);

  const handleSwap = (index: number) => {
    if (index === 0) return; // Already featured
    const newItems = [...items];
    const clickedItem = newItems[index];
    
    // Swap the clicked item with the first item
    newItems[index] = newItems[0];
    newItems[0] = clickedItem;
    
    setItems(newItems);
  };

  return (
    <section id="products" className="relative bg-[#050505] py-16 text-white md:py-20 border-t border-white/5">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-10 px-4 md:px-8 xl:px-16 2xl:px-24">
        {/* Header */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
            <span className="h-1 w-8 rounded-full bg-[#16428c]"></span>
            <span className="text-white">005</span>
            <span>Premium Portfolio</span>
          </div>
          <h2 className="text-[44px] font-semibold tracking-tight text-white md:text-5xl lg:text-[56px] leading-tight">
            Our Core <span className="text-white/60">Commodities.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[180px]">
          {items.map((product, idx) => {
            const isFeatured = idx === 0;
            const gridClasses = isFeatured 
              ? "md:col-span-8 md:row-span-2 h-[280px] md:h-auto" 
              : "md:col-span-4 md:row-span-1 h-[140px] md:h-auto cursor-pointer";

            return (
              <motion.div 
                layout
                key={product.id}
                onClick={() => handleSwap(idx)}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className={`group relative overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/10 ${gridClasses}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={product.src} 
                    alt={product.name} 
                    className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/40 to-transparent"></div>
                  {!isFeatured && (
                    <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-transparent"></div>
                  )}
                </div>
                
                {/* Content */}
                <div className={`relative flex h-full flex-col justify-end p-6 ${isFeatured ? 'sm:p-8' : 'sm:p-6'}`}>
                  <div className={`transition-transform duration-500 ${isFeatured ? 'translate-y-4 group-hover:translate-y-0' : ''}`}>
                    
                    <h3 className={`font-medium tracking-tight text-white font-pt-serif ${isFeatured ? 'text-3xl sm:text-4xl' : 'text-xl sm:text-2xl'}`}>
                      {product.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
