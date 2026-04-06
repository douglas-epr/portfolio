import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Douglas Gouveia — AI Product Engineer",
  description:
    "Senior Certified Bubble Developer & AI Product Engineer. Building scalable products with Claude Code, Lovable, and Figma Make.",
  keywords: [
    "AI Product Engineer",
    "Bubble Developer",
    "NoCode",
    "Claude Code",
    "Lovable",
    "Figma Make",
    "Douglas Gouveia",
  ],
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
