"use client";

import Image from "next/image";
import Link from "next/link";
import { Inter, Itim } from "next/font/google";
import { useCallback, useEffect, useState } from "react";
import ImageSlider from "./component/ImageSlider";
import useDreamTradingStore from "@/store/store";
import Footer from "@/component/ui/Footer";
import TopNavigationBar from "@/component/ui/TopNavigationBar";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdSearch } from "react-icons/io";
import Skeleton from "@/component/ui/Skeleton";
import Lightbox from "@/component/ui/ImageOverview";

const inter = Inter({
  display: "swap",
  weight: "600",
});

const itim = Itim({
  display: "swap",
  weight: "400",
});

const ProjectsDesktop = () => {
  const { projectData: globalDataState,  } = useDreamTradingStore(
    (state) => state,
  );
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

  ]

  const [lightboxImg, setLightboxImg] = useState(''); // Stores the URL or null

  const [loading, setLoading] = useState(false);

  const [categorySelected, setCategorySelected] = useState("All Projects");
  const [moreData,setMoreData] = useState([])

    

        useEffect(() => {
          
          fetch(
            `https://api.unsplash.com/search/photos?page=3&query=${categorySelected} construction project &client_id=PG4lf1B0kp4ZKEVlfaLmOLzldpPEQK0yyMt5Ml_9Vyk`,
            {
              method: "get",
            },
          )
            .then((r) => {
              return r.json();
            })
            .then((r) => {
              console.log("page two..");
              console.log(r);
      
              setMoreData(r.results);
            })
            .catch(console.log);
        }, [setMoreData,moreData,categorySelected]);
      
        useEffect(() => {
          if(categorySelected === "All Projects"){
            setMoreData([])
          }
        },[])

  const blurData =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==";

  const [selectedItemDetails, setSelectedDetails] = useState<{
    img: string;
    desc: string;
  }>();


  const  handleCategorySelected = useCallback((category:string)=>{

    setCategorySelected(category)

  },[])


  const  handleProjectGallerySelected = useCallback((data:{
    img: string;
    desc: string;
  })=>{

    setSelectedDetails(data)

  },[])

  return (
    <div className="h-dvh overflow-y-scroll">
      {/**Top nav bar */}
    
    <TopNavigationBar/>

      {/**
       * Main containerr
       */}
    <main className="h-screen w-full bg-[#F5F5F5] flex flex-col font-sans overflow-hidden">
      
      {/* 1. TOP HEADER (Responsive sizing) */}
      <header className="h-[76px] w-full bg-[#391452] p-4 shadow-lg shrink-0 flex items-center z-50">
        <div className="max-w-7xl mx-auto w-full flex items-center gap-4">
          <div className="flex-1 bg-white rounded-full h-11 flex items-center px-4 shadow-inner">
            <IoMdSearch className="text-slate-400 shrink-0" size={20} />
            <input 
              placeholder="Search projects..." 
              className="ml-3 w-full text-sm outline-none text-slate-700 bg-transparent" 
            />
          </div>
          <button className="hidden sm:block bg-[#ff0000] text-white px-8 h-11 rounded-full text-xs font-black uppercase tracking-widest hover:bg-red-600 transition-all shadow-lg">
            Find
          </button>
        </div>
      </header>

      {/* 2. MAIN HUB GRID - Responsive columns and stacking */}
      <div className="grid grid-cols-1 lg:grid-cols-7 flex-1 overflow-hidden">
        
        {/* COLUMN 1: CATEGORIES (Hidden on mobile, or could be a top horizontal bar) */}
        <aside className="hidden lg:flex col-span-1 border-r border-slate-200 bg-white p-6 flex-col h-full overflow-hidden">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Categories</p>
          <div className="flex-1 overflow-y-auto space-y-2 pr-2 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            <button 
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${categorySelected === "All Projects" ? "bg-[#2E0B80] text-white shadow-md" : "text-slate-600 hover:bg-slate-50"}`} 
              onClick={() => handleCategorySelected("All Projects")}
            >
              All Projects
            </button>
            {category.map((data, index) => (
              <button 
                key={index} 
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${categorySelected === data ? "bg-[#2E0B80] text-white shadow-md" : "text-slate-600 hover:bg-slate-50"}`} 
                onClick={() => handleCategorySelected(data)}
              >
                {data}
              </button>
            ))}
          </div>
        </aside>

        {/* COLUMN 2: GALLERY (Primary Scrollable Section) */}
        <section className={`${itim.className} col-span-1 lg:col-span-4 bg-[#F8F9FA] overflow-y-auto h-full p-4 md:p-8 custom-scrollbar`}>
          
          {/* Main Slider Area */}
          <div className="relative w-full aspect-video rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl mb-8 border-[4px] md:border-[6px] border-white shrink-0 bg-white">
            {moreData ? (
              <ImageSlider data={moreData as []} onItemSelected={() => {}} />
            ) : (
              <Skeleton className="w-full h-full" />
            )}
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#391452]">Project Gallery</h3>
            
            <div className="grid grid-cols-2 gap-3 md:gap-6 pb-20">
              {!moreData || moreData.length === 0 ? (
                Array(6).fill(0).map((_, i) => (
                  <Skeleton key={i} className="relative aspect-[4/3] rounded-xl md:rounded-3xl shadow-lg" />
                ))
              ) : (
                moreData.slice(0, 20).map((item:{urls?: {regular?: string}, description?: string}, index) => (
                  <div 
                    key={index} 
                    onClick={()=>handleProjectGallerySelected({img: item?.urls?.regular || "/", desc: item?.description || ""})} 
                    className="relative aspect-[4/3] rounded-xl md:rounded-3xl overflow-hidden shadow-lg group cursor-pointer border-2 border-transparent hover:border-[#2E0B80] transition-all"
                  >
                    <Image 
                      src={item?.urls?.regular || "/"} 
                      alt="project asset" 
                      fill 
                      className="object-cover transition-transform group-hover:scale-110 duration-700" 
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* COLUMN 3: ITEM DETAILS (Now Scrollable for content overflow) */}
        <aside className={`${itim.className} col-span-1 lg:col-span-2 bg-white border-t lg:border-t-0 lg:border-l border-slate-100 flex flex-col h-full overflow-hidden`}>
          {/* Header for details on mobile */}
          <div className="p-4 lg:hidden bg-slate-50 border-b border-slate-100 flex justify-between items-center">
            <span className="font-bold text-[#391452]">Project Details</span>
          </div>

          {/* Internal Scroll Area */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            <div className="space-y-8 pb-10">
                {/* Image Preview */}
                <div className="relative w-full aspect-square rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl ring-4 ring-slate-50">
                  {selectedItemDetails ? (
                    <Image 
                      src={selectedItemDetails?.img} 
                      alt="preview" 
                      fill 
                      className="object-cover transition-opacity duration-300" 
                    />
                  ) : (
                    <Skeleton className="w-full h-full" />
                  )}
                </div>

                <div className="space-y-4">
                  {selectedItemDetails ? (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">Skyline Tower</h3>
                      <p className="text-sm font-bold text-[#800020] uppercase tracking-widest mt-1">Dubai, UAE • 2024</p>
                      <div className="mt-6 bg-slate-50 p-6 rounded-3xl border-l-4 border-[#800020] shadow-inner">
                        <p className="text-sm text-slate-600 leading-relaxed italic">
                          "A masterpiece of modern architecture, featuring sustainable glass structures and a signature rooftop garden system."
                        </p>
                      </div>


                      <div className="mt-10 space-y-4">
  <div className="flex items-center justify-between">
    <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest">
      Project Gallery
    </h4>
    <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
      {moreData?.length || 0} Photos
    </span>
  </div>

  {/* INTERNAL ASSET GRID */}
  <div className="grid grid-cols-3 gap-2">
    {moreData ? (
      moreData.slice(0, 9).map((photo:{urls?: {regular?: string}}, i) => (
        <motion.div
          key={i}
          onClick={() => setLightboxImg(photo?.urls?.regular as string)}
          whileHover={{ scale: 0.95 }}
          className={`relative rounded-xl overflow-hidden bg-slate-100 cursor-pointer shadow-sm border border-white 
            ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}
        >
          <Image
            src={photo?.urls?.regular || "/"}
            alt={`Project view ${i}`}
            fill
            className="object-cover"
          />
          {/* Show "+More" overlay on the last visible thumbnail */}
          {i === 8 && moreData.length > 9 && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <p className="text-white text-xs font-bold">+{moreData.length - 8}</p>
            </div>
          )}
        </motion.div>
      ))
    ) : (
      /* Shimmer state for the internal grid */
      Array(6).fill(0).map((_, i) => (
        <Skeleton key={i} className="aspect-square rounded-xl" />
      ))
    )}
  </div>
  
  <p className="text-[10px] text-center text-slate-400 font-medium pt-2">
    Click to expand images
  </p>
</div>
                      
                      {/* Placeholder for long content to test scroll */}
                      <div className="mt-6 space-y-4">
                        <h4 className="font-bold text-slate-800 text-sm uppercase">Technical Specs</h4>
                        <ul className="text-xs text-slate-500 space-y-2 list-disc pl-4">
                          <li>Height: 420 Meters</li>
                          <li>Floors: 92 Floors</li>
                          <li>Eco-Rating: Platinum</li>
                          <li>Material: Recycled Glass & Steel</li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Skeleton className="h-8 w-3/4 rounded-lg" />
                      <Skeleton className="h-4 w-1/2 rounded-lg" />
                      <Skeleton className="h-32 w-full rounded-3xl" />
                    </div>
                  )}
                </div>

                {/* CTA Buttons - Using #800020 from your palette */}
                <div className="space-y-3 sticky bottom-0 bg-white pt-4">
                  <button className="w-full bg-[#800020] text-white py-4 rounded-2xl font-bold shadow-lg shadow-red-900/20 active:scale-95 transition-all hover:bg-[#600018]">
                    Book Consultation
                  </button>
                  <button className="w-full border-2 border-slate-100 text-slate-400 py-3 rounded-2xl font-bold text-xs hover:bg-slate-50 transition-all uppercase tracking-widest">
                    Download Blueprint
                  </button>
                </div>
            </div>
          </div>
        </aside>
      </div>
    </main>


    {
      lightboxImg && <Lightbox src={lightboxImg} onClose={() => setLightboxImg('')} />
    }



    <Footer/>
    </div>
  );
};




export default ProjectsDesktop;