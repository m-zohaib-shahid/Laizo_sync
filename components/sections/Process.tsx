"use client";

import { useRef } from "react";
import { motion, useInView, type Transition } from "framer-motion";

const ease: Transition["ease"] = [0.22, 1, 0.36, 1];
import { PROCESS_STEPS } from "@/lib/constants";

export function Process() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} className="py-24 sm:py-32 bg-[#121214] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#27272A] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease } as Transition}
          className="text-center mb-16 sm:mb-24"
        >
          <p className="text-xs text-[#10B981] uppercase tracking-[0.2em] mb-4 font-semibold">
            How We Work
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F7] leading-tight">
            The Laizo Sync
            <br />
            <span className="text-[#A1A1AA]">Process.</span>
          </h2>
        </motion.div>

        {/* Process steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#27272A] to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease,
                } as Transition}
                className="relative group"
              >
                {/* Mobile connector */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="lg:hidden absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-[#27272A] to-transparent" />
                )}

                <div className="flex lg:flex-col gap-6 lg:gap-6">
                  {/* Number circle */}
                  <div className="relative shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#27272A] bg-[#0A0A0B] text-[#A1A1AA] text-xs font-mono font-bold group-hover:border-[#10B981]/50 group-hover:text-[#10B981] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:mt-6">
                    <h3 className="text-lg font-bold text-[#F5F5F7] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 } as Transition}
          className="text-center mt-16 sm:mt-24"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 rounded-full bg-[#10B981] px-7 py-3.5 text-base font-semibold text-white shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Start the Process
          </a>
        </motion.div>
      </div>
    </section>
  );
}
