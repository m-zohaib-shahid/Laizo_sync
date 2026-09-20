"use client";

import { useRef } from "react";
import { motion, useInView, type Transition } from "framer-motion";
import { RECENT_WORK } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ArrowUpRight, TrendingUp, Sparkles } from "lucide-react";
import Link from "next/link";

const ease: Transition["ease"] = [0.22, 1, 0.36, 1];

const PROJECT_METRICS: Record<string, string> = {
  "shopify-rebuild": "+28% Conversion Rate Lift",
  "saas-platform": "99 Lighthouse Speed Score",
  "ads-management": "4.8x ROAS ($25k/mo spend)",
  "mobile-app": "Real-Time Sync & 4.9/5 Rating",
};

export function Work() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" ref={ref} className="py-24 sm:py-32 bg-[#090C12] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease } as Transition}
          className="mb-16 sm:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="inline-block text-xs font-bold text-[#10B981] uppercase tracking-[0.25em] mb-3 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10">
              Selected Projects
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Featured Client <span className="bg-gradient-to-r from-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">Case Studies.</span>
            </h2>
          </div>
          <p className="text-slate-300 text-base max-w-md">
            A showcase of digital products, e-commerce rebuilds, and paid performance campaigns delivered with precision and speed.
          </p>
        </motion.div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {RECENT_WORK.map((project, i) => {
            const metric = PROJECT_METRICS[project.id] || "Verified Business Impact";

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease,
                } as Transition}
                className={cn(
                  "group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden hover:border-emerald-500/40 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between"
                )}
              >
                {/* Visual Preview Header Container */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-gradient-to-br from-[#0F172A] to-[#0B0F17] p-6 flex flex-col justify-between border-b border-white/5">
                  {/* Background gradient overlay */}
                  <div className={cn("absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity duration-500 bg-gradient-to-br", project.gradient)} />
                  
                  {/* Subtle Grid pattern inside preview */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

                  {/* Top Bar inside preview */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-200 backdrop-blur-md">
                      <Sparkles size={12} className="text-[#10B981]" />
                      {project.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 bg-black/40 px-3 py-1 rounded-full border border-white/5">
                      {project.year}
                    </span>
                  </div>

                  {/* Impact Metric Card inside preview */}
                  <div className="relative z-10 self-start">
                    <div className="inline-flex items-center gap-2 rounded-2xl border border-emerald-500/30 bg-[#0B0F17]/90 px-4 py-2 text-xs sm:text-sm font-extrabold text-emerald-400 shadow-xl backdrop-blur-md">
                      <TrendingUp size={16} className="text-emerald-400 shrink-0" />
                      <span>{metric}</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="h-9 w-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:border-emerald-500/50 group-hover:bg-emerald-500/20 transition-all shrink-0">
                        <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags & Action */}
                  <div className="space-y-6 pt-4 border-t border-white/5">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/services/${project.id}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 group-hover:translate-x-1 transition-all"
                    >
                      Read Full Case Study &rarr;
                    </Link>
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
