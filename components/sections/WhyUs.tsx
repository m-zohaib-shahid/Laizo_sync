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
    <section id="why-us" ref={ref} className="py-24 sm:py-32 bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease } as Transition}
          className="mb-16 sm:mb-20"
        >
          <p className="text-xs text-[#10B981] uppercase tracking-[0.2em] mb-4 font-semibold">
            Why Laizo Sync
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F7] max-w-xl leading-tight">
            Different by
            <br />
            <span className="text-[#A1A1AA]">design.</span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                  "group relative rounded-2xl border border-[#27272A] bg-[#121214] p-8 overflow-hidden hover:border-[#10B981]/20 transition-all duration-300",
                  item.span === "col-span-2" && "sm:col-span-2"
                )}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Large number decoration */}
                  <div className="absolute top-6 right-8 text-7xl font-black text-[#27272A]/50 select-none group-hover:text-[#10B981]/10 transition-colors duration-500">
                    0{i + 1}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#27272A] bg-[#0A0A0B] group-hover:border-[#10B981]/30 group-hover:bg-[#10B981]/10 transition-all duration-300">
                    <Icon
                      size={22}
                      className="text-[#A1A1AA] group-hover:text-[#10B981] transition-colors duration-300"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-[#F5F5F7] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
