'use client'

import { Itim, Inter } from "next/font/google";
import Image from "next/image"
import Link from "next/link"
import Footer from "../../../../component/ui/Footer";
import ImageSlider from "./component/ImageSlider";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { FaAngleDown } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { MdAddChart } from "react-icons/md";
import TopNavigationBar from "@/component/ui/TopNavigationBar";


const itim = Itim({ subsets: ["latin"], weight: "400" });

const inter = Inter({ subsets: ["latin"], weight: "400" });

const ProductOverview = () =>{
    
  return <Suspense fallback={<div>loading....</div>}>
    <ProductOverviewContent/>
  </Suspense>
}


const ProductOverviewContent = () =>{
    
  const [moreData, setMoreData] = useState([]);
      
      const param = useSearchParams()
  
    
      useEffect(() => {
    
        
        fetch(
          `https://api.unsplash.com/search/photos?page=3&query=${param.get("cat")}&client_id=PG4lf1B0kp4ZKEVlfaLmOLzldpPEQK0yyMt5Ml_9Vyk`,
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
      }, [setMoreData,moreData,param]);


    return   <div className="bg-[#E8E8E8] h-screen overflow-y-scroll">
         {/**Top nav bar */}
          <TopNavigationBar/>

           
            <div className="bg-web-navbar w-full flex items-center justify-center mt-1 py-4">
    
      <div className="max-w-6xl w-full mx-auto h-auto flex flex-col md:flex-row items-center justify-between px-5 gap-6">
        
        <div className="w-full lg:flex-1">
          <div className="flex flex-col md:flex-row bg-white min-h-12 md:h-12 rounded-2xl md:rounded-full shadow-sm border border-slate-200 overflow-hidden p-2 md:p-0">
            
            <div className="flex flex-1 items-center px-4 min-w-37.5">
              <IoMdSearch className="text-slate-400 shrink-0" size={20} />
              <input 
                placeholder="What are you looking for..." 
                className="ml-3 w-full text-[13px] outline-none bg-transparent" 
              />
            </div>

            <div className="hidden md:block h-6 w-px bg-slate-200 self-center"></div>

            <div className="flex items-center justify-between px-4 md:px-6 py-2 md:py-0 cursor-pointer hover:bg-slate-50">
              <p className="text-[13px] whitespace-nowrap">All categories</p>
              <FaAngleDown className="ml-2 text-slate-400" size={14} />
            </div>

            <div className="hidden md:block h-6 w-px bg-slate-200 self-center"></div>

            <div className="flex items-center px-4 md:px-6 py-2 md:py-0">
              <p className="text-[13px] whitespace-nowrap">Deutschland</p>
            </div>

            <div className="hidden md:block h-6 w-px bg-slate-200 self-center"></div>

            <div className="flex items-center justify-between px-4 md:pl-6 md:pr-1 py-2 md:py-0 gap-4">
              <div className="flex items-center cursor-pointer">
                <p className="text-[13px] whitespace-nowrap">Entire town</p>
                <FaAngleDown className="ml-2 text-slate-400" size={14} />
              </div>
              
              <button className="bg-blue-600 text-white px-6 h-10 rounded-xl md:rounded-full text-[13px] font-bold hover:bg-blue-700 transition w-full md:w-auto">
                Find
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8 items-center shrink-0">
          <div className="flex flex-col items-center cursor-pointer group">
            <MdAddChart className="text-slate-700 group-hover:text-blue-600 transition" size={20} />
            <p className="text-[10px] uppercase font-bold mt-1 tracking-wide">Advertise</p>
          </div>

          <div className="flex flex-col items-center cursor-pointer group">
            <IoPerson className="text-slate-700 group-hover:text-blue-600 transition" size={20} />
            <p className="text-[10px] uppercase font-bold mt-1 tracking-wide">Mine</p>
          </div>
        </div>

      </div>
    </div>

           {/**Body  */}
             <main className="min-h-screen bg-slate-50 overflow-y-auto font-sans pb-20">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 px-6 pt-10">
        
        {/* LEFT SECTION: Content & Description (8 Columns) */}
        <section className="col-span-12 lg:col-span-8 space-y-6">
          
          {/* 1. Image Slider Container */}
          <div className="rounded-3xl overflow-hidden shadow-xl bg-white border border-slate-100">
            {moreData ? (
              <ImageSlider data={moreData as []} onItemSelected={() => {}} />
            ) : (
              <div className="h-96 bg-slate-200 animate-pulse flex items-center justify-center text-slate-400">
                Loading Images...
              </div>
            )}
          </div>

          {/* 2. Primary Product Info Card */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h1 className="font-bold text-3xl text-slate-900 leading-tight mb-4">
              Modern 3-room apartment with large balcony in Malchin
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-emerald-600 font-black text-3xl">€725</span>
              <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Negotiable
              </span>
              <div className="h-4 w-px bg-slate-200 mx-2" />
              <p className="text-slate-500 text-sm font-medium">Local Pickup Only</p>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-50 text-slate-500 text-sm">
              <div className="flex items-center gap-2">
                <span className="opacity-60">📍</span>
                <p>13629 Berlin - Charlottenburg</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="opacity-60">📅</span>
                <p>April 11, 2026</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="opacity-60">👁️</span>
                <p>138 Views</p>
              </div>
            </div>
          </div>

          {/* 3. Description Card */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="font-bold text-xl text-slate-900 mb-6 border-b border-slate-50 pb-4">
              Description
            </h2>
            <div className="text-slate-600 leading-8 text-base">
              <p>
                I'm offering this well-maintained army bicycle in excellent condition. 
                The bike rides like a dream and is in superb mechanical condition. 
                All three brakes work perfectly. The tires are soft and free of cracks, 
                having been recently replaced.
              </p>
              <br />
              <p>
                The bike comes with its original leather frame bag and includes the 
                complete original tool kit, which is very rare. The key for the rear 
                wheel lock/U-lock is also included. Overall, a truly magnificent piece.
              </p>
            </div>
          </div>
        </section>

        {/* RIGHT SECTION: User Profile & Actions (4 Columns) */}
        <section className="col-span-12 lg:col-span-4 space-y-6">
          
          {/* 1. Quick Action Buttons */}
          <div className="sticky top-10 space-y-3">
            <button className="w-full bg-[#391452] hover:bg-purple-900 text-white font-bold py-4 rounded-2xl shadow-lg shadow-purple-900/20 transition-all active:scale-[0.98]">
              Send Message
            </button>
            <button className="w-full bg-white border-2 border-slate-200 text-slate-700 font-bold py-4 rounded-2xl hover:bg-slate-50 transition-all active:scale-[0.98]">
              Add to Watchlist
            </button>
            <button className="w-full bg-white border-2 border-slate-200 text-slate-700 font-bold py-4 rounded-2xl hover:bg-slate-50 transition-all active:scale-[0.98]">
              Share This Ad
            </button>

            {/* 2. Detailed Profile Card */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-6 mt-8 overflow-hidden">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-14 h-14 bg-purple-100 text-[#391452] flex items-center justify-center rounded-2xl font-black text-xl shrink-0">
                  A
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Agwu Joe</h3>
                  <p className="text-xs text-slate-400 font-medium">Member since April 2024</p>
                </div>
              </div>

              {/* Status Badges - Using #391452 for consistency */}
              <div className="space-y-2 mb-8">
                {[
                  { icon: "/satisfaction.svg", label: "Top Satisfaction" },
                  { icon: "/friendly_icon.svg", label: "Very Friendly" },
                  { icon: "/reliable_icon.svg", label: "Very Reliable" }
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-3 bg-purple-50 p-3 rounded-xl border border-purple-100">
                    <div className="w-5 h-5 relative">
                      <Image alt="icon" src={badge.icon} fill className="object-contain" />
                    </div>
                    <span className="text-[#391452] font-bold text-xs">{badge.label}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-50 space-y-3">
                <div className="flex items-center gap-3 text-slate-600 text-sm">
                  <Image alt="private" src="/private_account.svg" width={18} height={18} />
                  <span>Private User</span>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <button className="flex items-center gap-2 px-6 py-2 border-2 border-[#391452] text-[#391452] rounded-full font-bold text-sm hover:bg-[#391452] hover:text-white transition-all">
                    Follow User
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
       <Footer/>
           
        </div>
 
}


export default ProductOverview