"use client";

import Image from "next/image";
import { Inter, Itim, Aclonica } from "next/font/google";
import Footer from "../../../component/ui/Footer";
import { useMotionValueEvent, useScroll } from "framer-motion";
import React, { useCallback } from "react";
const itim = Itim({ subsets: ["latin"], weight: "400" });
const aclonica = Aclonica({ subsets: ["latin"], weight: "400" });
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useDreamTradingStore from "@/store/store";
import TopNavigationBar from "@/component/ui/TopNavigationBar";

const inter = Inter({
  display: "swap",
  weight: "600",
});

const interLight = Inter({
  display: "swap",
  weight: "400",
});

const LandingPage = () => {
  const {userData} = useDreamTradingStore((state) => state)
  
  const containerRef = React.useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll({ container: containerRef });

  const [hidden, setHidden] = React.useState(false);

  const router = useRouter()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest > 150 && !hidden) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleNavToApplication = useCallback(()=>{
   router.push('/pages/applications' as never)
  },[router])

  const handleNavToProjects = useCallback(()=>{
   router.push('/pages/projects')
  },[router])

  const handleNavToShops = useCallback(()=>{
   router.push('/pages/shop')
  },[router])

  const handleNavToAccountScreen = useCallback(() => {
    router.push('/pages/account')
  },[router])

  return (
    <div className="w-screen h-screen overflow-y-scroll">
      {/**Top nav bar */}
   <TopNavigationBar/>

      {/* Main content */}
       <motion.main 
      ref={containerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory bg-[#391452] text-white scroll-smooth"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      
      {/* SECTION 1: HERO */}
      <section className="relative w-full h-screen snap-start flex items-center px-4 md:px-6 overflow-hidden shrink-0">
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#22026f] blur-[100px] md:blur-[120px] opacity-40 rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center w-full">
          <div className="lg:col-span-7 space-y-4 md:space-y-6 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2c0140] border border-[#7a4238] text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-[#fc8570] mx-auto lg:mx-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff0000] animate-pulse" />
              Multi-Sector Infrastructure
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
              Design <span className="text-[#fc8570]">Bridges</span> <br /> 
              Build Apps.
            </h1>
            
            <p className="text-[#ede9e9] text-sm md:text-base lg:text-lg max-w-lg opacity-80 leading-relaxed mx-auto lg:mx-0">
              The first ecosystem merging heavy construction planning with high-performance application development.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 pt-2">
              <button onClick={handleNavToProjects} className="bg-[#ff0000] hover:bg-[#fc8570] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-xs md:text-sm transition-all active:scale-95 shadow-lg">
                Explore Projects
              </button>
              <button onClick={handleNavToShops} className="bg-[#2c0140] border border-[#7a4238] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-xs md:text-sm transition-all">
                Visit Shop
              </button>
            </div>
          </div>

          <motion.div 
            className="hidden lg:block lg:col-span-5 relative h-[400px] xl:h-[450px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Image src="/landing_img_1.png" alt="Hero" fill className="object-contain drop-shadow-2xl" priority />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: BENTO GRID (RESPONSIVE & MATCH SCREEN) */}
    <section className="w-full h-screen snap-start flex flex-col items-center px-4 md:px-6 bg-transparent shrink-0 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center py-4">
          
          {/* Main Grid Container: Using Flex for Mobile, Grid for Desktop */}
          <div className="flex flex-col md:grid md:grid-cols-4 md:grid-rows-2 gap-3 md:gap-8 h-[90%] md:h-[80%]">
            
            {/* 1. Construction - Fixed % height on mobile to save space */}
            <motion.div 
              onClick={handleNavToProjects}
              whileHover={{ y: -5 }}
              className="h-[45%] md:h-auto md:col-span-2 md:row-span-2 flex flex-col group cursor-pointer overflow-hidden"
            >
              <div className="mb-2 shrink-0">
                <h3 className="text-xl md:text-4xl font-black leading-tight text-white uppercase tracking-tighter">Construction</h3>
                <p className="hidden md:block text-xs text-[#ede9e9] opacity-60">Architectural builds & planning.</p>
              </div>
              {/* flex-1 makes the image fill the remaining space of the 45% container */}
              <div className="flex-1 relative w-full overflow-hidden rounded-2xl md:rounded-[3rem] shadow-2xl shadow-black/50">
                <Image 
                  src="https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Build" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
            </motion.div>

            {/* 2. App Center - Half of the remaining space on mobile */}
            <motion.div 
              onClick={handleNavToApplication}
              whileHover={{ y: -5 }}
              className="h-[25%] md:h-auto md:col-span-2 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0 group cursor-pointer overflow-hidden"
            >
              <div className="w-1/2 md:w-full mb-0 md:mb-2 shrink-0">
                <h3 className="text-lg md:text-3xl font-black text-white uppercase tracking-tighter">App Center</h3>
                <p className="hidden md:block text-[10px] text-[#ede9e9] opacity-60">Distribution hub.</p>
              </div>
              <div className="flex-1 relative w-full h-full md:h-48 overflow-hidden rounded-xl md:rounded-[2rem] shadow-xl shadow-black/40">
                <Image 
                  src="https://plus.unsplash.com/premium_photo-1726754632376-ccdcb83fe650?q=80&w=717&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Apps" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </motion.div>

            {/* 3. Marketplace - Remaining space on mobile */}
            <motion.div 
              onClick={handleNavToShops}
              whileHover={{ y: -5 }}
              className="h-[25%] md:h-auto md:col-span-2 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0 group cursor-pointer overflow-hidden"
            >
              <div className="w-1/2 md:w-full mb-0 md:mb-2 shrink-0">
                <h3 className="text-lg md:text-3xl font-black text-white uppercase tracking-tighter">Marketplace</h3>
                <p className="hidden md:block text-[10px] text-[#ede9e9] opacity-60">Shop categories.</p>
              </div>
              <div className="flex-1 relative w-full h-full md:h-48 overflow-hidden rounded-xl md:rounded-[2rem] shadow-xl shadow-black/40">
                <Image 
                  src="https://images.unsplash.com/photo-1449247666642-264389f5f5b1?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Shop" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED */}
      <section className="w-full h-screen snap-start flex flex-col bg-[#efefef] overflow-hidden text-[#3a393b] shrink-0">
        <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-4 md:px-6">
          <div className="flex items-end justify-between mb-6 md:mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-[#19002f]">Active Deployments</h2>
            <button className="text-[#ff0000] font-bold text-[10px] md:text-xs uppercase tracking-widest hover:underline">Portfolio</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`group cursor-pointer ${i === 3 ? 'hidden lg:block' : ''}`}>
                <div className="h-[280px] md:h-[340px] bg-white rounded-2xl md:rounded-[2rem] p-4 md:p-6 shadow-xl border border-[#ede9e9] flex flex-col justify-between overflow-hidden">
                  <div>
                    <h4 className="font-bold text-sm md:text-base text-[#19002f]">Project Module 0{i}</h4>
                    <p className="text-[9px] text-[#3e3d3e] opacity-50 uppercase font-black tracking-widest">Structural</p>
                  </div>
                  <div className="relative h-28 md:h-36 w-full rounded-xl overflow-hidden bg-slate-50">
                    <Image src="/landing_feature_card_1_img.png" alt="Project" fill className="object-contain p-2" />
                  </div>
                  <button className="w-full py-2.5 md:py-3 rounded-lg md:rounded-xl bg-[#391452] text-white font-bold text-[10px] md:text-xs group-hover:bg-[#ff0000] transition-colors">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </motion.main>
    <Footer/>
    </div>
  );
};

export default LandingPage;
