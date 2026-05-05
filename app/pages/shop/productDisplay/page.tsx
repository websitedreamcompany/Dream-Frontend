"use client";
import Footer from "@/component/ui/Footer";
import { Itim, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useCallback, Suspense } from "react";

import { FaAngleDown } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { MdAddChart } from "react-icons/md";
import CarsCatSectionBar from "./component/CarsCatSectionBar";
import HouseCatSectionBar from "./component/HouseCatSectionBar";
import PropertyCatSectionBar from "./component/PropertyCatSectionBar";
import TopNavigationBar from "@/component/ui/TopNavigationBar";

const itim = Itim({ subsets: ["latin"], weight: "400" });

const inter = Inter({ subsets: ["latin"], weight: "400" });

const ShopProductDisplayDesktop = () => {
  //const {moreData} = useDreamTradingStore((state)=>state)
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainComponent />
    </Suspense>
  );
};


const MainComponent = () => {

  const [moreData, setMoreData] = useState([]);
  const router = useRouter()



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
  }, []);

    
  const param = useSearchParams();
  
  const sectionDewtails = [
    {
      title: "Car, Bike & Boat",
      items: [
        "cars",
        "Bicycles & Accessories",
        "Car parts & tires",
        "Boats & Boat Accessories",
        "Motorcycles & Scooters",
        "Motorcycle Parts & Accessories",
        "Commercial vehicles & trailers",
        "Repairs & Services",
        "Caravans & motorhomes",
        "Other car, bike & boat",
      ],
    },
    {
      title: "property",
      items: [
        "New construction projects",
        "Rental apartments",
        "Houses for sale",
        "Temporary & shared accommodation",
        "container",
        "Condominiums",
        "Holiday & overseas properties",
        "Garages & Parking Spaces",
        "Commercial real estate",
        "Properties & Gardens",
        "Houses for rent",
        "Moving & Transport",
        "Other properties",
      ],
    },
    {
      title: "Home & Garden",
      items: [
        "Kitchen & Dining Room",
        "Living room",
        "bathroom",
        "Office",
        "decoration",
        "Home & Garden Services",
        "Garden accessories & plants",
        "Home textiles",
        "DIY",
        "Lamps & Lighting",
        "bedroom",
        "More about the house & garden",
      ],
    },
    {
      title: "Fashion & beauty",
      items: [
        "Women's clothing",
        "Men's clothing",
        "Beauty & Health",
        "Women's shoes",
        "Men's shoes",
        "Bags & Accessories",
        "Watches & Jewelry",
        "More Fashion & Beauty",
      ],
    },
    {
      title: "Electronics",
      items: [
        "Mobile Phone & Telephone",
        "household appliances",
        "Audio & HiFi",
        "Electronics services",
        "photo",
        "consoles",
        "Notebooks",
        "PCs",
        "PC Accessories & Software",
        "Tablets & Reader",
        "TV & Video",
        "Video games",
        "Other electronics",
      ],
    },

    {
      title: "Pets",
      items: [
        "dogs",
        "cats",
        "fish",
        "Small animals",
        "Farm animals",
        "horses",
        "Pet care & training",
        "Missing animals",
        "birds",
        "Accesories",
      ],
    },

    {
      title: "Family Child & Baby",
      items: [
        "Baby & children's clothing",
        "Strollers & Buggies",
        "Elderly care",
        "Baby & children's shoes",
        "Baby equipment",
        "Baby car seats & child car seats",
        "Babysitter & Childcare",
        "Children's room furniture",
        "toy",
        "Other family, child & baby",
      ],
    },

    {
      title: "Jobs",
      items: [
        "Gastronomy & Tourism",
        "Construction, Crafts & Production",
        "Part-time and side jobs",
        "Training",
        "Office work & administration",
        "Customer Service & Call Center",
        "Internships",
        "Social Sector & Care",
        "Transport, Logistics & Traffic",
        "Distribution, Purchasing & Sales",
        "More jobs",
      ],
    },
    {
      title: "Leisure, Hobbies & Neighborhood",
      items: [
        "Art & Antiques",
        "Collect",
        "Esotericism & Spirituality",
        "Food & Drink",
        "Leisure activities",
        "Handicrafts, crafts & arts and crafts",
        "Artist/Musician",
        "Model making",
        "Travel & Event Services",
        "Sports & Camping",
        "junk",
        "Lost & Found",
        "Other leisure activities, hobbies & neighborhood",
      ],
    },

    {
      title: "Music, Films & Books",
      items: [
        "Books & Magazines",
        "Film & DVD",
        "Office & Stationery",
        "comics",
        "Textbooks, School & University",
        "Music & CDs",
        "Musical instruments",
        "More music, films & books",
      ],
    },

    {
      title: "Tickets & Admission Tickets",
      items: [
        "Concerts",
        "Comedy & Cabaret",
        "Vouchers",
        "Children",
        "sport",
        "Theatre & Musical",
        "More tickets & admission tickets",
      ],
    },
    {
      title: "Services",
      items: [
        "Car, Bike & Boat",
        "Babysitter & Childcare",
        "Home & Garden",
        "Elderly care",
        "electronics",
        "Artist/Musician",
        "Travel & Events",
        "Pet care & training",
        "Moving & Transport",
        "Other services",
      ],
    },
    {
      title: "Give away & swap",
      items: ["Give as a gift", "lending"],
    },
    {
      title: "Lessons & Courses",
      items: [
        "Tutoring",
        "Computer courses",
        "Esotericism & Spirituality",
        "Cooking & Baking",
        "Art & Design",
        "Music & Singing",
        "Sports courses",
        "Language courses",
        "Dance classes",
        "Continuing education",
        "Further lessons & courses",
      ],
    },
    {
      title: "Neighborhood help",
      items: ["Neighborhood help"],
    },
  ];
  const [productItemClicked, setProductItemClicked] = useState(false);

  const [showMoreindex, setShowMoreIndex] = useState(-1);
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleShowMore = useCallback(
    (index: number) => {
      if (activeIndex === index) {
        setActiveIndex(-1);
        setShowMoreIndex(-1);
        return;
      }
      setActiveIndex(index);
      setShowMoreIndex(index);
    },
    [activeIndex],
  );

  const handleNavToProductOverview = useCallback(()=>{
    
    router.push(`/pages/shop/productOverview?cat=${param.get('cat')}`)
  },[router,param])



  return  <div className={`${itim.className}  h-dvh overflow-y-scroll`}>
      {/**Top nav bar */}
  <TopNavigationBar/>
  
      {/**
       * Main containerr
       */}
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

<main className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-emerald-100">
      
      {/* 1. BREADCRUMBS & SORT HEADER (Sticky) */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6 h-16 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs md:text-sm">
            <span className="text-slate-400">Rental apartments</span>
            <span className="text-slate-300">/</span>
            <p className="font-bold text-slate-800">
              1-25 of 103,000 rental apartments in Germany
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <span className="text-slate-500">Sort by:</span>
            <button className="text-emerald-600 font-bold hover:text-emerald-700 flex items-center gap-1 transition-colors">
              Recommended <span className="text-[10px]">▼</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. MAIN LAYOUT CONTAINER */}
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-12 gap-6 p-6 flex-1">
        
        {/* SIDEBAR: SCROLLABLE & STICKY (Spans 3 Columns) */}
        <aside className="col-span-12 lg:col-span-3">
          <div 
            className="lg:sticky lg:top-20 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col lg:h-[calc(100vh-100px)] transition-all"
          >
            <div className="flex items-center justify-between mb-6 shrink-0">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Filters</h2>
              <button className="text-[10px] text-emerald-600 font-bold hover:underline">Clear all</button>
            </div>

            {/* INTERNAL SCROLLABLE CONTENT */}
            <div 
              className="flex-1 overflow-y-auto pr-2 scrollbar-hide space-y-4"
              style={{ scrollbarWidth: 'none' }}
            >
              {categorySectionToDisplay(param?.get("title")??'')}
              
              {/* Added padding at bottom to ensure last filter isn't cut off */}
              <div className="h-10" />
            </div>
          </div>
        </aside>

        {/* CONTENT SECTION: Apartment List (Spans 9 Columns) */}
        <section className="col-span-12 lg:col-span-9 space-y-6">
          {moreData.length > 0 ? (
            moreData.map((data, index) => (
              <div
                key={index}
                onClick={handleNavToProductOverview}
                className="group bg-white rounded-[2rem] p-4 md:p-6 flex flex-col md:flex-row gap-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative aspect-video md:aspect-[4/3] md:w-[40%] shrink-0 rounded-2xl overflow-hidden bg-slate-100">
                  <Image 
                    alt="apartment preview" 
                    fill 
                    src={(data as { urls?: { regular?: string } })?.urls?.regular || "/"} 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={index < 3}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                    Verified
                  </div>
                </div>

                {/* Info Section */}
                <div className="flex flex-col justify-between flex-1 py-1">
                  <div>
                    <div className="flex items-center gap-2 text-slate-400 text-xs mb-4">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                      <p>Malchin, Mecklenburg-Vorpommern</p>
                    </div>

                    <h2 className="font-bold text-xl md:text-2xl text-slate-900 leading-tight mb-4 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                      Modern 3-room apartment with large balcony in Malchin "Weitblick" Project
                    </h2>

                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 opacity-80">
                      The renovation work on the project is currently in full swing. 
                      Since October 1st, 2025, experience luxury finishes and breathtaking views.
                    </p>
                  </div>

                  {/* Pricing & Specs (8pt Grid Spacing) */}
                  <div className="mt-8 flex items-end justify-between border-t border-slate-50 pt-6">
                    <div className="flex gap-3 text-slate-600 text-sm font-bold">
                      <span className="bg-slate-100 px-4 py-1.5 rounded-xl">64 m²</span>
                      <span className="bg-slate-100 px-4 py-1.5 rounded-xl">3 Zi.</span>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Warm Rent</p>
                      <p className="text-emerald-600 font-black text-3xl">
                        €495
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="h-96 flex flex-col items-center justify-center bg-white rounded-3xl border border-dashed border-slate-200">
              <p className="text-slate-400 font-medium">No apartments match your filters.</p>
              <button className="mt-4 text-emerald-600 font-bold hover:underline">Reset all filters</button>
            </div>
          )}
        </section>
      </div>

      <Footer />
    </main>


    </div>
 }
const  categorySectionToDisplay = (cat:string) =>{
 
    switch(cat.toLowerCase().trim()){
                
                case "Car, Bike".toLowerCase().trim():{ return <CarsCatSectionBar />
                break
                }
                case "property".toLowerCase().trim(): {
                return <PropertyCatSectionBar />
                 break
                }
                default : return <HouseCatSectionBar />
              }
}
 
export default ShopProductDisplayDesktop;
