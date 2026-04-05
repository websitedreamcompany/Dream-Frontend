



"use client";
import { Itim, Inter } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../../../landingPage/component/Footer";
import MainShopContainer from "../../component/MainShopContainer";
import ProductDetailsContainer from "../../component/ProductDetailsContainer";
import { useCallback, useEffect, useState } from "react";
import useDreamTradingStore from "@/store/store";
import { useSearchParams } from "next/navigation";
import HouseCatSectionBar from "../component/HouseCatSectionBar";
import CarsCatSectionBar from "../component/CarsCatSectionBar";

const itim = Itim({ subsets: ["latin"], weight: "400" });

const inter = Inter({ subsets: ["latin"], weight: "400" });

const ShopProductDisplayMobile = () => {
  //const {moreData} = useDreamTradingStore((state)=>state)
  const [moreData, setMoreData] = useState([]);

  const param = useSearchParams();

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

  



  const [toggleNavBar, setToggleNavBar] = useState(false);

  const handleNaVButtonClicked = useCallback(() => {
    setToggleNavBar(!toggleNavBar);
  }, [toggleNavBar]);

  const handleCloseNavBar = useCallback(() => {
    setToggleNavBar(false);
  }, []);


  return (
    <div className={`${itim.className}  h-dvh overflow-hidden`}>
      {/**Top nav bar */}


 <nav
        className="w-screen fh-60  shadow-f-bottom flex flex-row place-items-center 
               
              "
      >
        <div className="relative w-[calc(30*var(--spacing-fw))] h-[calc(30*var(--spacing-fw))] ms-fw-16 ">
          <Image
            src="/logo.svg"
            alt="Dream Eco Logo"
            fill
            className="object-contain"
          />
        </div>

        <div
          className="w-screen place-items-end pe-fw-35  space-fy-8"
          onClick={handleNaVButtonClicked}
        >
          <motion.p
            initial={{
              transform: "translateX(60px)",
            }}
            animate={{
              transform: "translateX(0px)",
            }}
            className="fh-2 fw-15 bg-white me-fw-10 rounded-2xl"
          ></motion.p>

          <motion.p className="fh-2 fw-25 bg-white rounded-2xl"></motion.p>

          <motion.p
            initial={{
              transform: "translateX(-60px)",
              opacity: 0,
            }}
            animate={{
              transform: "translateX(0px)",
              opacity: 1,
            }}
            className="fh-2 fw-15 bg-white ms-fw-10 rounded-2xl"
          ></motion.p>
        </div>

        <motion.div
          className={` ${!toggleNavBar && "hidden"} bg-[rgba(44,33,33,0.95)] absolute text-white  right-0 top-0 bottom-[0%] z-100 fw-300 p-4`}
        >
          <button title="" onClick={handleCloseNavBar}>
            x
          </button>

          <p className="mt-3 font-bold">Category </p>

          <div
            className={`${itim.className} overflow-y-scroll h-[94%]`}
            style={{ scrollbarWidth: "none" }}
          >

            <section className="bg-transparent  text-black   overflow-y-auto    col-span-3 ">
            <CarsCatSectionBar />
          </section>
          </div>
        </motion.div>
      </nav>


      <main className="h-full  overflow-y-scroll relative pb-19">
    
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
    

        <div className="p-6 w-full bg-white ">
          <div className="col-span-12 flex gap-2">
            <p>Rental apartments {">"}</p>
            <p className="font-bold text-sm">
              1-25 of 103,00 rental apartments in Germany
            </p>
          </div>

          <div className="mt-3">
            <div className="flex">
              <p>Sort by:</p>
              <p className="text-green-600">Recommended {">"}</p>
            </div>
          </div>
        </div>

        {/**Side bar */}

        <div className="grid grid-cols-12 h-full mb-10">
        

          <section className="bg-transparent   p-3   overflow-y-auto  col-span-12 ">
            {moreData.length > 0 &&
              moreData.map((data:{ urls: { regular: string } }, index) => (
                <div
                  key={index}
                  className="shadow-f-cardM bg-white fh-450 w-full rounded mb-5 p-6 flex"
                >
                  <div className="relative fh-300 w-400 mt-4">
                    <Image alt="vibe" fill src={`${data.urls.regular}`} />
                  </div>

                  <div className="ms-5">
                    {/** Location */}
                    <p className="text-sm">sdjdjj</p>

                    <div>
                      <p className="font-bold  text-ellipsis text-wrap overflow-hidden fw-150">
                        Modern 3-room apartment with large balcony in Malchin
                        hddhdhh dkdk
                      </p>

                      <p className="text-sm font-extralight">
                        {`The renovation work on the "Weitblick" project is
                        currently in full swing. Since October 1st, 2025`}
                      </p>

                      <p className="mt-5">64 m² · 3 Zi.</p>
                      <p className="text-green-800 font-bold text-2xl mt-3">
                        €495
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </section>
        </div>

        <Footer mode="desktop" />
      </main>
    </div>
  );
};





export default ShopProductDisplayMobile;