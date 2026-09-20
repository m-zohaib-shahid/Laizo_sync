"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 sm:mb-20"
        >
          <p className="text-xs text-[#10B981] uppercase tracking-[0.2em] mb-4 font-semibold">
            What We Do
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F7] max-w-xl leading-tight">
              Services built
              <br />
              <span className="text-[#A1A1AA]">to move fast.</span>
            </h2>
            <p className="text-[#A1A1AA] max-w-xs text-base leading-relaxed">
              Every service we offer is designed to deliver measurable business
              outcomes — not pretty deliverables that sit in a Figma file.
            </p>
          </div>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#27272A]"
        >
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group relative bg-[#0A0A0B] p-8 hover:bg-[#121214] transition-colors duration-300 cursor-pointer overflow-hidden"
              >
                {/* Card gradient on hover */}
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    service.color
                  )}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#27272A] bg-[#121214] group-hover:border-[#10B981]/30 group-hover:bg-[#10B981]/10 transition-all duration-300">
                    <Icon
                      size={22}
                      className="text-[#A1A1AA] group-hover:text-[#10B981] transition-colors duration-300"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[#F5F5F7] mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Learn more */}
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#A1A1AA]/60 group-hover:text-[#10B981] transition-colors duration-300 uppercase tracking-wider">
                    <span>Learn more</span>
                    <ArrowUpRight
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
