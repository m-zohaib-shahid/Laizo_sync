"use client";

import { useRef } from "react";
import { motion, useInView, type Transition } from "framer-motion";
import { RECENT_WORK } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const ease: Transition["ease"] = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease } as Transition,
  },
};

export function Work() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" ref={ref} className="py-24 sm:py-32 bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease } as Transition}
          className="mb-16 sm:mb-20"
        >
          <p className="text-xs text-[#10B981] uppercase tracking-[0.2em] mb-4 font-semibold">
            Recent Builds
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F7] max-w-lg leading-tight">
              Selected
              <br />
              <span className="text-[#A1A1AA]">Work.</span>
            </h2>
            <p className="text-[#A1A1AA] max-w-xs text-base leading-relaxed">
              A snapshot of recent projects — web, ecommerce, ads, and mobile
              builds delivered for founders and growing brands.
            </p>
          </div>
        </motion.div>

        {/* Work grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4"
        >
          {RECENT_WORK.map((project, i) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className={cn(
                "group relative rounded-2xl border border-[#27272A] bg-[#121214] overflow-hidden cursor-pointer",
                i === 0 && "lg:col-span-2"
              )}
            >
              {/* Gradient background */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-100 transition-opacity duration-500",
                  project.gradient
                )}
              />

              <div className="relative z-10 p-8 sm:p-10">
                {/* Meta */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#10B981]">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[#A1A1AA]">{project.year}</span>
                    <div className="h-8 w-8 rounded-full border border-[#27272A] bg-[#0A0A0B]/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-[#10B981]/50">
                      <ArrowUpRight size={14} className="text-[#10B981]" />
                    </div>
                  </div>
                </div>

                {/* Decorative code block */}
                <div className="mb-8 rounded-xl border border-[#27272A]/60 bg-[#0A0A0B]/60 backdrop-blur p-5 font-mono text-xs text-[#A1A1AA]/70 overflow-hidden">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <div className="space-y-1">
                    <div>
                      <span className="text-violet-400">export</span>{" "}
                      <span className="text-blue-400">const</span>{" "}
                      <span className="text-[#10B981]">project</span> = {"{"}
                    </div>
                    <div className="pl-4">
                      <span className="text-[#A1A1AA]">title:</span>{" "}
                      <span className="text-amber-400">
                        &quot;{project.title}&quot;
                      </span>
                      ,
                    </div>
                    <div className="pl-4">
                      <span className="text-[#A1A1AA]">stack:</span>{" "}
                      <span className="text-amber-400">
                        [{project.tags.map((t) => `"${t}"`).join(", ")}]
                      </span>
                      ,
                    </div>
                    <div className="pl-4">
                      <span className="text-[#A1A1AA]">status:</span>{" "}
                      <span className="text-[#10B981]">&quot;deployed&quot;</span>,
                    </div>
                    <div>{"}"}</div>
                  </div>
                </div>

                {/* Title & description */}
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F5F7] mb-3 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#A1A1AA] leading-relaxed text-sm sm:text-base max-w-xl mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#27272A] bg-[#0A0A0B]/70 px-3 py-1 text-xs font-medium text-[#A1A1AA]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
