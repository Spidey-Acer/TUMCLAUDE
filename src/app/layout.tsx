import type { Metadata } from "next";
import { Inter, Syne, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-syne",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "CLAUDE'S CLUB - Technical University of Mombasa",
  description:
    "Where innovation meets collaboration. A community of tech enthusiasts, developers, and problem-solvers shaping the future at Technical University of Mombasa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} ${spaceMono.variable}`}
    >
      <body className="overflow-x-hidden bg-light font-body leading-relaxed text-text-dark">
        {children}
      </body>
    </html>
  );
}
