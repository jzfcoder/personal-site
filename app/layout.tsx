import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaHeader = Fira_Code({
  variable: "--fira-header",
  weight: '700',
});

const firaBody = Fira_Code({
  variable: "--fira-body",
  weight: '400',
});

export const metadata: Metadata = {
  title: "Jeremy Flint",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${firaHeader.variable} ${firaBody.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
