"use client";

import { useRef, useState } from "react";
import { motion, useInView, type Transition } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Send, CheckCircle2, Loader2, Mail, Phone, Clock, ShieldCheck } from "lucide-react";
import { contactFormSchema, type ContactFormValues } from "@/lib/form-schema";
import { cn } from "@/lib/utils";

const ease: Transition["ease"] = [0.22, 1, 0.36, 1];

const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_KEY"; // Free Web3Forms Key

const SERVICE_OPTIONS = [
  { value: "shopify", label: "Shopify Store Development" },
  { value: "meta-ads", label: "Meta Ads Management" },
  { value: "google-ads", label: "Google Ads Management" },
  { value: "nextjs", label: "Next.js Web Application" },
  { value: "mobile", label: "Mobile App Development" },
  { value: "scaling", label: "Digital Products & Scaling" },
  { value: "other", label: "Full Digital Growth System" },
];

const BUDGET_OPTIONS = [
  { value: "under-5k", label: "Under $5,000" },
  { value: "5k-15k", label: "$5,000 – $15,000" },
  { value: "15k-50k", label: "$15,000 – $50,000" },
  { value: "50k-plus", label: "$50,000+" },
];

function FormField({
  label,
  error,
  children,
  required,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
        {label}
        {required && <span className="text-emerald-400 ml-1">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs text-rose-400 font-medium mt-1">{error}</p>
      )}
    </div>
  );
}

const inputClass = cn(
  "w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-slate-500",
  "focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 focus:bg-white/[0.08]",
  "transition-all duration-200"
);

export function CTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("subject", `New project inquiry from ${data.name} — ${data.service}`);
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("company", data.company || "Not provided");
      formData.append("service", data.service);
      formData.append("budget", data.budget);
      formData.append("message", data.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        reset();
        toast.success("Inquiry received!", {
          description: "We'll respond with an action plan within 24 hours.",
        });
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24 sm:py-32 bg-[#090C12] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease } as Transition}
            className="lg:col-span-5"
          >
            <span className="inline-block text-xs font-bold text-[#10B981] uppercase tracking-[0.25em] mb-3 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10">
              Start A Project
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Let&apos;s Build <br />
              <span className="bg-gradient-to-r from-[#10B981] via-[#06B6D4] to-blue-400 bg-clip-text text-transparent">
                Something Extraordinary.
              </span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-8">
              Ready to accelerate revenue and launch production-grade digital infrastructure? Send us your project details for an immediate proposal.
            </p>

            {/* Bullet Commitments */}
            <div className="space-y-4 mb-10">
              {[
                { icon: Clock, title: "24-Hour Response Guarantee", desc: "No waiting for weeks — we respond with clear next steps." },
                { icon: ShieldCheck, title: "Strict NDA & Transparency", desc: "Your code and business metrics are 100% confidential." },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-3.5 p-4 rounded-2xl border border-white/5 bg-white/[0.02]">
                    <div className="h-9 w-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Direct Contact Info */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <Mail size={16} className="text-emerald-400" />
                <a href="mailto:hello@laizosync.com" className="hover:text-white transition-colors">hello@laizosync.com</a>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <Phone size={16} className="text-emerald-400" />
                <a href="tel:+15550000000" className="hover:text-white transition-colors">+1 (555) 000-0000</a>
              </div>
            </div>
          </motion.div>

          {/* Right Column (7 cols) Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease } as Transition}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 sm:p-10 shadow-2xl">
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                  <div className="h-16 w-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-3xl font-extrabold text-white">
                    Project Request Received!
                  </h3>
                  <p className="text-slate-300 max-w-sm text-sm">
                    We&apos;re analyzing your requirements and will email you a proposal within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:underline"
                  >
                    Submit Another Request &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      label="Your Name"
                      error={errors.name?.message}
                      required
                    >
                      <input
                        {...register("name")}
                        id="contact-name"
                        type="text"
                        placeholder="Alex Johnson"
                        className={inputClass}
                      />
                    </FormField>

                    <FormField
                      label="Email Address"
                      error={errors.email?.message}
                      required
                    >
                      <input
                        {...register("email")}
                        id="contact-email"
                        type="email"
                        placeholder="alex@company.com"
                        className={inputClass}
                      />
                    </FormField>
                  </div>

                  <FormField label="Company Name (Optional)" error={errors.company?.message}>
                    <input
                      {...register("company")}
                      id="contact-company"
                      type="text"
                      placeholder="Acme Growth Inc."
                      className={inputClass}
                    />
                  </FormField>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      label="Service Needed"
                      error={errors.service?.message}
                      required
                    >
                      <select
                        {...register("service")}
                        id="contact-service"
                        className={cn(inputClass, "cursor-pointer appearance-none bg-[#0D121F]")}
                      >
                        <option value="" disabled className="text-slate-500">
                          Select a service
                        </option>
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value} className="bg-[#0B0F17] text-white">
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </FormField>

                    <FormField
                      label="Budget Range"
                      error={errors.budget?.message}
                      required
                    >
                      <select
                        {...register("budget")}
                        id="contact-budget"
                        className={cn(inputClass, "cursor-pointer appearance-none bg-[#0D121F]")}
                      >
                        <option value="" disabled className="text-slate-500">
                          Select budget range
                        </option>
                        {BUDGET_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value} className="bg-[#0B0F17] text-white">
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </FormField>
                  </div>

                  <FormField
                    label="Project Scope &amp; Goals"
                    error={errors.message?.message}
                    required
                  >
                    <textarea
                      {...register("message")}
                      id="contact-message"
                      rows={4}
                      placeholder="Tell us about your target timeline, current challenges, and desired outcomes..."
                      className={cn(inputClass, "resize-none")}
                    />
                  </FormField>

                  <button
                    type="submit"
                    id="contact-submit"
                    disabled={isSubmitting}
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#10B981] to-[#06B6D4] px-8 py-4 text-sm font-bold text-white shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Processing Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Proposal Request</span>
                        <Send
                          size={16}
                          className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200"
                        />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
