import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Laizo Sync to discuss your project. We respond within 24 hours with a clear plan.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 text-center">
          <p className="text-xs text-[#10B981] uppercase tracking-[0.2em] mb-4 font-semibold">
            Contact
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F7] mb-6 leading-tight">
            Start a
            <br />
            <span className="text-[#A1A1AA]">Conversation.</span>
          </h1>
        </div>
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
