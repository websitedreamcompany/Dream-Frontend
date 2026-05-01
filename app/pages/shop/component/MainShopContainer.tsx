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
    <section className={`${itim.className} md:col-span-9   p-3 overflow-hidden relative `}>
      
      <div className="w-full h-[calc(100dvh-5rem)]  ">

        <div className="bg-web-navbar fh-100 w-full flex gap-8  place-items-center text-white flex-cols relative justify-center ">
         
          <div className="ms-10 bg-white w-[63%] h-[50%] rounded-4xl flex place-item-center">

      
            <div className="text-black place-self-center ps-5 flex justify-center place-items-center gap-3 hover:border-1 hover:border-[#391452] hover:rounded-l-2xl h-full border-r-1  border-r-[#B2AEAE] border-r-2 pe-3 cursor-pointer">
               <IoMdSearch className="mt-1 " color="black" size={14} />
              <input  placeholder="what are you looking....." className="text-[12px] mt-1 outline-none " />
            </div>



            <div className="text-black place-self-center place-item-center justify-center  flex gap-5 ps-5 place-items-center gap-3 hover:border-1 hover:border-[#391452]  h-full border-r-0  border-r-[#B2AEAE] border-r-2 pe-5 h-full ">
              <p className="text-[12px] ">All categories</p>
               <FaAngleDown className="mt-0.5" size={15} color="#B2AEAE " onClick={handleCategoryDropDownMenuFired} />
              
            </div>

           

            <div className="text-black place-self-center flex ps-10 place-items-center gap-3 hover:border-1 hover:border-[#391452]  h-full border-r-1  border-r-[#B2AEAE] border-r-2 pe-8  ">
              <p className="text-[12px]">Deutshland</p>
            </div>

          

            <div className="text-black place-self-center ps-5 flex gap-5 place-items-center gap-3 hover:border-1 hover:border-[#391452] hover:border-r-0 h-full    ">
              <p className="text-[12px] mt-1">Entire town </p>

                <FaAngleDown className="mt-1.5" size={15} color="#B2AEAE " /> 

              <p className="text-[12px] ps-5 pe-5 bg-web-navbar p-[3.8px] rounded-2xl text-white text-center ">
                Find
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="justify-center place-items-center flex flex-col">
           <MdAddChart color="black" />


              <p className="text-[12px]">advertise</p>
            </div>

            <div
              className="justify-center place-items-center flex flex-col
                   "
            >
             <IoPerson  color="black" />
              <p className="text-[12px]">mine</p>
            </div>
          </div>
        </div>

        {/** Custom Div for drop down */}

        {dropDownCat ? <DropDownMenuForCategory /> : null}

        {/**Category selection */}
        <div
          className="bg-white h-fit fw-295 justify-center  flex  p-1 mt-5 rounded-2xl overflow-y-hidden  overflow-x-scroll relative"
          style={{ scrollbarWidth: "none" }}
        >
          {/**Search Icon details now */}
          <div className="flex gap-4 fw-290">
            {category.map((item, index) => (
              <div
                key={index}
                className="min-w-30 mt-3 justify-center place-items-center "
              >
               

                <div className="justify-center place-items-center w-[90%]">
                  

                  {item.icon}

                  <p className="text-[10px] ">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

  <div className=" h-full relative mt-2 overflow-y-scroll">


        {/**Gallery */}

        <div className="h-fit bg-white p-3 mt-2 rounded">
          <p>Gallery</p>

          <div
            className="flex overflow-x-scroll"
            style={{ scrollbarWidth: "none" }}
          >
            {data.map((item: { urls: { regular: string } }, index: number) => (
              <div
                key={index}
                className="fw-80 m-3 shadow-f-cardM bg-white rounded-lg p-5 h-fit relative"
                onClick={() => {
                  onItemSelected(index);
                }}
              >
                <div className="fw-30 [@media(550px<=width<=1000px)]:fw-60 [@media(550px<=width<=1000px)]:fh-100 fh-80 relative mb-3">
                  <Image
                    alt="shop_img"
                    fill
                    className="object-cover rounded-lg"
                    src={ item.urls.regular }
                  />
                </div>

                <div className="flex flex-col gap-[0.4px]">
                  <p className="text-[12px]">Solfar Chair ffg gghh </p>
                  <p className="text-[12px]">Solfar Chair</p>
                  <p className="text-[12px]">Solfar Chair</p>
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

      <div className="[@media(550px<=width<=1000px)]:mt-10  bg-white p-3 mt-6 rounded ">
          
       <div
          className="grid  bg-white  [@media(550px<=width<=1000px)]:grid-cols-4 grid-cols-4  overflow-hidden  min:h-300 mb-150  relative"
          style={{ scrollbarWidth: "none" }}
        >
          {data.map((item: { urls: { regular: string } }, index: number) => (
            <div
              key={index}
              className="fw-65 m-1  rounded-lg p-5 h-fit relative"
              onClick={() => {
                onItemSelected(index);
              }}
            >
              <div className="absolute right-10 top-6 z-50 ">
                <FaRegHeart size={15} />
              </div>

              <div className="fw-50 fh-130 relative mb-3">
                <Image
                  alt="shop_img"
                  fill
                  className="object-cover rounded-lg"
                  src={ item.urls.regular }
                />
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-[12px]">Solfar Chair</p>
                <p className="text-[12px]">Solfar Chair</p>
                <p className="text-[12px]">Solfar Chair</p>
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
    
  </div>
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
