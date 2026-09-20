"use client";

import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { TRUST_PLATFORMS } from "@/lib/constants";

function MarqueeItem({ platforms }: { platforms: string[] }) {
  return (
    <div className="flex items-center gap-4 shrink-0">
      {platforms.map((platform, i) => (
        <div
          key={`${platform}-${i}`}
          className="flex items-center gap-4 px-4"
        >
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 hover:border-[#10B981]/40 hover:bg-white/[0.06] transition-colors cursor-default">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              {platform}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function TrustBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const xValue = useMotionValue(0);
  const speed = 0.5;

  useAnimationFrame(() => {
    if (!containerRef.current) return;
    const current = xValue.get();
    const containerWidth = containerRef.current.scrollWidth / 2;
    const next = current - speed;
    xValue.set(next <= -containerWidth ? 0 : next);
  });

  return (
    <section className="relative py-10 border-y border-white/10 bg-[#090C12] overflow-hidden">
      {/* Gradient Fades on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-r from-[#090C12] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-l from-[#090C12] to-transparent pointer-events-none" />

      {/* Label */}
      <div className="text-center mb-6">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-[0.25em]">
          Engineered With Modern Tech &amp; Ad Ecosystems
        </p>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden flex">
        <motion.div
          ref={containerRef}
          style={{ x: xValue }}
          className="flex w-max"
        >
          <MarqueeItem platforms={TRUST_PLATFORMS} />
          <MarqueeItem platforms={TRUST_PLATFORMS} />
        </motion.div>
      </div>
    </section>
  );
}
