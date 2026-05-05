import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  display: "swap",
  weight: "600",
});

const Footer =() => {
  return   <footer className="w-full bg-[#391452] border-t-2 border-white pt-10 flex flex-col">
      
      {/* 1. TOP SECTION: Logo & Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col space-y-4">
          <div className="relative w-16 h-16">
            <Image
              src="/logo.svg"
              alt="Dream Eco Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-full">
            <p className={`${inter.className} text-sm text-white leading-relaxed max-w-sm`}>
              Connecting building construction expertise, digital application management, 
              and a comprehensive global shopping marketplace in one ecosystem.
            </p>
          </div>
        </div>

        {/* 2. QUICK LINKS: Retained your 3-column logic but made it responsive */}
        <div className={`${inter.className} text-white`}>
          <p className="font-bold mb-6">Quick links</p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-[14px]">
            {/* Column 1: Construction */}
            <div className="flex flex-col gap-2">
              <p className="font-bold text-xs uppercase opacity-50 mb-2">Build</p>
              <a href="#" className="hover:underline transition-all">Project Planning</a>
              <a href="#" className="hover:underline transition-all">Material Supply</a>
              <a href="#" className="hover:underline transition-all">Architectural</a>
              <a href="#" className="hover:underline transition-all">Site Management</a>
            </div>

            {/* Column 2: App Center */}
            <div className="flex flex-col gap-2">
              <p className="font-bold text-xs uppercase opacity-50 mb-2">Apps</p>
              <a href="#" className="hover:underline transition-all">Upload Apps</a>
              <a href="#" className="hover:underline transition-all">Download Hub</a>
              <a href="#" className="hover:underline transition-all">Developer Portal</a>
              <a href="#" className="hover:underline transition-all">Tech Support</a>
            </div>

            {/* Column 3: Shopping */}
            <div className="flex flex-col gap-2">
              <p className="font-bold text-xs uppercase opacity-50 mb-2">Shop</p>
              <a href="#" className="hover:underline transition-all">Shop All</a>
              <a href="#" className="hover:underline transition-all">Trending Now</a>
              <a href="#" className="hover:underline transition-all">Best Sellers</a>
              <a href="#" className="hover:underline transition-all">Tracking</a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM BAR: Uses your #3F3B3B color */}
      <div className="w-full h-16 mt-10 flex items-center justify-center bg-[#3F3B3B]">
        <p className={`${inter.className} text-white text-sm`}>
          DREAM 2026 all rights reserved
        </p>
      </div>
    </footer>
};

export default Footer;
