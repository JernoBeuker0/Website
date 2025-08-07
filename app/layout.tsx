import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SidebarShell from "./SidebarShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Website Jerno Beuker",
  description: "Personal website of Jerno Beuker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-gray-950 text-slate-100">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-slate-100`}
      >
        <SidebarShell>{children}</SidebarShell>
      </body>
    </html>
  );
}
