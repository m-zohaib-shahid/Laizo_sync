"use client";

import { motion, type Transition } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Award, Star } from "lucide-react";

const ease: Transition["ease"] = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease } as Transition,
  },
};

export function Hero() {
  const handleScroll = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background radial glowing ambient lights */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-gradient-to-tr from-[#10B981]/20 via-[#06B6D4]/15 to-transparent blur-[140px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[130px]" />

        {/* Fine grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} className="mb-8 inline-block">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <Sparkles size={14} className="text-emerald-400" />
            <span className="uppercase tracking-wider">Digital Agency for High-Growth Brands</span>
          </div>
        </motion.div>

        {/* Main Display Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6"
        >
          We Build Digital Products &amp;
          <br />
          <span className="bg-gradient-to-r from-[#10B981] via-[#06B6D4] to-[#3B82F6] bg-clip-text text-transparent">
            Growth Engines
          </span>{" "}
          That Scale Revenue.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-base sm:text-xl text-slate-300 font-normal leading-relaxed mb-10"
        >
          Engineering Shopify stores, high-ROAS Meta &amp; Google Ads campaigns, Next.js web applications, and mobile products built for founders who demand measurable ROI.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#10B981] to-[#06B6D4] px-8 py-4 text-sm font-bold text-white shadow-[0_0_35px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.7)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Start Your Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.05] backdrop-blur-xl px-8 py-4 text-sm font-bold text-slate-200 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
          >
            Explore Case Studies
          </a>
        </motion.div>

        {/* Glassmorphic Stats Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto p-4 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl"
        >
          {[
            { value: "$45M+", label: "Client Revenue Generated", icon: Award },
            { value: "2 Weeks", label: "Average Delivery Time", icon: Zap },
            { value: "99+", label: "Lighthouse Speed Score", icon: ShieldCheck },
            { value: "4.9 / 5", label: "Client Partner Rating", icon: Star },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-colors"
              >
                <div className="flex items-center gap-1.5 text-[#10B981] mb-1">
                  <Icon size={16} />
                  <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-medium text-center">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
