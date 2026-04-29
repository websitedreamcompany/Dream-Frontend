"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "../../landingPage/component/Footer";
import { Inter, Itim } from "next/font/google";
import { useState, useCallback } from "react";
import MainShopContainer from "../component/MainShopContainer";
import Link from "next/link";
import ProductDetailsContainer from "../component/ProductDetailsContainer";

const inter = Inter({
  display: "swap",
  weight: "600",
});

const itim = Itim({
  display: "swap",
  weight: "400",
});

const ShopMobile = () => {

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

  const [toggleCategory, setToggleCategory] = useState(false);
  const [toggleNavBar, setToggleNavBar] = useState(false);

  const handleNaVButtonClicked = useCallback(() => {
    setToggleNavBar(!toggleNavBar);
  }, [toggleNavBar]);

  const handleCloseNavBar = useCallback(() => {
    setToggleNavBar(false);
  }, []);

  const hangleToggleCategory = useCallback(() => {
    setToggleCategory(!toggleCategory);
  }, [toggleCategory]);

  return (
    <div className="h-dvh overflow-hidden">
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
          <button className="text-2xl font-bold" onClick={handleCloseNavBar}>
            x
          </button> 
          <p className="mt-3 font-bold" onClick={hangleToggleCategory}>Category </p>
          
          {
            toggleCategory ?  <div
            className={`${itim.className} overflow-y-scroll h-[94%]`}
            style={{ scrollbarWidth: "none" }}
          >
            {sectionDewtails.map((data, index) => (
              <div key={index} className="p-3 ">
                {index > 0 && (
                  <div className=" fh-1 w-full bg-[#B2AEAE] mb-1" />
                )}
                <p className="mt-2 font-bold mb-2">{data.title}</p>

                <div className="flex flex-col  h-fit ">
                  {showMoreindex !== index
                    ? data.items.slice(0, 2).map((item, index) => (
                        <Link
                          href={`/pages/shop/productDisplay?title=${data.title}&cat=${item}`}
                          key={index}
                          className="text-white text-sm mt-1 hover:underline cursor-pointer"
                        >
                          {item}
                        </Link>
                      ))
                    : data.items.map((item, index) => (
                        <Link
                          href={`/pages/shop/productDisplay?title=${data.title}&cat=${item}`}
                          key={index}
                          className="text-white text-sm mt-1 hover:underline cursor-pointer "
                        >
                          {item}
                        </Link>
                      ))}
                </div>
                {data.items.length > 2 ? (
                  <button
                    onClick={() => handleShowMore(index)}
                    className="text-sm mt-1"
                  >
                    More.....
                  </button>
                ) : null}
              </div>
            ))}
          </div> : null
          }
    

      <div className="flex flex-col gap-3 mt-2">
            <Link href={"/"} className="hover:underline font-bold">Home</Link>


          <Link href={"/pages/applications"} className="hover:underline font-bold">Applications</Link>

               <Link href={"/pages/projects"} className="hover:underline font-bold">Projects</Link>


          <Link href={"/pages/shops"} className="hover:underline font-bold">Shops</Link>
      </div>
        
        </motion.div>
      </nav>

      <main className="h-full overflow-x-hidden overflow-y-scroll relative pb-2">
        <div className="h-220 ">
          <section className="col-span-12 ">
            {productItemClicked ? (
              <ProductDetailsContainer />
            ) : (
              <MainShopContainer
                type="mobile"
                onItemSelected={() => {
                  setProductItemClicked(true);
                }}
              />
            )}
          </section>
        </div>

        <Footer mode="mobile" />
      </main>
    </div>
  );
};

export default ShopMobile;
