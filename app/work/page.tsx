import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Work } from "@/components/sections/Work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore Laizo Sync's portfolio of Shopify stores, web applications, mobile apps, and paid advertising campaigns.",
};

export default function WorkPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 text-center">
          <p className="text-xs text-[#10B981] uppercase tracking-[0.2em] mb-4 font-semibold">
            Portfolio
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F7] mb-6 leading-tight">
            Recent
            <br />
            <span className="text-[#A1A1AA]">Builds.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-[#A1A1AA]">
            A showcase of projects we&apos;ve shipped — from conversion-optimized
            Shopify stores to edge-deployed web apps.
          </p>
        </div>
        <Work />
      </div>
      <Footer />
    </main>
  );
}
