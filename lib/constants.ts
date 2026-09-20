import {
  ShoppingBag,
  Target,
  Search,
  Globe,
  Smartphone,
  TrendingUp,
  Zap,
  Code2,
  MessageCircle,
  BarChart3,
} from "lucide-react";

export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export const SERVICES = [
  {
    id: "shopify",
    icon: ShoppingBag,
    title: "Shopify Store Development",
    description:
      "Conversion-optimized storefronts built from scratch or redesigned to maximize revenue.",
    color: "from-emerald-500/20 to-transparent",
  },
  {
    id: "meta-ads",
    icon: Target,
    title: "Meta Ads Management",
    description:
      "Full-funnel Facebook & Instagram campaigns engineered for ROAS, not vanity metrics.",
    color: "from-violet-500/20 to-transparent",
  },
  {
    id: "google-ads",
    icon: Search,
    title: "Google Ads Management",
    description:
      "Search, Shopping, and Performance Max campaigns capturing high-intent buyers at every stage.",
    color: "from-blue-500/20 to-transparent",
  },
  {
    id: "nextjs",
    icon: Globe,
    title: "Next.js Web Development",
    description:
      "Blazing-fast, SEO-ready web applications built with modern stack and edge-deployed.",
    color: "from-emerald-500/20 to-transparent",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform iOS & Android apps with React Native — shipped fast, iterated faster.",
    color: "from-amber-500/20 to-transparent",
  },
  {
    id: "scaling",
    icon: TrendingUp,
    title: "Digital Products & Scaling",
    description:
      "Business automation, digital product strategy, and scalable systems that compound growth.",
    color: "from-rose-500/20 to-transparent",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discover",
    description:
      "Deep-dive into your business, competitors, and goals. We map out the full picture before writing a single line of code.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "High-fidelity wireframes and design systems crafted in Figma, aligned with your brand and conversion goals.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Production-grade code delivered in iterative sprints with full transparency and weekly check-ins.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Zero-downtime deployment with performance testing, SEO verification, and analytics setup.",
  },
  {
    number: "05",
    title: "Scale",
    description:
      "Ongoing optimization, A/B testing, and paid acquisition management to compound your results.",
  },
];

export const WHY_US = [
  {
    icon: Zap,
    title: "Ship-Speed Delivery",
    description:
      "MVP in 2 weeks, full product in 4–6. No agency bloat, no endless revision cycles.",
    span: "col-span-2",
  },
  {
    icon: Code2,
    title: "Modern Stack Only",
    description:
      "Next.js 15, React, TypeScript — never legacy PHP or page builders.",
    span: "col-span-1",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    description:
      "You talk to the engineer building your product. No account managers as a telephone game.",
    span: "col-span-1",
  },
  {
    icon: BarChart3,
    title: "ROI-First Mindset",
    description:
      "Every decision is measured against one question: does this make you more money? Design is a means, revenue is the end.",
    span: "col-span-2",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Laizo Sync rebuilt our Shopify store from scratch and our conversion rate jumped 34% in the first month. Absolutely elite work.",
    author: "Sarah K.",
    role: "Founder, Bloom & Co.",
    avatar: "SK",
  },
  {
    quote:
      "The Meta Ads campaigns they set up for us hit 4.2x ROAS within 6 weeks. I've never seen results move this fast.",
    author: "Marcus T.",
    role: "CEO, TrailForge",
    avatar: "MT",
  },
  {
    quote:
      "Clean code, fast delivery, zero drama. We shipped our Next.js platform in 3 weeks. Genuinely impressed.",
    author: "Priya M.",
    role: "CTO, Luminary SaaS",
    avatar: "PM",
  },
  {
    quote:
      "They understand both the technical and business sides. Rare combination. Our Google Ads cost-per-acquisition dropped 40%.",
    author: "James L.",
    role: "Director of Growth, NovaPeak",
    avatar: "JL",
  },
  {
    quote:
      "From discovery to launch in 4 weeks. The quality of the mobile app exceeded every expectation we had going in.",
    author: "Anita R.",
    role: "Founder, Wander App",
    avatar: "AR",
  },
];

export const RECENT_WORK = [
  {
    id: "shopify-rebuild",
    title: "E-commerce Rebuild",
    category: "Shopify Development",
    description:
      "Full Shopify 2.0 rebuild with custom sections, metafields, and a checkout optimization that lifted conversion 28%.",
    tags: ["Shopify 2.0", "Liquid", "Performance"],
    gradient: "from-emerald-900/40 via-emerald-800/20 to-transparent",
    year: "2024",
  },
  {
    id: "saas-platform",
    title: "SaaS Marketing Site",
    category: "Next.js Development",
    description:
      "Edge-deployed marketing site with animated scroll sequences, dynamic OG images, and 99 Lighthouse score.",
    tags: ["Next.js 15", "Framer Motion", "Vercel"],
    gradient: "from-violet-900/40 via-violet-800/20 to-transparent",
    year: "2024",
  },
  {
    id: "ads-management",
    title: "DTC Growth Campaign",
    category: "Meta Ads Management",
    description:
      "Full-funnel Meta strategy for a DTC brand — achieved 4.8x ROAS at $25k/month ad spend.",
    tags: ["Meta Ads", "Creative Strategy", "Attribution"],
    gradient: "from-blue-900/40 via-blue-800/20 to-transparent",
    year: "2025",
  },
  {
    id: "mobile-app",
    title: "Marketplace Mobile App",
    category: "App Development",
    description:
      "React Native marketplace app with real-time listings, in-app payments, and push notifications.",
    tags: ["React Native", "Expo", "Stripe"],
    gradient: "from-amber-900/40 via-amber-800/20 to-transparent",
    year: "2025",
  },
];

export const TRUST_PLATFORMS = [
  "Shopify",
  "Meta Business",
  "Google Ads",
  "Vercel",
  "Next.js",
  "React Native",
  "Stripe",
  "Klaviyo",
];
