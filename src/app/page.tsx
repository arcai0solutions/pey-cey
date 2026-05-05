import { ServicesAccordion } from "@/components/ServicesAccordion";
import { TimeDisplay } from "@/components/TimeDisplay";
import { PremiumCommodities } from "@/components/PremiumCommodities";
import { HowItWorks } from "@/components/HowItWorks";
import { GlobalLogistics } from "@/components/GlobalLogistics";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const commodities = [
  { src: "/sugar.png", alt: "Brazilian Sugar", name: "Brazilian Sugar" },
  { src: "/coffee.png", alt: "Brazilian Coffee", name: "Brazilian Coffee" },
  { src: "/tea.png", alt: "Sri Lankan Tea", name: "Sri Lankan Tea" },
  { src: "/spices.png", alt: "Sri Lankan Spices", name: "Sri Lankan Spices" },
  { src: "/corn.png", alt: "Brazilian Corn", name: "Brazilian Corn" },
  { src: "/soy.png", alt: "Brazilian Soybeans", name: "Brazilian Soybeans" },
];
const duplicatedCommodities = [...commodities, ...commodities, ...commodities, ...commodities];

const whyUsCommodities = [
  { name: "Brazilian Sugar", src: "/commodity_brazilian_sugar.png" },
  { name: "Brazilian Coffee", src: "/commodity_brazilian_coffee.png" },
  { name: "Sri Lankan Tea", src: "/commodity_sri_lankan_tea.png" },
  { name: "Sri Lankan Spices", src: "/commodity_sri_lankan_spices.png" },
  { name: "Brazilian Corn", src: "/commodity_brazilian_corn.png" },
  { name: "Brazilian Soybeans", src: "/commodity_brazilian_soybeans.png" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Wrapper */}
      <div className="relative p-[2px]">
        {/* Top-Left Logo Cutout */}
        <div className="absolute top-[2px] left-[2px] z-50 flex items-center justify-center bg-white rounded-br-[24px] pl-2 pr-3 h-[52px] sm:h-[60px] md:h-[68px]">
          <img src="/logo.jpg" alt="Pey and Cey Logo" className="h-12 sm:h-14 md:h-16 w-auto object-contain" />
          
          {/* Right Inverted Corner */}
          <svg className="absolute top-0 -right-[19px] w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M 0 0 L 0 24 C 0 10.745 10.745 0 24 0 Z" />
          </svg>
          {/* Bottom Inverted Corner */}
          <svg className="absolute -bottom-[19px] left-0 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M 0 0 L 0 24 C 0 10.745 10.745 0 24 0 Z" />
          </svg>
        </div>

        {/* Top-Right Menu & Time Cutout */}
        <div className="absolute top-[2px] right-[2px] z-50 flex items-center justify-center gap-4 bg-white rounded-bl-[24px] pr-2 pl-4 h-[52px] sm:h-[60px] md:h-[68px]">
          <TimeDisplay />
          <div className="flex cursor-pointer items-center justify-center rounded-2xl bg-black text-white p-2 sm:p-3 px-6 sm:px-8 shadow-xl transition-transform hover:scale-105 active:scale-95">
            <span className="font-semibold text-sm sm:text-base tracking-wide uppercase">
              Menu+
            </span>
          </div>
          
          {/* Left Inverted Corner */}
          <svg className="absolute top-0 -left-[19px] w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M 24 0 L 24 24 C 24 10.745 13.255 0 0 0 Z" />
          </svg>
          {/* Bottom Inverted Corner */}
          <svg className="absolute -bottom-[19px] right-0 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M 24 0 L 24 24 C 24 10.745 13.255 0 0 0 Z" />
          </svg>
        </div>

        <div className="relative h-[calc(100vh-4px)] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-3xl">
          {/* Background Video */}
          <video
            suppressHydrationWarning
            src="/hero-vid.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover z-0"
          />

          {/* Black Overlay with slight blur */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-10"></div>

          {/* Content Container */}
          <div className="relative z-20 h-full w-full flex flex-col justify-between p-8 pb-12 sm:p-12 sm:pb-16 md:p-16 md:pb-24">
            {/* Top Spacer to preserve flex-between */}
            <div className="flex w-full justify-end items-center -mt-2 sm:-mt-4">
            </div>

            {/* Bottom Text Container */}
            <div className="self-start flex flex-col text-left max-w-[90%] sm:max-w-3xl rounded-2xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-md sm:p-5 z-30">
              <h1 className="mb-5 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight font-pt-serif">
                Your Partner in Global Commodity Trade
              </h1>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light text-justify">
                Pey and Cey World Wide Sugar Trading LLC supplies high-quality sugar, coffee, tea, spices, corn, and soybeans from trusted origins in Brazil and Sri Lanka to businesses that value consistency, quality, and reliable supply.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Snapshot Section */}
      <section className="relative bg-white py-16 text-black md:py-20">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-12 px-4 md:px-6">
          <div className="text-center text-sm uppercase tracking-[0.35em] text-black/50">Performance Snapshot</div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            <div className="relative overflow-hidden flex h-full flex-col rounded-3xl border border-black/10 bg-white px-6 py-8 text-center shadow-[0_30px_120px_-80px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-1 lg:px-7 lg:py-10">
              <div className="flex h-12 items-center justify-center text-xs uppercase tracking-[0.35em] text-black/40 lg:h-14">Countries Reached</div>
              <div className="mt-4 flex items-center justify-center gap-1 text-5xl font-semibold leading-none text-black md:text-6xl"><span>25</span><span className="text-3xl text-black/40 md:text-4xl">+</span></div>
              <div className="mt-4 flex flex-1 items-start justify-center">
                <p className="text-sm text-black/60 leading-relaxed px-2">Serving international markets with carefully sourced commodities and dependable trade support.</p>
              </div>
              <span className="absolute inset-x-6 top-0 h-px" style={{ backgroundImage: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)' }}></span>
            </div>

            <div className="relative overflow-hidden flex h-full flex-col rounded-3xl border border-black/10 bg-white px-6 py-8 text-center shadow-[0_30px_120px_-80px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-1 lg:px-7 lg:py-10">
              <div className="flex h-12 items-center justify-center text-xs uppercase tracking-[0.35em] text-black/40 lg:h-14">Tons Supplied</div>
              <div className="mt-4 flex items-center justify-center gap-1 text-5xl font-semibold leading-none text-black md:text-6xl"><span>10k</span><span className="text-3xl text-black/40 md:text-4xl">+</span></div>
              <div className="mt-4 flex flex-1 items-start justify-center">
                <p className="text-sm text-black/60 leading-relaxed px-2">Moving quality commodities with consistency, reliability, and supply confidence.</p>
              </div>
            </div>

            <div className="relative overflow-hidden flex h-full flex-col rounded-3xl border border-black/10 bg-white px-6 py-8 text-center shadow-[0_30px_120px_-80px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-1 lg:px-7 lg:py-10">
              <div className="flex h-12 items-center justify-center text-xs uppercase tracking-[0.35em] text-black/40 lg:h-14">On-Time Fulfilment</div>
              <div className="mt-4 flex items-center justify-center gap-1 text-5xl font-semibold leading-none text-black md:text-6xl"><span>98</span><span className="text-3xl text-black/40 md:text-4xl">%</span></div>
              <div className="mt-4 flex flex-1 items-start justify-center">
                <p className="text-sm text-black/60 leading-relaxed px-2">Deliveries managed with a strong focus on efficiency, coordination, and client expectations.</p>
              </div>
            </div>

            <div className="relative overflow-hidden flex h-full flex-col rounded-3xl border border-black/10 bg-white px-6 py-8 text-center shadow-[0_30px_120px_-80px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-1 lg:px-7 lg:py-10">
              <div className="flex h-12 items-center justify-center text-xs uppercase tracking-[0.35em] text-black/40 lg:h-14">Trusted Partners</div>
              <div className="mt-4 flex items-center justify-center gap-1 text-5xl font-semibold leading-none text-black md:text-6xl"><span>50</span><span className="text-3xl text-black/40 md:text-4xl">+</span></div>
              <div className="mt-4 flex flex-1 items-start justify-center">
                <p className="text-sm text-black/60 leading-relaxed px-2">Building long-term relationships through transparency, reliability, and product quality.</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[36px] border border-black/10 bg-gray-50 px-6 py-8 md:px-8" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)' }}>
            <div className="absolute -left-10 top-1/2 hidden h-24 w-24 -translate-y-1/2 rotate-[40deg] rounded-full bg-[radial-gradient(circle,rgba(255,80,46,0.15),rgba(255,80,46,0))] opacity-80 md:block" aria-hidden="true"></div>
            <div className="absolute -right-12 top-1/2 hidden h-20 w-20 -translate-y-1/2 rotate-45 rounded-full bg-[radial-gradient(circle,rgba(255,80,46,0.15),rgba(255,80,46,0))] opacity-80 md:block" aria-hidden="true"></div>

            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-black/50">
              <span className="inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: '#16428c' }}></span>
              Trading Commodities
            </div>

            <div className="mt-8 overflow-hidden">
              <div className="flex min-w-max gap-12 sm:gap-20 whitespace-nowrap pt-2 animate-[heroTicker_40s_linear_infinite]">
                {duplicatedCommodities.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-center gap-4 opacity-70 transition-opacity duration-300 hover:opacity-100 group">
                    <img src={item.src} alt={item.alt} className="h-10 w-10 sm:h-12 sm:w-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" loading="lazy" />
                    <span className="text-lg sm:text-xl font-medium text-black/80">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="relative overflow-hidden bg-[#050505] py-24 text-white md:py-28">
        <div className="relative flex w-full flex-col gap-16 px-4 md:px-8 xl:px-16 2xl:px-24 lg:gap-20">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
              <span className="h-1 w-8 rounded-full bg-[#16428c]"></span>
              <span className="text-white">002</span>
              <span>Why choose us</span>
            </div>
            <div className="space-y-4">
              <h2 className="text-[44px] font-semibold tracking-tight text-white md:text-5xl lg:text-[56px] pl-4 md:pl-0">
                <span className="text-white">Why Businesses </span>
                <span className="text-white/70">Choose Us.</span>
              </h2>
              <p className="max-w-3xl text-base text-white/60 md:text-lg pl-4 md:pl-0 text-justify">
                At Pey and Cey, we specialize in supplying premium agricultural products tailored for global trade. From Brazilian sugar and coffee to Sri Lankan tea and spices, every product is carefully selected for quality, origin, and market value.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 sm:p-10 lg:col-span-8">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                </div>
                <div className="relative flex h-full flex-col justify-between gap-10">
                  <div className="max-w-xl space-y-4">
                    <h3 className="text-3xl font-semibold md:text-[36px]">Reliable Sourcing</h3>
                    <p className="text-sm text-white/60 md:text-base">
                      We understand that in commodity trading, trust matters as much as quality. Our clients choose Pey and Cey because we focus on reliable sourcing, transparent business values, and products that meet high expectations in both taste and performance.
                    </p>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-4">
                    <div className="flex min-w-max gap-4 animate-[heroTicker_40s_linear_infinite]" aria-hidden="true">
                      {[...whyUsCommodities, ...whyUsCommodities, ...whyUsCommodities].map((item, idx) => (
                        <div key={idx} className="group relative flex w-[210px] shrink-0 flex-col gap-3">
                          <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-white/5">
                            <img src={item.src} alt={item.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/40 opacity-0 transition duration-500 group-hover:opacity-100"></div>
                          </div>
                          <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/60">
                            <span>{item.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] lg:col-span-4">
                <div className="absolute inset-0">
                  <img src="/cargo_ship_logistics.png" alt="Global Trade Shipping" className="h-full w-full object-cover grayscale opacity-80 mix-blend-luminosity" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/80 via-[#0a0a0a]/50 to-[#0a0a0a]/90"></div>
                </div>
                <div className="relative flex h-full flex-col justify-between gap-6 p-8 sm:p-10">
                  <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.4em] text-white/80">
                    <span>Trust & Value</span>
                    <span className="h-2 w-2 rounded-full bg-[#16428c] shadow-[0_0_10px_2px_#16428c]"></span>
                  </div>
                  <div>
                    <div className="text-4xl font-semibold leading-tight sm:text-[46px] text-white">More than<br />Products</div>
                    <p className="mt-4 max-w-xs text-sm text-white/80 leading-relaxed">Built on ethics, responsibility, integrity, and food safety, we aim to deliver more than products. We deliver confidence, consistency, and long-term business value.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:auto-rows-[minmax(0,1fr)]">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] lg:col-span-5">
                <div className="absolute inset-0">
                  <video
                    suppressHydrationWarning
                    src="/vid-2.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover grayscale opacity-70 mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_48%,rgba(10,10,10,0.3),rgba(10,10,10,0.95))]"></div>
                </div>
                <div className="relative flex h-full flex-col justify-center gap-8 p-10">
                  <div className="space-y-4">
                    <div className="max-w-[420px] space-y-3">
                      <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/80 backdrop-blur-sm">
                        Global Reach
                        <span className="h-1 w-6 rounded-full bg-[#16428c]"></span>
                      </div>
                      <h3 className="text-4xl font-semibold uppercase leading-tight sm:text-[48px] text-white pt-2">Dependable<br />Supplier</h3>
                      <p className="text-sm text-white/80 md:text-base leading-relaxed">Whether you are looking for a dependable supplier of sugar, coffee, tea, spices, corn, or soybeans, we are committed to helping your business source with confidence.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6 lg:col-span-3 lg:h-full">
                <div className="flex h-full flex-1 flex-col justify-between rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 transition-colors hover:bg-[#111]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-[#16428c]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 opacity-90" aria-hidden="true"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    </span>
                    <span className="hidden h-px flex-1 bg-white/10 sm:block"></span>
                  </div>
                  <div className="space-y-2 mt-6">
                    <h3 className="text-xl font-semibold md:text-2xl text-white">Market Value</h3>
                    <p className="text-sm text-white/60 leading-relaxed">Delivering long-term business value in every transaction.</p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/40">
                    <span className="h-1 w-8 rounded-full bg-[#16428c]"></span>
                    <span>Value</span>
                  </div>
                </div>

                <div className="flex h-full flex-1 flex-col justify-between rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 transition-colors hover:bg-[#111]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-[#16428c]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 opacity-90" aria-hidden="true"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
                    </span>
                    <span className="hidden h-px flex-1 bg-white/10 sm:block"></span>
                  </div>
                  <div className="space-y-2 mt-6">
                    <h3 className="text-xl font-semibold md:text-2xl text-white">Food Safety</h3>
                    <p className="text-sm text-white/60 leading-relaxed">Strict adherence to quality and food safety standards.</p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/40">
                    <span className="h-1 w-8 rounded-full bg-[#16428c]"></span>
                    <span>Quality</span>
                  </div>
                </div>
              </div>

              <div className="relative flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 lg:col-span-4">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold md:text-[28px] text-white">Let’s Connect</h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Let’s build a reliable supply partnership. Get in touch with our team to discuss product availability, sourcing requirements, and business inquiries.
                  </p>
                </div>

                <div className="flex flex-col gap-3 mt-4">
                  <div className="max-w-[85%] rounded-2xl px-5 py-3 text-sm shadow-xl self-start bg-white/10 border border-white/5 text-white/90">Do you have Brazilian sugar available for immediate shipment?</div>
                  <div className="max-w-[85%] rounded-2xl px-5 py-3 text-sm shadow-xl self-end bg-[#16428c] text-white">Yes, we can arrange shipment this week.</div>
                  <div className="max-w-[85%] rounded-2xl px-5 py-3 text-sm shadow-xl self-start bg-white/10 border border-white/5 text-white/90">Great, let's proceed to the contract.</div>
                </div>

                <div className="mt-auto pt-6">
                  <a href="mailto:info@peyandcey.com" className="group inline-flex w-full items-center justify-between gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-white/10">
                    Contact Sales
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#16428c] transition-all duration-300 group-hover:translate-x-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative overflow-hidden bg-white py-24 text-black md:py-28 border-t border-black/5">
        <div className="relative flex w-full flex-col gap-8 lg:flex-row lg:items-end lg:justify-between px-4 md:px-8 xl:px-16 2xl:px-24">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between w-full">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-black/60">
                <span className="h-1 w-8 rounded-full bg-[#16428c]" aria-hidden="true"></span>
                <span className="text-black">004</span>
                <span>Services</span>
              </div>
              <div className="space-y-3">
                <h2 className="text-[44px] font-semibold tracking-tight md:text-5xl lg:text-[56px]">
                  Services<span className="text-[#16428c]">.</span>
                </h2>
              </div>
            </div>
            <p className="max-w-xl text-sm text-black/60 md:text-base lg:max-w-lg mb-2">
              Explore how our sourcing solutions shape strong supply chains, create consistent experiences, and deliver lasting value across international borders.
            </p>
          </div>
        </div>

        <div className="px-4 md:px-8 xl:px-16 2xl:px-24">

          <ServicesAccordion />
        </div>
      </section>

      <PremiumCommodities />
      <HowItWorks />
      <GlobalLogistics />
      <CTA />
      <Footer />
    </main>
  );
}
