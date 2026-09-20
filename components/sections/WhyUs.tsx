"use client";

import { useRef } from "react";
import { motion, useInView, type Transition } from "framer-motion";
import { WHY_US } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ease: Transition["ease"] = [0.22, 1, 0.36, 1];

export function WhyUs() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" ref={ref} className="py-24 sm:py-32 bg-[#090C12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease } as Transition}
          className="mb-16 sm:mb-20 text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-xs font-bold text-[#10B981] uppercase tracking-[0.25em] mb-3 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10">
            Competitive Edge
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Why Founders Choose <span className="bg-gradient-to-r from-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">Laizo Sync.</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease,
                } as Transition}
                className={cn(
                  "group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 overflow-hidden hover:border-emerald-500/40 hover:bg-white/[0.06] transition-all duration-300",
                  item.span === "col-span-2" && "sm:col-span-2"
                )}
              >
                {/* Subtle Number watermark safely positioned in bottom right corner */}
                <div className="absolute bottom-4 right-6 text-6xl font-black text-white/[0.04] group-hover:text-emerald-500/[0.08] transition-colors pointer-events-none select-none">
                  0{i + 1}
                </div>

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Icon container */}
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/20 transition-all duration-300">
                      <Icon
                        size={22}
                        className="text-emerald-400 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                      {item.description}
                    </p>
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
