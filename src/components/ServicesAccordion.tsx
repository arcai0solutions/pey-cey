"use client";

import { useState } from "react";

const services = [
    {
        id: "001",
        title: "Global Commodity Sourcing",
        content: "We source selected commodities from trusted origins, with a focus on quality, consistency, and long-term supply value.",
    },
    {
        id: "002",
        title: "Wholesale Supply",
        content: "We support bulk and business-to-business supply requirements for sugar, coffee, tea, spices, corn, and soybeans.",
    },
    {
        id: "003",
        title: "Import and Export Support",
        content: "We help connect products from source markets to destination markets through structured and reliable trade coordination.",
    },
    {
        id: "004",
        title: "Supplier and Buyer Coordination",
        content: "We work closely with suppliers and buyers to support smooth communication, clear expectations, and dependable business relationships.",
    },
    {
        id: "005",
        title: "Quality-Focused Product Selection",
        content: "Every product we offer is chosen with attention to origin, quality standards, and market suitability.",
    },
];

export function ServicesAccordion() {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="mt-16 divide-y divide-black/10 border-y border-black/10" data-orientation="vertical">
            {services.map((service) => {
                const isOpen = openId === service.id;

                return (
                    <div key={service.id} className="border-black/10">
                        <h3>
                            <button
                                type="button"
                                aria-expanded={isOpen}
                                className="group flex w-full flex-col gap-6 py-8 text-left transition-colors duration-300 hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16428c] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                                onClick={() => toggleAccordion(service.id)}
                            >
                                <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
                                    <div className="flex w-full items-start gap-4 md:items-center">
                                        <div className="flex flex-1 min-w-0 items-baseline gap-3 md:gap-6">
                                            <div className="flex items-baseline gap-2 text-xs uppercase tracking-[0.35em] text-black/60">
                                                <span className="text-base font-medium text-black md:text-lg">{service.id}</span>
                                                <span className="text-[#16428c]">/</span>
                                            </div>
                                            <h3 className="min-w-0 text-2xl font-semibold leading-tight text-black md:text-[32px]">
                                                {service.title}
                                            </h3>
                                        </div>

                                        <span
                                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/15 transition-colors duration-300 ${isOpen ? "bg-[#16428c] text-white border-[#16428c]" : "bg-black/5 text-black group-hover:bg-black/10"
                                                }`}
                                            aria-hidden="true"
                                        >
                                            {isOpen ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus h-5 w-5">
                                                    <path d="M5 12h14"></path>
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus h-5 w-5">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5v14"></path>
                                                </svg>
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </button>
                        </h3>

                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100 mb-8" : "max-h-0 opacity-0"
                                }`}
                        >
                            <div className="pl-4 md:pl-28 md:pr-16">
                                <p className="text-black/70 text-base md:text-lg leading-relaxed">{service.content}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
