"use client";

import Image from "next/image";
import Link from "next/link";
import { Inter, Itim } from "next/font/google";
import { useState } from "react";
import ImageSlider from "./component/ImageSlider";
import useDreamTradingStore from "@/store/store";
import Footer from "@/component/ui/Footer";
import TopNavigationBar from "@/component/ui/TopNavigationBar";
import { motion } from "framer-motion";

const inter = Inter({
  display: "swap",
  weight: "600",
});

const itim = Itim({
  display: "swap",
  weight: "400",
});

const ProjectsDesktop = () => {
  const { projectData: globalDataState, moreData } = useDreamTradingStore(
    (state) => state,
  );

  const blurData =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==";

  const [selectedItemDetails, setSelectedDetails] = useState<{
    img: string;
    desc: string;
  }>();

  const category = [
    "Residential",
    "Commercial",
    "Industrial",
    "Landscape",
    "Interior Design",
    "Urban Planning",
    "Sustainable Design",
    "Renovation & Restoration",
    "Cultural & Civic",
    "Mixed-Use Developments",

  ];

  return (
    <div className="h-dvh overflow-y-scroll">
      {/**Top nav bar */}
    
    <TopNavigationBar/>

      {/**
       * Main containerr
       */}

    <main className="min-h-screen w-full bg-[#F5F5F5] flex flex-col font-sans">
      
      <div className="flex flex-col lg:grid lg:grid-cols-7 flex-1 h-screen overflow-hidden">
        
        {/* COLUMN 1: CATEGORIES - Redesigned to match Application Hub */}
        <aside className="col-span-1 lg:col-span-1 bg-white border-r border-slate-200 p-6 space-y-2 overflow-y-auto">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Categories</p>
          
          <button 
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all bg-[#2E0B80] text-white shadow-lg shadow-blue-900/20`}
          >
            All Projects
          </button>

          {category.map((data, index) => (
            <button 
              key={index} 
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all border border-transparent"
            >
              {data}
            </button>
          ))}
        </aside>

        {/* COLUMN 2: GALLERY & CONTENT */}
        <section className={`${itim.className} col-span-4 lg:col-span-4 bg-[#F8F9FA] p-8 overflow-y-auto border-r border-slate-200`}>
          
          {/* STICKY FILTER BAR */}
          <nav className="sticky top-0 z-50 bg-[#C5C4C4]/90 backdrop-blur-md rounded-2xl border border-black/5 shadow-sm h-14 flex items-center px-6 justify-between mb-8">
            <div className="flex items-center gap-12 flex-1 justify-center">
              <button className="relative group py-2">
                <p className="text-xs font-bold uppercase tracking-widest text-[#4A4A4A]">Residential</p>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#4A4A4A] rounded-full" />
              </button>
              <button className="relative group py-2 opacity-50 hover:opacity-100 transition-opacity">
                <p className="text-xs font-bold uppercase tracking-widest text-[#4A4A4A]">Commercial</p>
              </button>
              <button className="flex items-center gap-2 bg-black/5 px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-tighter">
                <span>Filter</span>
                <Image src="/drop_down_black_icon.png" alt="drop" width={10} height={10} />
              </button>
            </div>
          </nav>

          {/* MAIN HERO IMAGE */}
          <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl mb-8 border-[6px] border-white group">
            <Image 
              src={(globalDataState?.data?.[7] as { urls?: { regular?: string } })?.urls?.regular || "/"} 
              alt="featured" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority 
            />
          </div>

          {/* SUB-GALLERY GRID */}
          <div className="grid grid-cols-2 gap-6">
            {moreData?.slice(0, 4).map((item, index) => (
              <div key={index} className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg group cursor-pointer ring-1 ring-black/5">
                <Image 
                  src={(item as { urls?: { regular?: string } })?.urls?.regular || "/"} 
                  alt="project" 
                  fill 
                  className="object-cover transition-transform group-hover:scale-110 duration-500" 
                />
                <div className="absolute inset-0 bg-[#2E0B80]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </section>

        {/* COLUMN 3: ITEM DETAILS */}
        <aside className={`${itim.className} col-span-2 lg:col-span-2 bg-white p-8 overflow-y-auto border-l border-slate-100 mb-4`}>
          <div className="space-y-8">
            <div className="relative w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl ring-4 ring-slate-50">
              <Image 
                src={(selectedItemDetails as { img?: string })?.img || "/demo_projects_image_2.png"} 
                alt="preview" 
                fill 
                className="object-cover" 
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-slate-900 leading-tight">Skyline Tower</h3>
              <p className="text-sm font-bold text-[#800020] uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#800020] animate-pulse" />
                Dubai, UAE • 2024
              </p>
              <div className="bg-slate-50 p-6 rounded-3xl border-l-4 border-[#800020]">
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  "A masterpiece of modern architecture, featuring sustainable glass structures and a signature rooftop garden system."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3">
              <button className="col-span-1 bg-slate-100 aspect-square rounded-2xl flex items-center justify-center hover:bg-[#2E0B80] hover:text-white transition-all group">
                 <Image src="/slanted_rect_for_menu.png" alt="menu" width={20} height={20} className="group-hover:invert" />
              </button>
              <button className="col-span-2 bg-slate-100 rounded-2xl flex items-center justify-center hover:bg-[#2E0B80] hover:text-white transition-all group">
                <Image src="/email_icon.png" alt="email" width={18} height={18} className="group-hover:invert" />
              </button>
              <button className="col-span-1 bg-slate-100 aspect-square rounded-2xl flex items-center justify-center hover:bg-slate-200 font-bold text-slate-400">
                ...
              </button>
            </div>

            <div className="space-y-4 pt-4">
              <button className="w-full bg-[#800020] text-white py-5 rounded-[2rem] font-bold shadow-xl shadow-red-900/20 hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-widest text-xs">
                Book Consultation
              </button>
              
              <div className="flex gap-3">
                <div className="flex-1 bg-[#2E0B80] rounded-2xl flex items-center justify-center p-4 shadow-inner">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Image key={i} src="/application_rating_star_icon.png" alt="star" width={14} height={14} />
                    ))}
                  </div>
                </div>
                <div className="bg-slate-100 px-6 rounded-2xl flex items-center justify-center text-[10px] font-black uppercase text-slate-400 tracking-tighter">
                  120 Previews
                </div>
              </div>
            </div>
          </div>
        </aside>

      </div>
    </main>

    <Footer/>
    </div>
  );
};

export default ProjectsDesktop;