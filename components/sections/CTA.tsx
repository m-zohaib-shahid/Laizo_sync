"use client";

import { useRef, useState } from "react";
import { motion, useInView, type Transition } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { contactFormSchema, type ContactFormValues } from "@/lib/form-schema";
import { cn } from "@/lib/utils";

const ease: Transition["ease"] = [0.22, 1, 0.36, 1];

const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_KEY"; // Replace with real key

const SERVICE_OPTIONS = [
  { value: "shopify", label: "Shopify Development" },
  { value: "meta-ads", label: "Meta Ads Management" },
  { value: "google-ads", label: "Google Ads Management" },
  { value: "nextjs", label: "Next.js Web Development" },
  { value: "mobile", label: "Mobile App Development" },
  { value: "scaling", label: "Digital Products & Scaling" },
  { value: "other", label: "Something Else" },
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
    <div className="space-y-2">
      <label className="block text-sm font-medium text-[#A1A1AA]">
        {label}
        {required && <span className="text-[#10B981] ml-1">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs text-rose-400 mt-1">{error}</p>
      )}
    </div>
  );
}

const inputClass = cn(
  "w-full rounded-xl border border-[#27272A] bg-[#0A0A0B] px-4 py-3 text-sm text-[#F5F5F7] placeholder:text-[#A1A1AA]/50",
  "focus:outline-none focus:ring-2 focus:ring-[#10B981]/40 focus:border-[#10B981]/40",
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
        toast.success("Message sent!", {
          description: "We'll be in touch within 24 hours.",
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
    <section id="contact" ref={ref} className="py-24 sm:py-32 bg-[#0A0A0B] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#10B981]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease } as Transition}
          >
            <p className="text-xs text-[#10B981] uppercase tracking-[0.2em] mb-4 font-semibold">
              Get In Touch
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F7] leading-tight mb-6">
              Let&apos;s build
              <br />
              <span className="bg-gradient-to-r from-[#10B981] to-teal-400 bg-clip-text text-transparent">
                something
              </span>
              <br />
              remarkable.
            </h2>
            <p className="text-[#A1A1AA] text-base leading-relaxed mb-10 max-w-md">
              Tell us about your project. We&apos;ll get back to you within 24 hours
              with a clear plan and honest timeline — no fluff.
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg border border-[#27272A] bg-[#121214] flex items-center justify-center">
                  <span className="text-[#10B981] text-xs">@</span>
                </div>
                <a
                  href="mailto:hello@laizosync.com"
                  className="text-sm text-[#A1A1AA] hover:text-[#10B981] transition-colors"
                >
                  hello@laizosync.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg border border-[#27272A] bg-[#121214] flex items-center justify-center">
                  <span className="text-[#10B981] text-xs">☎</span>
                </div>
                <a
                  href="tel:+1-555-000-0000"
                  className="text-sm text-[#A1A1AA] hover:text-[#10B981] transition-colors"
                >
                  +1 (555) 000-0000
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease } as Transition}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center rounded-2xl border border-[#10B981]/20 bg-[#10B981]/5">
                <CheckCircle2 size={48} className="text-[#10B981]" />
                <h3 className="text-2xl font-bold text-[#F5F5F7]">
                  Message received!
                </h3>
                <p className="text-[#A1A1AA] max-w-xs">
                  We&apos;ll review your project and reply within 24 hours with a
                  clear proposal.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm text-[#10B981] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5 rounded-2xl border border-[#27272A] bg-[#121214] p-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    label="Full Name"
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

                <FormField label="Company (optional)" error={errors.company?.message}>
                  <input
                    {...register("company")}
                    id="contact-company"
                    type="text"
                    placeholder="Acme Inc."
                    className={inputClass}
                  />
                </FormField>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    label="Service Needed"
                    error={errors.service?.message}
                    required
                  >
                    <select
                      {...register("service")}
                      id="contact-service"
                      className={cn(inputClass, "cursor-pointer")}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-[#121214]">
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
                      className={cn(inputClass, "cursor-pointer")}
                    >
                      <option value="" disabled>
                        Select budget
                      </option>
                      {BUDGET_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-[#121214]">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </FormField>
                </div>

                <FormField
                  label="Tell us about your project"
                  error={errors.message?.message}
                  required
                >
                  <textarea
                    {...register("message")}
                    id="contact-message"
                    rows={4}
                    placeholder="Share your goals, timeline, and any important context..."
                    className={cn(inputClass, "resize-none")}
                  />
                </FormField>

                <button
                  type="submit"
                  id="contact-submit"
                  disabled={isSubmitting}
                  className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#10B981] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send
                        size={16}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                      />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
