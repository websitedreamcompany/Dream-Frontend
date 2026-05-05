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
    className="min-h-screen bg-[#391452] text-white selection:bg-[#ff0000] selection:text-white">
      
      {/* 1. LAYERED HERO */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2c0140] border border-[#7a4238] text-[10px] font-bold tracking-widest uppercase text-[#fc8570]"
            >
              <span className="w-2 h-2 rounded-full bg-[#ff0000] animate-pulse" />
              Multi-Sector Infrastructure
            </motion.div>
            
            <h1 className={`${itim.className} text-6xl md:text-8xl font-black leading-[1.05] tracking-tight`}>
              Design <span className="text-[#fc8570]">Bridges</span> <br /> 
              Build Apps.
            </h1>
            
            <p className="text-[#ede9e9] text-lg max-w-lg opacity-80 leading-relaxed">
              The first ecosystem merging heavy construction planning with high-performance application development and a global marketplace.
            </p>
            
            <div className="flex gap-4 pt-4">
              <button onClick={()=>{handleNavToProjects()}} className="bg-[#ff0000] hover:bg-[#fc8570] text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-black/40 transition-all active:scale-95">
                Explore Projects
              </button>
              <button onClick={()=>{handleNavToShops()}} className="bg-[#2c0140] border border-[#7a4238] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#3e3d3e] transition-all">
                Visit Shop
              </button>
            </div>
          </div>

          {/* ASYMMETRIC ASSET */}
          <motion.div 
            className="hidden lg:block lg:col-span-5 relative h-[500px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="absolute inset-0 bg-[#2c0140] rounded-[4rem] rotate-6 border border-[#7a4238]/30" />
            <Image src="/landing_img_1.png" alt="Hero" fill className="object-contain relative z-10 drop-shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* 2. THE BENTO ECOSYSTEM GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[600px]">
          
          {/* Main Pillar: Construction (Large Card) */}
          <motion.div 
           onClick={()=>{
            handleNavToProjects()
           }}
            whileHover={{ y: -10 }}
            className="md:col-span-2 md:row-span-2 bg-[#2c0140] rounded-[3rem] p-10 border border-[#7a4238]/20 flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="z-10">
              <h3 className={`${itim.className} text-3xl font-bold mb-4`}>Construction & Engineering</h3>
              <p className="text-sm text-[#ede9e9] opacity-60 max-w-xs">Precision planning for physical infrastructure and architectural builds.</p>
            </div>
            <div className="relative h-64 w-full mt-8 z-10 ">
              <Image src="https://images.unsplash.com/photo-1694521787673-28cbd8830ea5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Construction" fill className="object-contain group-hover:scale-110 rounded-2xl transition-transform duration-500 " />
            </div>
            {/* Background Radial Glow */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#ff0000] blur-[100px] opacity-10" />
          </motion.div>

          {/* App Center (Tall Card) */}
          <motion.div 
          onClick={()=>{handleNavToApplication()}}
            whileHover={{ y: -10 }}
            className="md:col-span-2 bg-[#22026f] rounded-[3rem] p-8 border border-[#7a4238]/20 flex items-center justify-between group overflow-hidden"
          >
            <div className="flex-1">
              <h3 className={`${itim.className} text-2xl font-bold mb-2`}>App Center</h3>
              <p className="text-xs text-[#ede9e9] opacity-60">Upload & Download Hub.</p>
            </div>
            <div className="relative w-32 h-32">
              <Image src="https://plus.unsplash.com/premium_photo-1721920066980-136a3f61d827?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Apps" fill className="object-contain group-hover:rotate-12 transition-transform" />
            </div>
          </motion.div>

          {/* Global Marketplace (Square Card) */}
          <motion.div 
          onClick={()=>handleNavToShops()}
            whileHover={{ y: -10 }}
            className="md:col-span-2 bg-[#3e3d3e] rounded-[3rem] p-8 border border-[#7a4238]/20 flex items-center justify-between group"
          >
            <div className="flex-1">
              <h3 className={`${itim.className} text-2xl font-bold mb-2`}>Marketplace</h3>
              <p className="text-xs text-[#ede9e9] opacity-60">Shop all categories instantly.</p>
            </div>
            <div className="relative w-32 h-32">
              <Image src="https://images.unsplash.com/photo-1674027392857-9aed6e8ecab9?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Marketplace" fill className="object-contain group-hover:scale-110 transition-transform" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. FEATURED BUILDS (Clean Minimal Row) */}
      <section className="bg-[#efefef] py-32 rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <h2 className={`${itim.className} text-4xl font-bold text-[#19002f]`}>Active Deployments</h2>
            <button className="text-[#ff0000] font-bold text-sm hover:underline">View Portfolio</button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="h-[400px] bg-white rounded-[2.5rem] p-8 shadow-xl border border-[#ede9e9] flex flex-col justify-between relative overflow-hidden">
                  <div>
                    <h4 className="font-bold text-xl text-[#19002f]">Project Module 0{i}</h4>
                    <p className="text-xs text-[#3e3d3e] opacity-60 mt-2">Validated Architecture</p>
                  </div>
                  <div className="relative h-48 w-full">
                    <Image src="/landing_feature_card_1_img.png" alt="Project" fill className="object-contain" />
                  </div>
                  <button className="w-full py-4 rounded-2xl bg-[#391452] text-white font-bold group-hover:bg-[#ff0000] transition-colors">
                    View Details
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
