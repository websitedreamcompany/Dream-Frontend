'use client'

import { motion } from "framer-motion";
import { Inter, Itim } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const itim = Itim({ subsets: ["latin"], weight: "400" });
const inter = Inter({
  display: "swap",
  weight: "600",
});


const TopNavigationBar = () => {    

   return   <nav className={`${inter.className} sticky top-0 z-50 w-full h-20 bg-[#391452]/90 backdrop-blur-md border-b border-white/10 shadow-lg flex items-center`}>
         <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-6">
           
           {/* 1. LOGO AREA */}
           <Link href="/" className="relative w-14 h-14 hover:scale-105 transition-transform">
             <Image
               src="/logo.svg"
               alt="Dream Eco Logo"
               fill
               className="object-contain"
             />
           </Link>
   
           {/* 2. DESKTOP NAVIGATION */}
           <div className="hidden md:flex items-center gap-10">
            
             <Link href="/" className="text-white text-sm font-medium hover:text-[#fc8570] transition-colors">
               Home
             </Link>
             <Link href="/pages/applications" className="text-white text-sm font-medium hover:text-[#fc8570] transition-colors">
               Applications
             </Link>
             <Link href="/pages/projects" className="text-white text-sm font-medium hover:text-[#fc8570] transition-colors">
               Projects
             </Link>
             <Link href="/pages/shop" className="text-white text-sm font-medium hover:text-[#fc8570] transition-colors">
               Shops
             </Link>
             
             {/* CTA Button */}
             <button className="bg-[#ff0000] text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-[#fc8570] transition-all shadow-md active:scale-95">
               GET STARTED
             </button>
           </div>
   
           {/* 3. MOBILE HAMBURGER ICON */}
           <button className="md:hidden flex flex-col items-end gap-1.5 p-2 group">
             <motion.span 
               initial={{ x: 20, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               className="w-5 h-0.5 bg-white rounded-full transition-all group-hover:w-8" 
             />
             <motion.span 
               className="w-8 h-0.5 bg-white rounded-full" 
             />
             <motion.span 
               initial={{ x: -20, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               className="w-5 h-0.5 bg-white rounded-full transition-all group-hover:w-8" 
             />
           </button>
   
         </div>
       </nav>

}


export default TopNavigationBar;