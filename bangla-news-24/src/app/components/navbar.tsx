'use client'
import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
  const date = new Date();
  const banglaDate = date.toLocaleString("bn-BD", {
    dateStyle: "full"
  });
  return (
    <nav className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left spacer to keep center content centered */}
        <div className="flex-1" />

        {/* Center: Logo, Title & Date */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.webp"
              alt="Bangla News 24"
              width={38}
              height={38}
              priority
              className="w-9 h-9 object-contain rounded-lg"
            />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl sm:text-2xl text-[#be1432] leading-tight">
                Bangla News 24
              </span>
              <span suppressHydrationWarning className="text-[11px] sm:text-xs text-gray-500 leading-tight mt-0.5">
                {banglaDate}
              </span>
            </div>
          </Link>
        </div>

        {/* Right: Sign In & Sign Up */}
        <div className="flex-1 flex items-center justify-end gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-800 hover:text-[#be1432] transition-colors"
          >
            সাইন ইন
          </Link>
          <Link
            href="/signup"
            className="bg-[#db0015] hover:bg-[#be1432] text-white text-sm font-medium px-4 py-1.5 rounded transition-colors"
          >
            সাইন আপ
          </Link>

          

        </div>
        
      </div>
      
    </nav>
    
  );
}
