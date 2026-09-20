"use client";

import { useRef } from "react";
import { motion, useInView, type Transition } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ease: Transition["ease"] = [0.22, 1, 0.36, 1];

const SERVICE_FEATURES: Record<string, string[]> = {
  shopify: ["Custom Liquid 2.0 Themes", "Headless Checkout Integration", "Sub-Second Page Load Optimization"],
  "meta-ads": ["Creative Testing Framework", "Full-Funnel ROAS Scaling", "CPA & CAC Optimization"],
  "google-ads": ["High-Intent Search Campaigns", "Performance Max Setup", "Custom Attribution Modeling"],
  nextjs: ["Next.js 15 App Router", "Server Components & Edge DB", "High-Converting UI/UX"],
  mobile: ["Cross-Platform iOS & Android", "Offline Sync & Real-Time Data", "App Store Publishing"],
  scaling: ["Custom CRM & Automations", "Digital Product Packaging", "Scalable Infrastructure"],
};

export function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-24 sm:py-32 relative overflow-hidden bg-[#07080C]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease } as Transition}
          className="mb-16 sm:mb-20 text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-xs font-bold text-[#10B981] uppercase tracking-[0.25em] mb-3 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10">
            Core Capabilities
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Services Built to Move Fast &amp;{" "}
            <span className="bg-gradient-to-r from-[#10B981] via-[#06B6D4] to-blue-400 bg-clip-text text-transparent">
              Generate Revenue.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Every service we offer is engineered to solve core business bottlenecks, increase conversions, and compound digital growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            const features = SERVICE_FEATURES[service.id] || [];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease,
                } as Transition}
                className="group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:border-emerald-500/40 hover:bg-white/[0.06] hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.2)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Header & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={cn(
                      "h-14 w-14 rounded-2xl border border-white/10 flex items-center justify-center bg-gradient-to-br shadow-inner",
                      service.color
                    )}>
                      <Icon size={26} className="text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <Link
                      href={`/services/${service.id}`}
                      className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:border-emerald-500/50 group-hover:bg-emerald-500/20 transition-all"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Feature Checkmarks */}
                  <ul className="space-y-2.5 mb-8 border-t border-white/5 pt-6">
                    {features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                        <div className="h-4 w-4 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                          <Check size={10} strokeWidth={3} />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <Link
                  href={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 group-hover:translate-x-1 transition-all"
                >
                  Explore Details &amp; Case Study &rarr;
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
