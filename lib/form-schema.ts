import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(64, { message: "Name must be under 64 characters." }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." }),
  company: z
    .string()
    .max(64, { message: "Company name must be under 64 characters." })
    .optional(),
  service: z.enum(
    [
      "shopify",
      "meta-ads",
      "google-ads",
      "nextjs",
      "mobile",
      "scaling",
      "other",
    ],
    { required_error: "Please select a service." }
  ),
  budget: z.enum(
    ["under-5k", "5k-15k", "15k-50k", "50k-plus"],
    { required_error: "Please select a budget range." }
  ),
  message: z
    .string()
    .min(20, { message: "Message must be at least 20 characters." })
    .max(2000, { message: "Message must be under 2000 characters." }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
