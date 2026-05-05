import { Itim } from "next/font/google";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { FaBabyCarriage, FaRegHeart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { MdAddChart, MdOutlinePets, MdOutlinePlayLesson, MdOutlineSportsVolleyball } from "react-icons/md";
import { IoCarOutline, IoPerson } from "react-icons/io5";
import { TbHomeStar, TbMovie } from "react-icons/tb";
import { MdOutlineChair } from "react-icons/md";
import DropDownMenuForCategory from "./Category/DropDownMenuForCategory";
import { PiBagBold, PiGraduationCapBold, PiPlugsDuotone, PiTShirtBold } from "react-icons/pi";
import { BsGift } from "react-icons/bs";
import { GiShoppingCart, GiLightningSpanner, GiHerbsBundle } from "react-icons/gi";
import { LiaHandsHelpingSolid } from "react-icons/lia";

const itim = Itim({ subsets: ["latin"], weight: "400" });

const MainShopContainer = ({
  onItemSelected,
  type = "desktop",
}: {
  onItemSelected: (index: number) => void;
  type?: "desktop" | "mobile";
}) => {
  switch (type) {
    case "desktop": {
      return <ForDeskTop onItemSelected={onItemSelected} />;
    }
    case "mobile": {
      return <ForMobile onItemSelected={onItemSelected} />;
    }

    default: {
      return <ForDeskTop onItemSelected={onItemSelected} />;
    }
  }
};

const ForDeskTop = ({
  onItemSelected,
}: {
  onItemSelected: (index: number) => void;
}) => {
  const [dropDownCat, setDropDownCat] = useState(false);
  const [data,setData] = useState([])

  const category = [
    {
      title: "Real Estate",
      icon:<TbHomeStar className=" bg-[#dbcfe4] p-1 rounded" size={35}  color="#391452"/>,
  
    },
    {
      title: "Fashion & Beauty",
      icon:<PiTShirtBold className=" bg-[#dbcfe4] p-1 rounded" size={35}  color="#391452" />,
      
    },
    {
      title: "Cars,Bikes & Boats",
      icon:<IoCarOutline className=" bg-[#dbcfe4] p-[1.0px] rounded" size={35}  color="#391452" />,
    
    },
    {
      title: "Home & Garden",
      icon:  <MdOutlineChair className=" bg-[#dbcfe4] p-1 rounded" size={35}  color="#391452"/>
    },
    {
      title: "Jobs",
      icon:<PiBagBold className=" bg-[#dbcfe4] p-1 rounded" size={35}  color="#391452" />,
    
    },
    {
      title: "Electronics",
      icon:<PiPlugsDuotone className=" bg-[#dbcfe4] p-1 rounded" size={35}  color="#391452" />,
    
    },
    {
      title: "Family,Child & Baby",
      icon:<FaBabyCarriage  className=" bg-[#dbcfe4] p-[5.2px] rounded" size={35}  color="#391452" />,
   
    },
    {
      title: "Pets",
      icon:<MdOutlinePets className=" bg-[#dbcfe4] p-1 rounded" size={35}  color="#391452" />,
     
    },
    {
      title: "Leisure & Hobby",
      icon:<MdOutlineSportsVolleyball className=" bg-[#dbcfe4] p-[1.8px]  rounded" size={35}  color="#391452" />,
      
    },
    {
      title: "Music,Movies & Books",
      icon:<TbMovie className=" bg-[#dbcfe4] p-[1.9px]  rounded" size={35}  color="#391452" />,
     
    },
    {
      title: "Admission Tickets & Passes",
      icon:<PiGraduationCapBold className=" bg-[#dbcfe4] p-[3.6px]  rounded" size={35}  color="#391452" />,
 
    },
    {
      title: "Services",
      icon:<GiLightningSpanner className=" bg-[#dbcfe4] p-1 rounded" size={35}  color="#391452" />,
  
    },
    {
      title: "Give Away & Swap",
      icon:<BsGift  className=" bg-[#dbcfe4] p-[5.2px]  rounded" size={35}  color="#391452"/>,
      
    },
    {
      title: "Lessons & Courses",
      icon:<MdOutlinePlayLesson className=" bg-[#dbcfe4] p-1 rounded" size={35}  color="#391452"/>,
    },
    {
      title: "Dried herbs & oils",
      icon:<GiHerbsBundle  className=" bg-[#dbcfe4] p-1 rounded" size={35}  color="#391452" />,
    
    },
    {
      title: "Neighborhood Help",
      icon:<LiaHandsHelpingSolid  className=" bg-[#dbcfe4] p-1 rounded" size={35}  color="#391452"/>
    },
  ];

  const handleCategoryDropDownMenuFired = useCallback(() => {
    setDropDownCat(!dropDownCat);
  }, [dropDownCat]);


   useEffect(()=>{

   fetch(
       "https://api.unsplash.com/search/photos?page=3&query=houses,kitchen&client_id=PG4lf1B0kp4ZKEVlfaLmOLzldpPEQK0yyMt5Ml_9Vyk",
      {
        method: "get",
      },
    )
      .then((r) => {
        return r.json();
      })
      .then((r) => {
        console.log(r);
       
         setData(r.results)
      })
      .catch(console.log);

   })

  return (
     <section className={`${itim.className} col-span-12 lg:col-span-9 bg-slate-50 min-h-screen p-4 overflow-x-hidden`}>
      
      {/* 1. COMPOSITE SEARCH BAR AREA */}
      <div className="bg-[#391452] rounded-[2rem] p-4 md:p-6 mb-6 shadow-xl">
        <div className="flex flex-col md:flex-row items-center gap-6">
          
          {/* Main Search Input Group */}
          <div className="flex-1 bg-white rounded-full h-12 flex items-center overflow-hidden shadow-inner w-full">
            <div className="flex-[2] flex items-center px-4 border-r border-slate-200 h-full hover:bg-slate-50 transition-colors">
              <IoMdSearch className="text-slate-400 shrink-0" size={18} />
              <input placeholder="Search products..." className="ml-2 w-full text-xs outline-none text-slate-700 bg-transparent" />
            </div>

            <div className="flex-1 hidden md:flex items-center px-4 border-r border-slate-200 h-full hover:bg-slate-50 cursor-pointer" onClick={handleCategoryDropDownMenuFired}>
              <p className="text-[10px] font-bold uppercase truncate">Categories</p>
              <FaAngleDown className="ml-auto text-slate-300" size={14} />
            </div>

            <div className="flex-1 hidden lg:flex items-center px-4 h-full">
              <p className="text-[10px] font-bold uppercase truncate">Deutschland</p>
            </div>

            <button className="bg-[#391452] text-white px-6 h-10 rounded-full text-[10px] font-black uppercase tracking-widest mr-1 ml-1 hover:bg-red-600 transition-all">
              Find
            </button>
          </div>

          {/* User Actions */}
          <div className="flex gap-8 px-2">
            <div className="flex flex-col items-center group cursor-pointer">
              <MdAddChart className="text-white group-hover:text-red-400 transition-colors" size={20} />
              <p className="text-[9px] text-white uppercase font-bold mt-1 tracking-tighter">Advertise</p>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <IoPerson className="text-white group-hover:text-red-400 transition-colors" size={20} />
              <p className="text-[9px] text-white uppercase font-bold mt-1 tracking-tighter">Mine</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. DROP DOWN MENU (Conditional) */}
      {dropDownCat && <div className="absolute z-[60] mt-[-20px] ml-10 shadow-2xl rounded-2xl overflow-hidden animate-in fade-in slide-in-from-top-4">
        <DropDownMenuForCategory />
      </div>}

      {/* 3. HORIZONTAL CATEGORY SELECTOR */}
      <div className="bg-white rounded-2xl p-4 mb-6 shadow-sm border border-slate-200 overflow-x-auto scrollbar-hide">
        <div className="flex gap-10 min-w-max px-4">
          {category.map((item, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              <div className="w-10 h-10 flex items-center justify-center text-[#391452] group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <p className="text-[9px] font-bold uppercase text-slate-400 group-hover:text-[#391452] transition-colors mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. HORIZONTAL GALLERY */}
      <div className="bg-white rounded-3xl p-6 mb-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-[#391452]">Trending Gallery</h2>
          <div className="h-0.5 w-12 bg-red-500 rounded-full" />
        </div>
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x">
          {data.map((item, index) => (
            <div key={index} onClick={() => onItemSelected(index)} className="snap-start min-w-[160px] md:min-w-[200px] bg-slate-50 rounded-2xl p-3 border border-slate-100 hover:shadow-xl transition-all cursor-pointer group">
              <div className="relative aspect-square mb-4 rounded-xl overflow-hidden">
                <Image fill alt="img" src={(item as { urls?: { regular?: string } })?.urls?.regular || "/"} className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-slate-800 truncate">Solfar Premium Chair</p>
                <p className="text-[10px] text-slate-400">Construction Grade</p>
                <p className="text-sm font-black text-red-600">$926.00</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. PRODUCT GRID - High Visibility */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mb-20">
        {data.map((item, index) => (
          <div key={index} onClick={() => onItemSelected(index)} className="bg-white rounded-2xl p-4 border border-slate-100 relative group cursor-pointer hover:shadow-2xl transition-all">
            <button className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur rounded-full text-slate-400 hover:text-red-500 transition-colors">
              <FaRegHeart size={14} />
            </button>
            <div className="relative aspect-square mb-4 rounded-xl overflow-hidden shadow-inner">
              <Image fill alt="grid_img" src={(item as { urls?: { regular?: string } })?.urls?.regular || "/"} className="object-cover transition-transform group-hover:scale-105 duration-700" />
            </div>
            <div className="space-y-1 px-1">
              <h4 className="text-[11px] font-bold text-slate-800 line-clamp-1">Solfar Construction Chair</h4>
              <div className="flex justify-between items-center pt-2">
                <p className="text-sm font-black text-[#391452]">$926</p>
                <button className="bg-[#800020] text-white text-[9px] font-bold px-3 py-1.5 rounded-lg hover:brightness-110">
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ForMobile = ({
  onItemSelected,
}: {
  onItemSelected: (index: number) => void;
}) => {
  const [dropDownCat, /*setDropDownCat*/] = useState(false);
  const [data,setData] = useState([])

  const category = [
    {
      title: "Real Estate",
    },
    {
      title: "Fashion & Beauty",
      icon: "/category_icons/beauty_fashion_cat.svg",
    },
    {
      title: "Cars,Bikes & Boats",
      icon: "/category_icons/cars_cat_icon.svg",
    },
    {
      title: "Home & Garden",
      icon: "/category_icons/home_garden_icon.svg",
    },
    {
      title: "Jobs",
      icon: "/category_icons/jobs_icon.svg",
    },
    {
      title: "Electronics",
      icon: "/category_icons/electronics_cat_icon.svg",
    },
    {
      title: "Family,Child & Baby",
      icon: "/category_icons/family_child_cat_icon.svg",
    },
    {
      title: "Pets",
      icon: "/category_icons/pet_cat_icon.svg",
    },
    {
      title: "Leisure & Hobby",
      icon: "/category_icons/leisure_cat_icon.svg",
    },
    {
      title: "Music,Movies & Books",
      icon: "/category_icons/film_cat_icon.svg",
    },
    {
      title: "Admission Tickets & Passes",
      icon: "/category_icons/addmission_cat_icon.svg",
    },
    {
      title: "Services",
      icon: "/category_icons/seervice_cat_icon.svg",
    },
    {
      title: "Give Away & Swap",
      icon: "/category_icons/gift_cat_icon.svg",
    },
    {
      title: "Lessons & Courses",
      icon: "/category_icons/lesson_cat_icon.svg",
    },
    {
      title: "Dried herbs & oils",
      icon: "/category_icons/herbs_cat_icon.svg",
    },
    {
      title: "Neighborhood Help",
    },
  ];

   useEffect(()=>{

   fetch(
       "https://api.unsplash.com/search/photos?page=3&query=houses,kitchen&client_id=PG4lf1B0kp4ZKEVlfaLmOLzldpPEQK0yyMt5Ml_9Vyk",
      {
        method: "get",
      },
    )
      .then((r) => {
        return r.json();
      })
      .then((r) => {
        console.log(r);
       
         setData(r.results)
      })
      .catch(console.log);

   })
  /*
  const handleCategoryDropDownMenuFired = useCallback(() => {
    setDropDownCat(!dropDownCat);
  }, [dropDownCat]);*/

  return (
    <section className={`${itim.className} md:col-span-9  pt-1 `}>
      <div className="w-full h-[calc(100dvh-5rem)]  ">
        <div className="bg-web-navbar fh-100 w-full flex gap-2  place-items-center text-white flex-cols relative ">
          <div className=" bg-white w-[60%] mt-2 h-[50%] rounded-2xl flex place-item-center">
            <div className="text-black place-self-center ms-5 flex ">
              <div className="fh-25 fw-20 relative mt-1">
                <Image
                  alt="Real estate"
                  src={"/category_icons/search_icon.svg"}
                  fill
                  className=" p-1 rounded object-cover"
                />
              </div>

              <input
                type="text"
                placeholder="what are you looking for?"
                className="outline-none text-fw-18 mt-1"
              />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="justify-center place-items-center flex flex-col">
              <div className="fh-40 fw-40 relative pt-7 ">
                <Image
                  alt="Real estate"
                  src={"/category_icons/advert_cat_icon.svg"}
                  fill
                  className=" p-1 rounded object-cover"
                />
              </div>

              <p>advertise</p>
            </div>

            <div
              className="justify-center place-items-center flex flex-col
                   "
            >
              <div className="fh-40 fw-40 relative pt-7 ">
                <Image
                  alt="Real estate"
                  src={"/category_icons/person_cat_icon.svg"}
                  fill
                  className=" p-1 rounded object-cover"
                />
              </div>
              <p>mine</p>
            </div>
          </div>
        </div>

        {/** Custom Div for drop down */}

        {dropDownCat ? <DropDownMenuForCategory /> : null}

        {/**Category selection */}
        <div
          className="bg-white h-fit w-full justify-center  flex  p-1 mt-3 rounded-2xl overflow-y-hidden  overflow-x-scroll relative"
          style={{ scrollbarWidth: "none" }}
        >
          {/**Search Icon details now */}
          <div className="flex gap-4 fw-440">
            {category.map((item, index) => (
              <div key={index} className="min-w-30 mt-3  ">
                <div className="justify-center place-items-center w-[90%]">
                  <div className="relative fh-45 fw-45">
                    <Image
                      alt="Real estate"
                      src={
                        item.icon
                          ? item.icon
                          : "/category_icons/home_cat_icon.svg"
                      }
                      fill
                      className="bg-[#dbcfe4] p-1 rounded"
                    />
                  </div>

                  <p className="text-[12px] ">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/**Gallery */}

        <div className="h-75 bg-white p-3 m-3">
          <p>Gallery</p>

          <div
            className=" grid grid-cols-12 h-65 overflow-y-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {data && data.map((item: { urls: { regular: string } }, index) => (
              <div
                key={index}
                className=" col-span-6  m-3 shadow-f-cardM bg-white rounded-lg p-5 "
                onClick={() => {
                  onItemSelected(index);
                }}
              >
                <div className="fw-60 [@media(550px<=width<=1000px)]:fw-60 [@media(550px<=width<=1000px)]:fh-100 fh-60 relative mb-3">
                  <Image
                    alt="shop_img"
                    fill
                    className="object-cover rounded-lg"
                    src={ item.urls.regular }
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-sm">Solfar Chair</p>
                  <p className="text-sm">Solfar Chair</p>
                  <p className="text-sm">Solfar Chair</p>
                </div>

                <div className="flex gap-4 place-items-center">
                  {/*

                                      <div className="flex  place-items-center ">
                               <div className="flex gap-2">
                                                        {Array(5)
                                                          .fill(0)
                                                          .map((_, index) => (
                                                            <div key={index} className="flex gap-2  h-[calc(6*var(--spacing-fw))] w-[calc(6*var(--spacing-fw))] relative">
                                                              <Image
                                                                src="/star_icon.png"
                                                                alt={`App ${index + 1}`}
                                                                 fill
                                                                 sizes="auto"
                                                                className="object-contain "
                                                              />
                                                            </div>
                                                          ))}
                                                      </div>
                              
                                                 
                               </div>
                              <p className="text-fh-6 ">Loren sjjsjsjsjj</p>
                       
                            </div>
                         

                         <div className="mt-3 flex justify-between place-items-center">

                          <p>926</p>
                          
                          <button className="text-white bg-[#800020] w-30 rounded p-1 mx-[50%]">Purchase </button>
       */}
                </div>
              </div>
            ))}
          </div>
        </div>




        <div
          className="grid grid-cols-12 [@media(550px<=width<=1000px)]:mt-10 bg-white p-3 m-3  [@media(550px<=width<=1000px)]:grid-cols-4  overflow-y-scroll  fh-450 mb-150  relative"
          style={{ scrollbarWidth: "none" }}
        >
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className=" col-span-6 m-1  rounded-lg p-5 h-fit relative"
              onClick={() => {
                onItemSelected(index);
              }}
            >
              <div className="absolute right-7 z-50 ">
                <FaRegHeart size={15} />
              </div>

              <div className="fw-50 fh-70 relative mb-3">
                <Image
                  alt="shop_img"
                  fill
                  className="object-cover rounded-lg"
                  src={`/shop_img_card_${Math.floor(index / 3) + 1}.png`}
                />
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-sm">Solfar Chair</p>
                <p className="text-sm">Solfar Chair</p>
                <p className="text-sm">Solfar Chair</p>
              </div>

              <div className="flex gap-4 place-items-center">
                {/*

                                      <div className="flex  place-items-center ">
                               <div className="flex gap-2">
                                                        {Array(5)
                                                          .fill(0)
                                                          .map((_, index) => (
                                                            <div key={index} className="flex gap-2  h-[calc(6*var(--spacing-fw))] w-[calc(6*var(--spacing-fw))] relative">
                                                              <Image
                                                                src="/star_icon.png"
                                                                alt={`App ${index + 1}`}
                                                                 fill
                                                                 sizes="auto"
                                                                className="object-contain "
                                                              />
                                                            </div>
                                                          ))}
                                                      </div>
                              
                                                 
                               </div>
                              <p className="text-fh-6 ">Loren sjjsjsjsjj</p>
                       
                            </div>
                         

                         <div className="mt-3 flex justify-between place-items-center">

                          <p>926</p>
                          
                          <button className="text-white bg-[#800020] w-30 rounded p-1 mx-[50%]">Purchase </button>
       */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainShopContainer;
