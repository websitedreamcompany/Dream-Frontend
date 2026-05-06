import { useCallback, useState } from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const DropDownMenuForCategory = () => {
  const [hoverIndex, setHoverIndex] = useState(-1);

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

  const handleOverIndex = useCallback((index: number) => {
    console.log(index);
    setHoverIndex(index);
  }, []);

  return (
        <div className="relative top-12 left-0 z-[100] w-full flex items-start pt-2 pointer-events-none">
      <div className="max-w-7xl mx-auto w-full flex px-6 pointer-events-auto">
        
        {/* 1. PRIMARY LEVEL: Category Titles */}
        <div className="bg-white w-72 h-[450px] rounded-2xl shadow-2xl border border-slate-100 overflow-y-auto scrollbar-hide py-4 relative">
          {sectionDewtails.map((data, index) => (
            <div
              key={index}
              className={`group flex items-center justify-between px-6 py-3 cursor-pointer transition-all ${
                hoverIndex === index ? 'bg-[#391452] text-white' : 'text-slate-600 hover:bg-slate-50'
              }`}
              onMouseEnter={() => handleOverIndex(index)}
            >
              <div className="flex items-center gap-3">
                {/* Optional: item.icon placeholder */}
                <span className="text-sm font-bold tracking-tight">{data.title}</span>
              </div>

              <div className="relative w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity">
                <Image
                  alt="right"
                  fill
                  src="/category_icons/right_icon.svg"
                  className={hoverIndex === index ? "invert" : ""}
                />
              </div>
            </div>
          ))}
        </div>

        {/* 2. SECONDARY LEVEL: Sub-Items */}
        {hoverIndex !== null && sectionDewtails[hoverIndex] && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            key={hoverIndex} // Triggers animation on index change
            className="bg-white w-64 min-h-[200px] max-h-[450px] ml-2 rounded-2xl shadow-2xl border border-slate-100 overflow-y-auto p-6"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
              Explore {sectionDewtails[hoverIndex].title}
            </p>
            <div className="grid grid-cols-1 gap-3">
              {sectionDewtails[hoverIndex].items.map((item, index) => (
                <Link
                  href={`/pages/shop/productDisplay?title=${sectionDewtails[hoverIndex].title}&cat=${item}`}
                  key={index}
                  className="text-sm font-medium text-slate-600 hover:text-[#ff0000] hover:translate-x-1 transition-all flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-200" />
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>

  );
};

export default DropDownMenuForCategory;
