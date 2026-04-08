"use client";

import Image from "next/image";
import Link from "next/link";
import { Inter, Itim } from "next/font/google";
import { useState } from "react";
import ImageSlider from "../component/ImageSlider";
import useDreamTradingStore from "@/store/store";

const inter = Inter({
  display: "swap",
  weight: "600",
});

const itim = Itim({
  display: "swap",
  weight: "400",
});

const ProjectsDesktop = () => {
  const { projectData: globalDataState, moreData } = useDreamTradingStore(
    (state) => state,
  );

  const blurData =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==";

  const [selectedItemDetails, setSelectedDetails] = useState<{
    img: string;
    desc: string;
  }>();

  return (
    <div className="h-dvh overflow-hidden">
      {/**Top nav bar */}
      <nav
        className={`${inter.className} text-fh-8 w-screen  fh-110  shadow-f-bottom flex flex-row place-items-center 
                   
                pe-5  `}
      >
        <div className="relative w-[calc(30*var(--spacing-fw))] h-[calc(30*var(--spacing-fw))] ms-fw-16 ">
          <Image
            src="/logo.svg"
            alt="Dream Eco Logo"
            fill
            className="object-contain"
          />
        </div>

        <div className="w-screen justify-end gap-5    flex">
          <Link href="/" className="text-white p-1.5">
            Home
          </Link>

          <Link href="/pages/applications" className=" text-white p-1.5">
            Applications
          </Link>

          <Link href="/pages/projects" className="underline decoration-2 underline-offset-10 decoration-[#951636] text-white p-1.5 ">
            Projects
          </Link>

          <Link href="/pages/shop" className="text-white  p-1.5">
            Shops
          </Link>

          <Link href={'/pages/account'} className="text-white text-center bg-[#800020] w-20 rounded-2xl p-1.5">
            Login
          </Link>
        </div>
      </nav>

      {/**
       * Main containerr
       */}

      <main className="application h-dvh w-full overflow-hidden bg-[#D9D9D9] grid grid-rows-12  ">
        <div className="grid  grid-cols-12 h-dvh bg-[#D9D9D9] ">
          <section className="bg-transparent   p-5   overflow-y-auto h-dvh col-span-3 ">
            <div className="w-full shadow-f-cardM bg-white">

              <div className="bg-[#800020] fh-40 w-full flex gap-2 ps-5 place-items-center text-white  ">
                <input type="checkbox" />
                <p>All</p>
              </div>

              <div className="   mt-3 gap-2 ps-5 pb-3 flex flex-col">
                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p className="text-fw-8 xl:text-fw-5">Finance</p>
                </div>

                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p className="text-fw-8 xl:text-fw-5">Travel</p>
                </div>
              </div>

              <div className="border-b-[0.5px] ps-5 border-b-[#D3D3D3] flex flex-col pb-3 gap-2 mt-3 ">
                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p className="text-fw-8 xl:text-fw-5">Finance</p>
                </div>

                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p className="text-fw-8 xl:text-fw-5">Travel</p>
                </div>
              </div>

              <div className="border-b-[0.5px] ps-5 border-b-[#D3D3D3] mt-3  pb-3">
                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p className="text-fw-8 xl:text-fw-5">Finance</p>
                </div>
              </div>

              <div className="border-b-[0.5px] ps-5 border-b-[#D3D3D3] mt-3 pb-3">
                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p className="text-fw-8 xl:text-fw-5">Finance</p>
                </div>
              </div>

              <div className="border-b-[0.5px] ps-5 border-b-[#D3D3D3] mt-3 flex flex-col pb-3 gap-3 ">
                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p className="text-fw-8 xl:text-fw-5">Finance</p>
                </div>

                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p className="text-fw-8 xl:text-fw-5">Travel</p>
                </div>

                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p className="text-fw-8 xl:text-fw-5">Finance</p>
                </div>

                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p className="text-fw-8 xl:text-fw-5">Finance</p>
                </div>
              </div>

              <div className="border-b-[0.5px] ps-5 border-b-[#D3D3D3] mt-3 pb-3 ">
                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p className="text-fw-8 xl:text-fw-5">Finance</p>
                </div>
              </div>

              <div className="border-b-[0.5px] ps-5  border-b-[#D3D3D3] mt-3 pb-3">
                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p className="text-fw-8 xl:text-fw-5">Finance</p>
                </div>
              </div>
            </div>
          </section>

          <section
            className={`${itim.className} bg-tansparent  h-dvh    p-5   overflow-y-auto  pb-20 col-span-4`}
          >
            <div
              style={{ scrollbarWidth: "none" }}
              className="  sticky top-0 z-50   fh-50 bg-[#C5C4C4] border-[0.2px] border-[rgba(0,0,0,0.2)] shadow-f-cardM flex place-items-center gap-5 overflow-x-scroll "
            >
              <div className=" fh-50 p-3 justify-center ">
                <div className="relative w-5 h-[calc(4*var(--spacing-fw))]  ">
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
                <div className="relative w-5 h-[calc(3*var(--spacing-fw))]  ">
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
              <div className="relative w-full h-[calc(80*var(--spacing-fw))] embla__viewport mt-3 mb-4 ">
                <Image
                  src={
                    globalDataState &&
                    globalDataState?.data &&
                    globalDataState?.data?.length > 0
                      ? ` ${(globalDataState?.data[7] as { urls: { regular: string } })?.urls?.regular}`
                      : "/"
                  }
                  alt="project_menu"
                  fill
                  sizes="100%"
                  className="object-contain"
                />
              </div>

              {globalDataState?.data && globalDataState.data?.length > 0 && (
                <ImageSlider
                  data={globalDataState.data as []}
                  onItemSelected={(item) => {
                    setSelectedDetails({
                      img: (item as { img: string }).img,
                      desc: "",
                    });
                  }}
                />
              )}

              <div className=" grid grid-cols-12  gap-3 mt-3">
                <div className="relative rounded-2xl h-[calc(130*var(--spacing-fh))] col-span-5 ">
                  <Image
                    src="/demo_projects_image_1.png"
                    alt="project_menu"
                    fill
                    sizes="100%"
                    className="object-contain rounded-2xl "
                  />
                </div>
              </div>

              <div className=" grid grid-cols-2  gap-3  mt-3">
                {moreData &&
                  moreData.length > 0 &&
                  moreData.map((item, index) => (
                    <div
                      key={index}
                      className="relative rounded-2xl h-[calc(130*var(--spacing-fh))]  col-span-1 "
                    >
                      <Image
                        src={`${(item as { urls: { regular: string } }).urls.regular}`}
                        alt="project_menu"
                        fill
                        sizes="100%"
                        className="object-cover   rounded-2xl "
                      />
                    </div>
                  ))}
              </div>
            </div>
          </section>

          <section
            className={`${itim.className} p-5   overflow-y-auto h-dvh col-span-5 `}
          >
            <div className="bg-white w-[95%] h-dvh p-5">
              <div className="relative w-full h-[calc(80*var(--spacing-fw))]  ">
                <Image
                  src={
                    selectedItemDetails
                      ? (selectedItemDetails?.img as string)
                      : "/demo_projects_image_2.png"
                  }
                  alt="project_menu"
                  fill
                  sizes="100%"
                  className="object-contain"
                  placeholder="blur"
                  blurDataURL={blurData}
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
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProjectsDesktop;
