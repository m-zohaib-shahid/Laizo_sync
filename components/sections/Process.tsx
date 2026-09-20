"use client";

import { useRef } from "react";
import { motion, useInView, type Transition } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const ease: Transition["ease"] = [0.22, 1, 0.36, 1];

export function Process() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} className="py-24 sm:py-32 bg-[#07080C] relative overflow-hidden">
      {/* Background radial ambient lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease } as Transition}
          className="text-center mb-16 sm:mb-24 max-w-3xl mx-auto"
        >
          <span className="inline-block text-xs font-bold text-[#10B981] uppercase tracking-[0.25em] mb-3 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10">
            How We Execute
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
            The Laizo Sync <span className="bg-gradient-to-r from-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">Execution Blueprint.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Structured in agile sprints. Zero agency bloat. Transparent updates every step of the way.
          </p>
        </motion.div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease,
              } as Transition}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 hover:border-emerald-500/40 hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="h-10 w-10 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-extrabold text-sm shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    {step.number}
                  </span>
                  <CheckCircle2 size={16} className="text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </div>

                {/* Step Title & Details */}
                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-emerald-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {/* Progress indicator bar */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#10B981] to-[#06B6D4] transition-all duration-500"
                    style={{ width: `${((i + 1) / PROCESS_STEPS.length) * 100}%` }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 } as Transition}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#10B981] to-[#06B6D4] px-8 py-4 text-sm font-bold text-white shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Start the Process
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
