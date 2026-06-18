import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reelaxis.com"),
  title: {
    default: "Reel Axis | AI Implementation & Managed AI Operations for SMBs",
    template: "%s | Reel Axis",
  },
  description:
    "Reel Axis helps small and mid-sized businesses implement and manage practical AI workflows across sales, marketing, finance, operations, admin, and leadership reporting.",
  openGraph: {
    title: "Reel Axis | AI Implementation & Managed AI Operations for SMBs",
    description:
      "Practical AI implementation and managed AI operations for growing businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
