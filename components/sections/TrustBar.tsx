"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { TRUST_PLATFORMS } from "@/lib/constants";

function MarqueeItem({ platforms }: { platforms: string[] }) {
  return (
    <>
      {platforms.map((platform, i) => (
        <div
          key={`${platform}-${i}`}
          className="flex items-center gap-2 px-6 shrink-0"
        >
          <span className="text-sm font-semibold text-[#A1A1AA]/70 uppercase tracking-widest hover:text-[#10B981] transition-colors duration-300 cursor-default whitespace-nowrap">
            {platform}
          </span>
          <span className="text-[#27272A] text-xl" aria-hidden>·</span>
        </div>
      ))}
    </>
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
    <section className="relative py-12 border-y border-[#27272A] overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-r from-[#0A0A0B] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-l from-[#0A0A0B] to-transparent pointer-events-none" />

      {/* Label */}
      <div className="text-center mb-6">
        <p className="text-xs text-[#A1A1AA]/60 uppercase tracking-[0.2em]">
          Trusted by founders building on
        </p>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden">
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
