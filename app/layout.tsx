import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beelzebub. - Web Junior Developer",
  description:
    "Creating an Innovative, Functional, and User-Friendly Website for Digital Solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
