import type { Metadata } from "next";
import "./globals.css";

const siteUrl = 'https://douglasgouveia.dev';

export const metadata: Metadata = {
  title: "Douglas Gouveia Portfolio",
  description:
    "Building scalable products at the intersection of AI, NoCode, and strategic engineering. Claude Code · Bubble · Supabase · Figma Make · Lovable.",
  keywords: [
    "Douglas Gouveia",
    "AI Product Engineer",
    "NoCode Developer",
    "Bubble Developer",
    "Claude Code",
    "Lovable",
    "Figma Make",
    "Supabase",
    "Portfolio",
  ],
  authors: [{ name: "Douglas Gouveia", url: siteUrl }],
  creator: "Douglas Gouveia",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Douglas Gouveia Portfolio",
    title: "Douglas Gouveia Portfolio",
    description:
      "Building scalable products at the intersection of AI, NoCode, and strategic engineering. Claude Code · Bubble · Supabase · Figma Make · Lovable.",
    images: [
      {
        url: "/images/og-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Douglas Gouveia Portfolio",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Douglas Gouveia Portfolio",
    description:
      "Building scalable products at the intersection of AI, NoCode, and strategic engineering. Claude Code · Bubble · Supabase · Figma Make · Lovable.",
    images: ["/images/og-thumbnail.png"],
  },
  icons: {
    icon: [
      { url: "/images/Gemini_Generated_Image_lfzuf4lfzuf4lfzu.png", type: "image/png" },
    ],
    apple: "/images/Gemini_Generated_Image_lfzuf4lfzuf4lfzu.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-[#0a0a0f] text-slate-100">
        {children}
      </body>
    </html>
  );
}
