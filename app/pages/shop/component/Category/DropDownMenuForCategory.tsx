import { useCallback, useState } from "react";

import { motion } from "framer-motion";
import Image from "next/image";
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
    <div className="absolute z-100 min-fh-400 bg-transparent w-full flex ">
      <div className="bg-white w-[18%] ms-[20%] h-full rounded shadow-f-cardM ">
        {sectionDewtails.map((data, index) => (
          <div
            key={index}
            className="m-2 cursor-pointer hover:bg-[rgba(0,0,0,0.6)] flex  gap-[40%]"
            onMouseOver={() => {
              handleOverIndex(index);
            }}
          >
            <p>{data.title}</p>

            <div className="relative fh-15 fw-5 place-self-center  ">
              <Image
                alt="right-icon"
                fill
                src={"/category_icons/right_icon.svg"}
                className="absolute "
              />
            </div>
          </div>
        ))}
      </div>

      {hoverIndex && hoverIndex >= 0 ? (
        <motion.div
          initial={{
            translateY: "0%",
          }}
          animate={{
            translateY:
              hoverIndex === 0
                ? `${(9 * 9000) / 100}%`
                : `${(hoverIndex * 900) / 100}%`,
          }}
          className={`bg-white w-[18%]  h-full rounded shadow-f-cardM relative`}
        >
          {sectionDewtails[hoverIndex].items.map((item, index) => (
            <p className="hover:underline cursor-pointer m-2" key={index}>
              {item}
            </p>
          ))}
        </motion.div>
      ) : null}
    </div>
  );
};

export default DropDownMenuForCategory;
