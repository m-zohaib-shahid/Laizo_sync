"use client";

import { useRef } from "react";
import { motion, useInView, useAnimationFrame, useMotionValue, type Transition } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { Quote, Star } from "lucide-react";

const ease: Transition["ease"] = [0.22, 1, 0.36, 1];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[0];
}) {
  return (
    <div className="relative flex-shrink-0 w-[320px] sm:w-[400px] rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-7 mx-3 hover:border-emerald-500/40 hover:bg-white/[0.06] transition-all duration-300">
      {/* 5-Star Rating */}
      <div className="flex items-center gap-1 text-amber-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="currentColor" />
        ))}
      </div>

      <Quote size={20} className="text-emerald-400/50 mb-3" />
      <p className="text-slate-200 text-sm leading-relaxed mb-6 font-normal">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      
      <div className="flex items-center gap-3.5 border-t border-white/5 pt-4">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#10B981] to-[#06B6D4] p-0.5 shadow-md">
          <div className="h-full w-full rounded-full bg-[#07080C] flex items-center justify-center text-emerald-400 text-xs font-extrabold">
            {testimonial.avatar}
          </div>
        </div>
        <div>
          <div className="text-sm font-bold text-white">
            {testimonial.author}
          </div>
          <div className="text-xs font-medium text-slate-400">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  testimonials,
  direction = 1,
  speed = 0.4,
}: {
  testimonials: (typeof TESTIMONIALS);
  direction?: 1 | -1;
  speed?: number;
}) {
  const xValue = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame(() => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.scrollWidth / 2;
    const current = xValue.get();
    const delta = direction * speed;
    let next = current - delta;
    if (direction === 1 && next <= -containerWidth) next = 0;
    if (direction === -1 && next >= 0) next = -containerWidth;
    xValue.set(next);
  });

  return (
    <div className="overflow-hidden">
      <motion.div
        ref={containerRef}
        style={{ x: xValue }}
        className="flex w-max py-2"
      >
        {testimonials.map((t, i) => (
          <TestimonialCard key={`${t.author}-${i}-a`} testimonial={t} />
        ))}
        {testimonials.map((t, i) => (
          <TestimonialCard key={`${t.author}-${i}-b`} testimonial={t} />
        ))}
      </motion.div>
    </div>
  );
}

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" ref={ref} className="py-24 sm:py-32 bg-[#07080C] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease } as Transition}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-xs font-bold text-[#10B981] uppercase tracking-[0.25em] mb-3 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10">
            Client Success
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            What Founders <span className="bg-gradient-to-r from-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">Are Saying.</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative space-y-6">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-r from-[#07080C] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-l from-[#07080C] to-transparent pointer-events-none" />

        <MarqueeRow testimonials={TESTIMONIALS} direction={1} speed={0.35} />
        <MarqueeRow testimonials={TESTIMONIALS} direction={-1} speed={0.3} />
      </div>
    </section>
  );
}
