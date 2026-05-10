import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const firaHeader = Fira_Code({
  variable: "--fira-header",
  weight: '700',
  preload: false,
});

const firaBody = Fira_Code({
  variable: "--fira-body",
  weight: '400',
  preload: false,
});

const description =
  "Jeremy Flint — MIT sophomore in AI & Decision Making, interested in building and evaluating safe, capable multi-agent systems.";

export const metadata: Metadata = {
  metadataBase: new URL("https://zflint.com"),
  title: {
    default: "Jeremy Flint",
    template: "%s · Jeremy Flint",
  },
  description,
  applicationName: "Jeremy Flint",
  authors: [{ name: "Jeremy Flint", url: "https://zflint.com" }],
  creator: "Jeremy Flint",
  keywords: [
    "Jeremy Flint",
    "zflint",
    "MIT",
    "AI & Decision Making",
    "AI safety",
    "multi-agent systems",
    "agent evaluation",
    "Shortcut",
    "Fundamental Research",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://zflint.com",
    siteName: "Jeremy Flint",
    title: "Jeremy Flint",
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeremy Flint",
    description,
    creator: "@zflintj",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jeremy Flint",
  url: "https://zflint.com",
  image: "https://zflint.com/pfp2.JPEG",
  jobTitle: "Student",
  alumniOf: { "@type": "CollegeOrUniversity", name: "Massachusetts Institute of Technology" },
  affiliation: { "@type": "CollegeOrUniversity", name: "Massachusetts Institute of Technology" },
  sameAs: [
    "https://x.com/zflintj",
    "https://www.linkedin.com/in/jeremy-z-flint",
    "https://github.com/jzfcoder",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${firaHeader.variable} ${firaBody.variable}`}>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
