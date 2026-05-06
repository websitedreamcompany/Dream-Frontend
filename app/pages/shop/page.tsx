"use client";
import { Itim, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import Footer from "@/component/ui/Footer";
import MainShopContainer from "./component/MainShopContainer";
import ProductDetailsContainer from "./component/ProductDetailsContainer";
import TopNavigationBar from "@/component/ui/TopNavigationBar";

const itim = Itim({ subsets: ["latin"], weight: "400" });

const inter = Inter({ subsets: ["latin"], weight: "400" });

const ShopDesktop = () => {
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

  return (
    <div className="h-dvh overflow-y-scroll">
      {/**Top nav bar */}
     <TopNavigationBar/>
<main className="min-h-screen relative pb-20 bg-slate-50">
  {/* The main container should not have overflow-y-scroll if you want the sidebar to stick to the viewport */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full max-w-[1600px] mx-auto px-4 lg:px-8">
    
    {/* SECTION 1: SIDEBAR COLUMN */}
    <aside className="col-span-1 lg:col-span-3 pt-6 hidden md:flex">
      {/* 
          1. lg:sticky: Only stick on desktop 
          2. lg:top-24: Distance from top (adjust based on your Nav height)
          3. h-fit: Ensures the container only takes up as much space as the categories 
      */}
      <div className=" w-full rounded-3xl bg-white border border-slate-200 shadow-sm lg:sticky lg:top-24 h-fit overflow-hidden">
        
        <p className={`${itim.className} p-5 font-bold text-xl text-[#391452] border-b border-slate-100 bg-white`}>
          Category
        </p>

        {/* Internal scroll for categories if the list is longer than the screen */}
        <div
          className={`${itim.className} overflow-y-auto max-h-[50vh] lg:max-h-[calc(100vh-200px)] p-2`}
          style={{ scrollbarWidth: "none" }}
        >
          {sectionDewtails.map((data, index) => (
            <div key={index} className="p-4 group">
              {index > 0 && <div className="h-px w-full bg-slate-100 mb-4 group-hover:bg-[#ff0000]/10" />}
              
              <p className="font-bold mb-3 text-[#391452] uppercase text-[10px] tracking-widest opacity-60">
                {data.title}
              </p>

              <div className="flex flex-col gap-2">
                {(showMoreindex !== index ? data.items.slice(0, 2) : data.items).map((item, idx) => (
                  <Link
                    href={`/pages/shop/productDisplay?title=${data.title}&cat=${item}`}
                    key={idx}
                    className="text-slate-600 text-sm hover:text-[#ff0000] hover:translate-x-1 transition-all duration-200 block"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              {data.items.length > 2 && (
                <button
                  onClick={() => handleShowMore(index)}
                  className="text-xs font-bold text-[#ff0000] mt-4 hover:underline"
                >
                  {showMoreindex === index ? "Show Less ↑" : "More Items +"}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>

    {/* SECTION 2: CONTENT AREA */}
    <section className="col-span-1 lg:col-span-9 pt-6">
      {productItemClicked ? (
        <div className="bg-white rounded-[2.5rem] p-6 lg:p-10 shadow-sm border border-slate-200 min-h-screen transition-all">
           <ProductDetailsContainer />
        </div>
      ) : (
        <div className="w-full h-full">
          <MainShopContainer
            onItemSelected={() => {
              setProductItemClicked(true);
            }}
          />
        </div>
      )}
    </section>
  </div>
</main>


  <Footer  />
    </div>
  );
};

export default ShopDesktop;
