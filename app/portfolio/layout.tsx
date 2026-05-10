import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected projects by Jeremy Flint.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio · Jeremy Flint",
    description: "Selected projects by Jeremy Flint.",
    url: "/portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio · Jeremy Flint",
    description: "Selected projects by Jeremy Flint.",
  },
};

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
