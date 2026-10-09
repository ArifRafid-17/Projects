import type { Metadata } from "next";
import { Noto_Serif_Bengali, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import { Spinner } from "@heroui/react";
import "./globals.css";
import Navbar from "./components/navbar";
import NavLinks from "./components/navLinks";

const notoSerifBengali = Noto_Serif_Bengali({
  variable: "--font-noto-serif-bengali",
  subsets: ["bengali", "latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bangla News 24",
  description: "Bangla News 24 - সর্বশেষ খবর ও সংবাদ",
};

function NavbarFallback() {
  return (
       <div className="flex flex-col items-center gap-2">
        <Spinner size="xl" />
        <span className="text-xs text-muted">Loading...</span>
      </div>
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      data-theme="light"
      className={`${notoSerifBengali.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${notoSerifBengali.className} min-h-full flex flex-col bg-[#f8fafc] text-slate-900`}>
        <Suspense fallback={<NavbarFallback />}>
        <div className=" bg-white border-b border-gray-100">
          <Navbar />
          <NavLinks/>
        </div>
        </Suspense>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
