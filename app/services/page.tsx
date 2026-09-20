import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Services } from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Laizo Sync offers Shopify development, Meta & Google Ads management, Next.js web development, mobile app development, and digital product scaling.",
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 text-center">
          <p className="text-xs text-[#10B981] uppercase tracking-[0.2em] mb-4 font-semibold">
            Our Services
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F7] mb-6 leading-tight">
            Everything you need
            <br />
            <span className="text-[#A1A1AA]">to grow online.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-[#A1A1AA]">
            From high-converting storefronts to profitable ad campaigns and
            cutting-edge web apps — we cover the full digital stack.
          </p>
        </div>
        <Services />
      </div>
      <Footer />
    </main>
  );
}
