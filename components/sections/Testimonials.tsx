"use client";

import { useRef } from "react";
import { motion, useInView, useAnimationFrame, useMotionValue, type Transition } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { Quote } from "lucide-react";

const ease: Transition["ease"] = [0.22, 1, 0.36, 1];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[0];
}) {
  return (
    <div className="relative flex-shrink-0 w-[320px] sm:w-[380px] rounded-2xl border border-[#27272A] bg-[#121214] p-6 mx-3">
      <Quote size={24} className="text-[#10B981]/50 mb-4" />
      <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#10B981]/40 to-teal-500/40 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] text-xs font-bold">
          {testimonial.avatar}
        </div>
        <div>
          <div className="text-sm font-semibold text-[#F5F5F7]">
            {testimonial.author}
          </div>
          <div className="text-xs text-[#A1A1AA]">{testimonial.role}</div>
        </div>
      </div>
      {/* Placeholder indicator */}
      <div className="absolute top-4 right-4">
        <span className="text-[10px] text-[#A1A1AA]/40 uppercase tracking-wider">
          Testimonial
        </span>
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
    <section id="testimonials" ref={ref} className="py-24 sm:py-32 bg-[#121214] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease } as Transition}
        >
          <p className="text-xs text-[#10B981] uppercase tracking-[0.2em] mb-4 font-semibold">
            Social Proof
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F7] max-w-xl leading-tight">
            What founders
            <br />
            <span className="text-[#A1A1AA]">are saying.</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative space-y-4">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-r from-[#121214] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-l from-[#121214] to-transparent pointer-events-none" />

        <MarqueeRow testimonials={TESTIMONIALS} direction={1} speed={0.35} />
        <MarqueeRow testimonials={TESTIMONIALS} direction={-1} speed={0.3} />
      </div>
    </section>
  );
}
