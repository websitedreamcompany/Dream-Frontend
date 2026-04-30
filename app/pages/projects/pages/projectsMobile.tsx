"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import { Inter, Itim, Aclonica } from "next/font/google";
import { motion } from "framer-motion";
import Footer from "../../landingPage/component/Footer";
import useDreamTradingStore from "@/store/store";
import ImageSlider from "../component/ImageSlider";

const inter = Inter({ subsets: ["latin"], weight: "400" });
const itim = Itim({ subsets: ["latin"], weight: "400" });

const aclonica = Aclonica({ subsets: ["latin"], weight: "400" });

const ProjectsMobile = () => {
  const { projectData, moreData } = useDreamTradingStore();

  const childRef = useRef<HTMLElement>(null);

  const [selectedItemDetails, setSelectedDetails] = useState<{
    img: string;
    desc: string;
  }>();

  const handleScroll = () => {
    childRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start", // Aligns the top of the child to the top of the container
    });
  };

  return (
    <div className="h-dvh w-screen bg-white">
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

        <div className="w-screen place-items-end pe-fw-35  space-fy-8">
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
      </nav>

      {/**
       * Main containerr
       */}
      <main className="application h-dvh w-full overflow-y-scroll bg-[#D9D9D9]   ">
        <section
          className={`${itim.className} bg-tansparent    p-5   overflow-y-auto   `}
        >
          <div
            style={{ scrollbarWidth: "none" }}
            className="  sticky top-0 z-50   fh-50 bg-[#C5C4C4] border-[0.2px] border-[rgba(0,0,0,0.2)] shadow-f-cardM flex place-items-center gap-5 overflow-x-scroll "
          >
            <div className=" fh-50 p-3 justify-center ">
              <div className="relative w-5 h-[calc(20*var(--spacing-fw))]  ">
                <Image
                  src="/slanted_rect_for_menu.png"
                  alt="project_menu"
                  fill
                  sizes="100%"
                  className="object-contain"
                />
              </div>

              <div className="fw-8 bg-[#4A4A4A] fh-3 absolute left-2 bottom-[0.2px]" />
            </div>

            <div className="w-[30%] flex justify-center ">
              <p>Residential</p>

              <div className="fw-20 bg-[#4A4A4A] fh-3 absolute left-[18%] bottom-[0.2px]" />
            </div>

            <div className="w-[30%] flex justify-center ">
              <p>Commercial</p>

              <div className="fw-23 bg-[#4A4A4A] fh-3 absolute right-[33%] bottom-[0.2px]" />
            </div>

            <div className="w-[30%] flex justify-center place-items-center gap-5 ">
              <p>Filter</p>
              <div className="relative w-5 h-[calc(8*var(--spacing-fw))]  ">
                <Image
                  src="/drop_down_black_icon.png"
                  alt="project_menu"
                  fill
                  sizes="100%"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="">
            <div className="relative w-full h-[calc(250*var(--spacing-fw))] embla__viewport mt-4 mb-4 ">
              <Image
                src={
                  projectData?.data && projectData.data.length > 0
                    ? (projectData.data[6] as { urls: { regular: string } }).urls.regular
                    : "/project_landscape_image.png"
                }
                alt="project_menu"
                fill
                sizes="100%"
                className="object-contain"
              />
            </div>

            {projectData?.data && projectData.data.length > 0 && (
              <ImageSlider
                data={projectData.data as [{ id: string; alt_description: string; urls: { regular: string; }; }]}
                onItemSelected={(item) => {
                  setSelectedDetails({
                    img: (item as { img: string }).img,
                    desc: "",
                  });
                  handleScroll();
                }}
              />
            )}

            <div className=" grid grid-cols-2 fh-200 gap-3  mt-3">
              {moreData &&
                moreData.length > 0 &&
                moreData.map((item, index) => (
                  <div
                    key={index}
                    className="relative rounded-2xl h-[calc(130*var(--spacing-fh))]  col-span-1 "
                  >
                    <Image
                      src={(item as { urls: { regular: string } }).urls.regular}
                      alt="project_menu"
                      fill
                      sizes="100%"
                      className="object-cover   rounded-2xl "
                    />
                  </div>
                ))}

              <div className="relative rounded-2xl h-[calc(130*var(--spacing-fh))] col-span-1 ">
                <Image
                  src="/demo_projects_image_1.png"
                  alt="project_menu"
                  fill
                  sizes="100%"
                  className="object-cover rounded-2xl "
                />
              </div>
            </div>
          </div>
        </section>

        <motion.section
          ref={childRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className={`${itim.className} p-5   overflow-hidden  h-170  `}
        >
          <div className="bg-white w-[95%] h-dvh p-5">
            <div className="relative w-full h-[calc(220*var(--spacing-fw))]  ">
              <Image
                src={selectedItemDetails?.img || "/project_landscape_image.png"}
                alt="project_menu"
                fill
                sizes="100%"
                className="object-contain"
              />
            </div>

            <div className="mt-5">
              <p>Skyline Tower</p>
              <p>Dubai, 2024</p>
              <div>
                <p>Lorem ipsum dolor setum. Duli fort </p>
                <p>Lorem ipsum dolor setum. Duli fort </p>
                <p>Lorem ipsum dolor setum. Duli fort </p>
              </div>
            </div>

            <div className="relative ">
              <div className=" fh-40  absolute -left-5  -right-5 mt-2 gap-1 flex">
                <button className="bg-[#C5C4C4] fh-40 w-[20%]   "></button>

                <button className="bg-[#C5C4C4] fh-40 w-[60%] justify-center flex place-items-center gap-2 ">
                  <Image
                    src="/email_icon.png"
                    alt={`App `}
                    width={20}
                    height={10}
                    className="object-contain "
                  />
                </button>

                <button className="bg-[#C5C4C4] fh-40  w-[20%] justify-center flex  ">
                  <Image
                    src="/slanted_rect_for_menu.png"
                    alt={`App `}
                    width={35}
                    height={20}
                    className="object-contain "
                  />
                </button>
              </div>
            </div>

            <div className="mt-15 flex justify-center flex-col gap-3 place-items-center">
              <button className="bg-[#800020] fh-50 w-[90%] rounded text-white">
                Book project
              </button>

              <div className="flex gap-2 fh-30   w-[90%]  ">
                <div className="bg-[#2E0B80] w-[70%] fh-40">
                  <div className="flex gap-2 fh-30 justify-center m-1 ">
                    {Array(5)
                      .fill(0)
                      .map((_, index) => (
                        <Image
                          key={index}
                          src="/application_rating_star_icon.png"
                          alt={`App ${index + 1}`}
                          width={20}
                          height={10}
                          className="object-contain "
                        />
                      ))}
                  </div>
                </div>

                <div className=" w-[40%] bg-[#D9D9D9]  fh-40 flex justify-center place-items-center">
                  <p>120 previews</p>
                </div>
              </div>

              <div className="  mt-3  w-[90%]  grid grid-cols-3 justify-center place-items-center gap-2 ">
                <div className="bg-[#D9D9D9] w-full p-3 flex justify-center place-items-center gap-2">
                  <p className="fh-10 bg-[#2E0B80] fw-2" />
                  <p>L35</p>
                </div>

                <div className="bg-[#D9D9D9] w-full p-3 flex justify-center place-items-center gap-2">
                  <p className="fh-10 bg-[#2E0B80] fw-2" />
                  <p>355</p>
                </div>

                <div className="bg-[#D9D9D9] w-full p-3 flex justify-center place-items-center gap-2">
                  <p className="fh-10 bg-[#4A4A4A] fw-2" />
                  <p>Save</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <section className="bg-transparent   p-5 ">
          <div className=" shadow-f-cardM bg-white">
            <div className="bg-[#800020] fh-40 w-full flex gap-2 ps-5 place-items-center text-white  ">
              <input type="checkbox" />
              <p>Alt</p>
            </div>

            <div className="   mt-3 gap-2 ps-5 pb-3 flex flex-col">
              <div className="flex gap-2">
                <input type="checkbox" />
                <p className="text-fw-14 xl:text-fw-5">Finance</p>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" />
                <p className="text-fw-14 xl:text-fw-5">Travel</p>
              </div>
            </div>

            <div className="border-b-[0.5px] ps-5 border-b-[#D3D3D3] flex flex-col pb-3 gap-2 mt-3 ">
              <div className="flex gap-2">
                <input type="checkbox" />
                <p className="text-fw-14 xl:text-fw-5">Finance</p>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" />
                <p className="text-fw-14 xl:text-fw-5">Travel</p>
              </div>
            </div>

            <div className="border-b-[0.5px] ps-5 border-b-[#D3D3D3] mt-3  pb-3">
              <div className="flex gap-2">
                <input type="checkbox" />
                <p className="text-fw-14 xl:text-fw-5">Finance</p>
              </div>
            </div>

            <div className="border-b-[0.5px] ps-5 border-b-[#D3D3D3] mt-3 pb-3">
              <div className="flex gap-2">
                <input type="checkbox" />
                <p className="text-fw-14 xl:text-fw-5">Finance</p>
              </div>
            </div>

            <div className="border-b-[0.5px] ps-5 border-b-[#D3D3D3] mt-3 flex flex-col pb-3 gap-3 ">
              <div className="flex gap-2">
                <input type="checkbox" />
                <p className="text-fw-14 xl:text-fw-5">Finance</p>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" />
                <p className="text-fw-14 xl:text-fw-5">Travel</p>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" />
                <p className="text-fw-14 xl:text-fw-5">Finance</p>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" />
                <p className="text-fw-14 xl:text-fw-5">Finance</p>
              </div>
            </div>

            <div className="border-b-[0.5px] ps-5 border-b-[#D3D3D3] mt-3 pb-3 ">
              <div className="flex gap-2">
                <input type="checkbox" />
                <p className="text-fw-14 xl:text-fw-5">Finance</p>
              </div>
            </div>

            <div className="border-b-[0.5px] ps-5  border-b-[#D3D3D3] mt-3 pb-3">
              <div className="flex gap-2">
                <input type="checkbox" />
                <p className="text-fw-14 xl:text-fw-5">Finance</p>
              </div>
            </div>
          </div>
        </section>

        <Footer mode="mobile" />
      </main>
    </div>
  );
};

export default ProjectsMobile;
