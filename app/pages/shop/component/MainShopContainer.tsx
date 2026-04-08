import { Itim } from "next/font/google";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import DropDownMenuForCategory from "./Category/DropDownMenuForCategory";

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

  const handleCategoryDropDownMenuFired = useCallback(() => {
    setDropDownCat(!dropDownCat);
  }, [dropDownCat]);

  return (
    <section className={`${itim.className} md:col-span-9   p-3 overflow-hidden relative `}>
      <div className="w-full h-[calc(100dvh-5rem)]  ">
        <div className="bg-web-navbar fh-100 w-full flex gap-2  place-items-center text-white flex-cols relative ">
          <div className="ms-20 bg-white w-[70%] h-[50%] rounded-2xl flex place-item-center">
            <div className="text-black place-self-center ms-5 flex ">
              <div className="fh-29 fw-10 relative pt-4">
                <Image
                  alt="Real estate"
                  src={"/category_icons/search_icon.svg"}
                  fill
                  className=" p-1 rounded object-cover"
                />
              </div>

              <p className="text-fw-4 mt-1">what are you looking for? </p>
            </div>

            <div className="h-[80%] bg-[#B2AEAE] w-[0.3%] ms-8 mt-1"></div>

            <div className="text-black place-self-center place-item-center justify-center ms-5 flex ">
              <p className="text-fw-4 ">All categories</p>

              <div
                className="fh-20 fw-10 relative pt-4"
                onClick={handleCategoryDropDownMenuFired}
              >
                <Image
                  alt="Real estate"
                  src={"/category_icons/arrow_down_cat_icon.svg"}
                  fill
                  className=" p-1 rounded object-cover"
                />
              </div>
            </div>

            <div className="h-[80%] bg-[#B2AEAE] w-[0.3%] ms-8 mt-1"></div>

            <div className="text-black place-self-center ms-5 ">
              <p className="text-fw-4">Deutshland</p>
            </div>

            <div className="h-[80%] bg-[#B2AEAE] w-[0.3%] ms-8 mt-1"></div>

            <div className="text-black place-self-center ms-5 flex ">
              <p className="text-fw-4 mt-1">Entire town </p>

              <div className="fh-20 fw-10 relative pt-7">
                <Image
                  alt="Real estate"
                  src={"/category_icons/arrow_down_cat_icon.svg"}
                  fill
                  className=" p-1 rounded object-cover"
                />
              </div>

              <p className="text-fw-4 bg-web-navbar p-1 rounded text-white  ">
                Find
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="justify-center place-items-center flex flex-col">
              <div className="fh-20 fw-10 relative pt-7 ">
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
              <div className="fh-20 fw-10 relative pt-7 ">
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
          className="bg-white h-fit fw-290 justify-center  flex  p-1 mt-5 rounded-2xl overflow-y-hidden  overflow-x-scroll relative"
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
                  <div className="relative fh-30 fw-10">
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

                  <p className="text-[10px] ">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

  <div className=" h-full relative mt-2 overflow-y-scroll">


        {/**Gallery */}

        <div className="h-fit bg-white p-3 m-3">
          <p>Gallery</p>

          <div
            className="flex overflow-x-scroll"
            style={{ scrollbarWidth: "none" }}
          >
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="fw-80 m-3 shadow-f-cardM bg-white rounded-lg p-5 h-fit relative"
                onClick={() => {
                  onItemSelected(index);
                }}
              >
                <div className="fw-30 [@media(550px<=width<=1000px)]:fw-60 [@media(550px<=width<=1000px)]:fh-100 fh-60 relative mb-3">
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

        <div
          className="grid [@media(550px<=width<=1000px)]:mt-10 mt-10 bg-white p-3 m-3  [@media(550px<=width<=1000px)]:grid-cols-4 grid-cols-4  overflow-hidden  h-full mb-150  relative"
          style={{ scrollbarWidth: "none" }}
        >
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="fw-65 m-1  rounded-lg p-5 h-fit relative"
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
