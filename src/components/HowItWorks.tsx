"use client";

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Direct Sourcing",
    description: "We partner directly with established agricultural producers in Brazil and Sri Lanka.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    )
  },
  {
    number: "02",
    title: "Quality Assurance",
    description: "Rigorous testing and inspection guarantee our commodities meet strict international standards.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>
    )
  },
  {
    number: "03",
    title: "Global Logistics",
    description: "End-to-end supply chain management ensuring efficient port-to-port or door-to-door delivery.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect width="16" height="16" x="4" y="4" rx="2"/><path d="M2 8h20"/><path d="M2 16h20"/></svg>
    )
  },
  {
    number: "04",
    title: "Fulfillment",
    description: "On-time arrival and complete documentation handover for a seamless procurement experience.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M20 6 9 17l-5-5"/></svg>
    )
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

export function HowItWorks() {
  return (
    <section id="process" className="relative bg-[#f8f9fa] py-24 text-black md:py-32">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-16 px-4 md:px-8 xl:px-16 2xl:px-24">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="flex flex-col gap-6 max-w-2xl">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-black/50">
              <span className="h-1 w-8 rounded-full bg-[#16428c]"></span>
              <span className="text-black">006</span>
              <span>How It Works</span>
            </div>
            <h2 className="text-[44px] font-semibold tracking-tight text-black md:text-5xl lg:text-[56px] leading-tight">
              A Seamless <span className="text-[#16428c]">Supply Chain.</span>
            </h2>
          </div>
          <p className="max-w-md text-base text-black/60 md:text-lg mb-2">
            We simplify global commodity trading by managing every step from the origin farm to your final destination.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative mt-8"
        >
          {/* Animated Connecting line for desktop */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-px bg-black/10 z-0 origin-left"
          ></motion.div>
          
          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="group relative z-10 flex flex-col gap-6 rounded-3xl bg-white p-8 border border-black/5 shadow-sm transition-colors duration-300"
            >
              <div className="flex justify-between items-start">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 shadow-sm text-[#16428c] border border-black/5 transition-colors group-hover:bg-[#16428c] group-hover:text-white">
                  {step.icon}
                </div>
                <span className="text-4xl font-black text-black/5 transition-colors group-hover:text-black/10 font-pt-serif">{step.number}</span>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-semibold text-black">{step.title}</h3>
                <p className="text-sm text-black/60 leading-relaxed">{step.description}</p>
              </div>

              {/* Animated Arrow between cards */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-[60px] -right-[12px] w-[24px] z-20 items-center justify-center translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + idx * 0.2 }}
                  >
                    <motion.div
                      animate={{ x: [-4, 4, -4] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#16428c]/60">
                        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                      </svg>
                    </motion.div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
