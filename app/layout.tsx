import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://laizosync.com"),
  title: {
    default: "Laizo Sync — Digital Agency for Shopify, Ads & Web Development",
    template: "%s | Laizo Sync",
  },
  description:
    "Laizo Sync builds high-converting Shopify stores, manages Meta & Google Ads for 4x+ ROAS, and ships modern Next.js web & mobile apps for ambitious founders.",
  keywords: [
    "Shopify development",
    "Meta Ads management",
    "Google Ads agency",
    "Next.js development",
    "mobile app development",
    "digital agency",
    "ecommerce development",
  ],
  authors: [{ name: "Laizo Sync", url: "https://laizosync.com" }],
  creator: "Laizo Sync",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://laizosync.com",
    title: "Laizo Sync — Digital Agency for Shopify, Ads & Web Development",
    description:
      "We build Shopify stores, run paid ads, and ship modern web & mobile products — fast.",
    siteName: "Laizo Sync",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Laizo Sync — Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laizo Sync — Digital Agency for Shopify, Ads & Web Development",
    description:
      "We build Shopify stores, run paid ads, and ship modern web & mobile products — fast.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0B" },
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster
            position="bottom-right"
            theme="dark"
            richColors
            closeButton
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
