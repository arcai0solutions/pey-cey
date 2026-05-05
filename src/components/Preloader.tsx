"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface PreloaderProps {
    onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const leftDoorRef = useRef<HTMLDivElement>(null);
    const rightDoorRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Disable scrolling when preloader is active
        document.body.style.overflow = "hidden";

        return () => {
            // Re-enable scrolling when preloader unmounts
            document.body.style.overflow = "auto";
        };
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                onComplete();
            }
        });

        // 1. Initial State Setup
        gsap.set(".trade-lines path", { strokeDasharray: 1000, strokeDashoffset: 1000 });
        gsap.set(".node", { scale: 0, opacity: 0, transformOrigin: "center center" });
        gsap.set(".node-text", { opacity: 0, y: 10 });
        gsap.set(".brand-text .char", { y: 60, opacity: 0, filter: "blur(12px)" });
        gsap.set(".tagline", { opacity: 0, y: 20, filter: "blur(8px)" });
        gsap.set(".counter-wrapper", { opacity: 0, y: 20 });

        const counterObj = { value: 0 };

        // 2. Timeline Animation

        // Fade in counter
        tl.to(".counter-wrapper", { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 0.2);

        // Animate counter from 0 to 100 during the network drawing
        tl.to(counterObj, {
            value: 100,
            duration: 3.5,
            ease: "power2.inOut",
            onUpdate: () => {
                setProgress(Math.round(counterObj.value));
            }
        }, 0.5);

        // Nodes pop in sequentially as ports
        tl.to(".node", {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(3)"
        }, 0.4)
            .to(".node-text", {
                opacity: 0.8,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
            }, 0.5)

            // Draw the precise shipping routes between ports
            .to(".trade-lines path", {
                strokeDashoffset: 0,
                duration: 2.0,
                ease: "power2.inOut",
                stagger: 0.15
            }, 0.7)

            // Fade out counter
            .to(".counter-wrapper", { opacity: 0, duration: 0.5, ease: "power2.inOut" }, 3.5)

            // Disappear trade routes and network BEFORE text appears
            .to([".trade-lines", ".route-bg", ".node", ".node-text"], {
                scale: 0.9,
                opacity: 0,
                duration: 0.6,
                ease: "power3.inOut"
            }, 3.5)

            // Brand logo smooth text reveal starts AFTER network disappears
            .to(".brand-text .char", {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                duration: 1.0,
                stagger: 0.05,
                ease: "power4.out"
            }, 4.0)

            // Tagline smoothly sharpens
            .to(".tagline", {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 1.0,
                ease: "power2.out"
            }, 4.5)

            // Rapid collapse sequence of the text elements before vault opens
            .to([".brand-text", ".tagline", ".glowing-particles"], {
                scale: 0.9,
                opacity: 0,
                duration: 0.6,
                ease: "power3.inOut",
                stagger: {
                    amount: 0.1,
                    from: "center"
                }
            }, 6.0)

            // The Vault Door Split Exit (Cinematic Wipe)
            .to(leftDoorRef.current, { xPercent: -100, duration: 1.2, ease: "expo.inOut" }, 6.4)
            .to(rightDoorRef.current, { xPercent: 100, duration: 1.2, ease: "expo.inOut" }, 6.4);

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none perspective-[1000px]">
            {/* Vault Doors */}
            <div ref={leftDoorRef} className="absolute inset-y-0 left-0 w-1/2 bg-[#050505] pointer-events-auto z-10 border-r border-[#16428c]/20 shadow-[20px_0_60px_rgba(0,0,0,0.8)]" />
            <div ref={rightDoorRef} className="absolute inset-y-0 right-0 w-1/2 bg-[#050505] pointer-events-auto z-10 border-l border-[#16428c]/20 shadow-[-20px_0_60px_rgba(0,0,0,0.8)]" />

            {/* Content Container */}
            <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 pointer-events-none h-full overflow-hidden">

                {/* Glowing Particles for a subtle elegant effect */}
                <div className="glowing-particles absolute inset-0 opacity-50 mix-blend-screen pointer-events-none">
                    <div className="absolute top-[25%] left-[30%] w-1.5 h-1.5 bg-[#3a70d4] rounded-full shadow-[0_0_12px_3px_#3a70d4] animate-[pulse_3s_ease-in-out_infinite]"></div>
                    <div className="absolute top-[65%] left-[75%] w-2 h-2 bg-[#16428c] rounded-full shadow-[0_0_15px_4px_#16428c] animate-[pulse_4s_ease-in-out_infinite_1s]"></div>
                    <div className="absolute top-[35%] left-[80%] w-1 h-1 bg-white rounded-full shadow-[0_0_8px_2px_#ffffff] animate-[pulse_2s_ease-in-out_infinite_0.5s]"></div>
                    <div className="absolute top-[75%] left-[25%] w-1.5 h-1.5 bg-[#3a70d4] rounded-full shadow-[0_0_10px_2px_#3a70d4] animate-[pulse_3.5s_ease-in-out_infinite_1.5s]"></div>
                    <div className="absolute top-[50%] left-[10%] w-1 h-1 bg-white/70 rounded-full shadow-[0_0_8px_1px_#ffffff] animate-[pulse_2.5s_ease-in-out_infinite_0.2s]"></div>
                </div>

                {/* Perfectly Symmetrical Hub-and-Spoke Shipping Network */}
                <div className="absolute inset-0 flex items-center justify-center opacity-60 mix-blend-screen">
                    <svg viewBox="0 0 1000 600" className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[1000px]">

                        {/* Faint Background Guide Lines */}
                        <g className="route-bg" stroke="#16428c" strokeWidth="1.5" fill="none" strokeDasharray="4 8" opacity="0.3">
                            {/* Left Fan (From Brazil) */}
                            <path d="M 350 300 Q 250 200 150 150" />
                            <path d="M 350 300 Q 225 250 100 300" />
                            <path d="M 350 300 Q 250 400 150 450" />

                            {/* Right Fan (From Sri Lanka) */}
                            <path d="M 650 300 Q 750 200 850 150" />
                            <path d="M 650 300 Q 775 250 900 300" />
                            <path d="M 650 300 Q 750 400 850 450" />
                        </g>

                        {/* Animated Solid Shipping Routes (Drawn Outwards) */}
                        <g className="trade-lines" stroke="#3a70d4" strokeWidth="2.5" fill="none" strokeLinecap="round">
                            {/* Left Fan (Origin: Brazil) */}
                            <path d="M 350 300 Q 250 200 150 150" className="drop-shadow-[0_0_8px_#3a70d4]" />
                            <path d="M 350 300 Q 225 250 100 300" className="drop-shadow-[0_0_8px_#3a70d4]" />
                            <path d="M 350 300 Q 250 400 150 450" className="drop-shadow-[0_0_8px_#3a70d4]" />

                            {/* Right Fan (Origin: Sri Lanka) */}
                            <path d="M 650 300 Q 750 200 850 150" className="drop-shadow-[0_0_8px_#3a70d4]" />
                            <path d="M 650 300 Q 775 250 900 300" className="drop-shadow-[0_0_8px_#3a70d4]" />
                            <path d="M 650 300 Q 750 400 850 450" className="drop-shadow-[0_0_8px_#3a70d4]" />
                        </g>

                        {/* Network Nodes & Typography */}
                        <g className="nodes" fill="#ffffff">
                            {/* === CENTRAL HUBS === */}
                            {/* BRAZIL */}
                            <circle cx="350" cy="300" r="8" className="node drop-shadow-[0_0_15px_#fff]" fill="#fff" />
                            <circle cx="350" cy="300" r="22" className="node" fill="none" stroke="#fff" strokeWidth="1" opacity="0.4" />
                            <text x="350" y="345" fill="#fff" fontSize="12" textAnchor="middle" className="node-text tracking-[0.3em] font-bold drop-shadow-[0_0_5px_#16428c]">BRAZIL</text>

                            {/* SRI LANKA */}
                            <circle cx="650" cy="300" r="8" className="node drop-shadow-[0_0_15px_#fff]" />
                            <circle cx="650" cy="300" r="22" className="node" fill="none" stroke="#fff" strokeWidth="1" opacity="0.4" />
                            <text x="650" y="345" fill="#fff" fontSize="12" textAnchor="middle" className="node-text tracking-[0.3em] font-bold drop-shadow-[0_0_5px_#16428c]">SRI LANKA</text>

                            {/* === WESTERN SPOKES (From Brazil) === */}
                            <circle cx="150" cy="150" r="5" className="node drop-shadow-[0_0_10px_#fff]" />
                            <text x="150" y="130" fill="#fff" fontSize="10" textAnchor="middle" className="node-text tracking-[0.2em]">N. AMERICA</text>

                            <circle cx="100" cy="300" r="5" className="node drop-shadow-[0_0_10px_#fff]" />
                            <text x="80" y="303" fill="#fff" fontSize="10" textAnchor="end" className="node-text tracking-[0.2em]">EUROPE</text>

                            <circle cx="150" cy="450" r="5" className="node drop-shadow-[0_0_10px_#fff]" />
                            <text x="150" y="470" fill="#fff" fontSize="10" textAnchor="middle" className="node-text tracking-[0.2em]">S. AMERICA</text>

                            {/* === EASTERN SPOKES (From Sri Lanka) === */}
                            <circle cx="850" cy="150" r="5" className="node drop-shadow-[0_0_10px_#fff]" />
                            <text x="850" y="130" fill="#fff" fontSize="10" textAnchor="middle" className="node-text tracking-[0.2em]">ASIA</text>

                            <circle cx="900" cy="300" r="5" className="node drop-shadow-[0_0_10px_#fff]" />
                            <text x="920" y="303" fill="#fff" fontSize="10" textAnchor="start" className="node-text tracking-[0.2em]">MIDDLE EAST</text>

                            <circle cx="850" cy="450" r="5" className="node drop-shadow-[0_0_10px_#fff]" />
                            <text x="850" y="470" fill="#fff" fontSize="10" textAnchor="middle" className="node-text tracking-[0.2em]">OCEANIA</text>
                        </g>
                    </svg>
                </div>

                {/* Foreground Brand Elements */}
                <div className="brand-container text-center flex flex-col items-center z-30">

                    {/* Text Logo Reveal */}
                    <h1 className="brand-text text-5xl md:text-7xl lg:text-[90px] font-pt-serif font-black tracking-tight text-white flex items-center justify-center mb-6 overflow-hidden py-2 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                        {["P", "E", "Y"].map((letter, i) => (
                            <span key={`p-${i}`} className="char inline-block will-change-transform">{letter}</span>
                        ))}
                        <span className="text-[#16428c] mx-4 md:mx-8 font-light text-5xl md:text-[80px] char inline-block will-change-transform drop-shadow-[0_0_15px_rgba(22,66,140,0.5)]">&</span>
                        {["C", "E", "Y"].map((letter, i) => (
                            <span key={`c-${i}`} className="char inline-block will-change-transform">{letter}</span>
                        ))}
                    </h1>

                    {/* Elegant Typography */}
                    <div className="overflow-hidden">
                        <p className="tagline text-sm md:text-base lg:text-lg text-white/90 tracking-[0.3em] uppercase font-light will-change-transform drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                            Connecting Markets. Delivering Excellence.
                        </p>
                    </div>
                </div>

                {/* Premium Percentage Counter */}
                <div className="counter-wrapper absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center z-30">
                    <span className="text-[#3a70d4] text-[10px] md:text-xs uppercase tracking-[0.4em] mb-2 font-semibold">Initiating Trade Network</span>
                    <div className="text-4xl md:text-5xl font-light text-white font-mono tracking-wider drop-shadow-[0_0_15px_rgba(58,112,212,0.6)] flex items-end">
                        <span>{progress.toString().padStart(2, '0')}</span>
                        <span className="text-[#16428c] text-2xl md:text-3xl ml-1 mb-1">%</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
