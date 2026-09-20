"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, type Transition } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ease: Transition["ease"] = [0.22, 1, 0.36, 1];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease }}
        className="fixed top-4 inset-x-0 z-50 px-4 pointer-events-none"
      >
        <div className="max-w-5xl mx-auto pointer-events-auto">
          <nav
            className={cn(
              "rounded-full px-5 py-3 transition-all duration-300 flex items-center justify-between",
              scrolled
                ? "bg-[#07090E]/90 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                : "bg-[#07090E]/60 backdrop-blur-md border border-white/[0.08]"
            )}
          >
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981] shadow-[0_0_8px_#10B981]" />
              </span>
              <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-[#10B981] transition-colors duration-200">
                Laizo<span className="text-[#10B981]">Sync</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 relative py-1 hover:text-[#10B981]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="group relative inline-flex items-center gap-1.5 rounded-full bg-[#10B981] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.7)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Book a Call</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              aria-label="Toggle mobile menu"
              className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 inset-x-4 z-40 max-w-md mx-auto rounded-3xl bg-[#0B0F17]/95 backdrop-blur-2xl border border-white/10 p-6 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-slate-200 hover:text-[#10B981] font-semibold text-lg py-2.5 border-b border-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="mt-2 inline-flex justify-center items-center gap-2 rounded-2xl bg-[#10B981] px-6 py-3.5 text-sm font-bold text-white shadow-lg"
              >
                Book a Free Discovery Call
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
