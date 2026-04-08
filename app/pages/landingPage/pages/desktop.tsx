"use client";

import Image from "next/image";
import { Inter, Itim, Aclonica } from "next/font/google";
import Footer from "../component/Footer";
import { useMotionValueEvent, useScroll } from "framer-motion";
import React, { useCallback } from "react";
const itim = Itim({ subsets: ["latin"], weight: "400" });
const aclonica = Aclonica({ subsets: ["latin"], weight: "400" });
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useDreamTradingStore from "@/store/store";

const inter = Inter({
  display: "swap",
  weight: "600",
});

const interLight = Inter({
  display: "swap",
  weight: "400",
});

const Desktop = () => {
  const {userData} = useDreamTradingStore((state) => state)
  
  const containerRef = React.useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll({ container: containerRef });

  const [hidden, setHidden] = React.useState(false);

  const router = useRouter()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest > 150 && !hidden) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleNavToApplication = useCallback(()=>{
   router.push('/pages/applications' as never)
  },[router])

  const handleNavToProjects = useCallback(()=>{
   router.push('/pages/projects')
  },[router])

  const handleNavToShops = useCallback(()=>{
   router.push('/pages/shop')
  },[router])

  const handleNavToAccountScreen = useCallback(() => {
    router.push('/pages/account')
  },[router])

  return (
    <div className="w-screen h-screen overflow-hidden">
      {/**Top nav bar */}
      <nav
        className={`${inter.className} text-fh-8 w-screen fh-110  shadow-f-bottom flex flex-row place-items-center pe-5  `}
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
          <Link href="/" className="text-white p-1.5  underline decoration-2 underline-offset-10 decoration-[#951636]">
            Home
          </Link>

          <Link href="/pages/applications" className="text-white p-1.5">
            Applications
          </Link>
          <Link href="/pages/projects" className="text-white p-1.5">
            Projects
          </Link>

          <Link href="/pages/shop" className="text-white  p-1.5">
            Shops
          </Link>

      {!userData ?    <button onClick={handleNavToAccountScreen} className="text-white bg-[#800020] w-20 rounded-2xl p-1.5">
            Login
          </button>:null}
        </div>
      </nav>

      {/* Main content */}
      <motion.main
        ref={containerRef}
        className="h-dvh overflow-x-hidden overflow-y-scroll pb-20"
        style={{ scrollbarWidth: "none" }}
      >
        <motion.div
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: -300, opacity: 0 },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="absolute  w-full fh-100  mt-fh-350"
        >
          <Image
            src="/desktop_landing_linear_gradient_1.png"
            alt="Dream Eco Logo"
            fill
            loading="eager"
            className="object-cover"
          />
        </motion.div>

        <div className="grid grid-cols-3 relative ms-3 me-fw-10 mt-fh-10">
          <div className="  bg-transparent fh-100 col-span-2">
            <motion.h1
              initial={{ transform: "translateX(-200px)", opacity: 0 }}
              animate={{ transform: "translateX(0)", opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`${itim.className} font-extrabold   fw-230  justify-self-center text-white text-fw-20 leading-fh-30  mt-fh-30  xl:mt-fh-6`}
            >
              Building Digital Inovation & Modern Control
            </motion.h1>

            <div className="flex mt-fh-20 gap-10 ">
              <button
              onClick={handleNavToProjects}
                className={`${aclonica.className} text-fw-6 font-extrabold bg-btn-bg-red fw-80 fh-52 ms-fw-20 rounded-2xl text-white 1`}
              >
                Explore Project
              </button>

              <button
              onClick={handleNavToShops}
                className={`${aclonica.className} text-fw-6 font-extrabold bg-btn-bg-red fw-40 fh-52 rounded-2xl text-white  pt-1`}
              >
                Visit Shop
              </button>
            </div>
          </div>

          <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="  h-[60%]"
          >
            <div className="absolute  fw-150 fh-350 ">
              <Image
                src="/landing_img_1.png"
                alt="Dream Eco Logo"
                fill
                sizes="100%"
                loading="eager"
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>

        <div className="relative w-screen grid grid-cols-3    justify-center place-items-center mt-fh-270" >
        
          <motion.div
          onClick={handleNavToApplication}
            initial={{
              borderWidth: 0,
            }}
            whileHover={{
              borderWidth: "4px",
              borderColor: "#391452",
            }}
            className="fh-250  fw-120 bg-[#D3D3D3]  rounded-2xl justify-center items-center flex flex-col  text-center"
          >
            <div className="relative w-screen h-[calc(40*var(--spacing-fw))]  ">
              <Image
                src="/landing_img_3.png"
                alt="Dream Eco Logo"
                fill
                sizes="100%"
                className="object-contain"
              />
            </div>

            <p className={`${itim.className} font-extrabold text-[18px]`}>
              App development
            </p>
            <p className={`${inter.className} text-fw-6`}>
              App development dhdhhd kddkd dhhd dkkdk
            </p>
          </motion.div>

          <motion.div
          onClick={handleNavToProjects}
            initial={{
              borderWidth: 0,
            }}
            whileHover={{
              borderWidth: "4px",
              borderColor: "#391452",
            }}
            className="fh-250   fw-120   bg-[#D3D3D3] rounded-2xl justify-center items-center flex flex-col  text-center"
          >
            <div className="relative w-screen h-[calc(40*var(--spacing-fw))]  ">
              <Image
                src="/landing_img_4.png"
                alt="Dream Eco Logo"
                fill
                sizes="100%"
                className="object-contain"
              />
            </div>

            <p className={`${itim.className} font-extrabold text-[18px]`}>
              Construction & Contracting
            </p>
            <p className={`${inter.className} text-fw-6`}>
              App development dhdhhd kddkd dhhd dkkdk
            </p>
          </motion.div>

          <motion.div
           onClick={handleNavToShops}
            initial={{
              borderWidth: 0,
            }}
            whileHover={{
              borderWidth: "4px",
              borderColor: "#391452",
            }}
            className="fh-250   fw-120  bg-[#D3D3D3] rounded-2xl justify-center items-center flex flex-col  text-center"
          >
            <div className="relative w-screen h-[calc(40*var(--spacing-fw))]  ">
              <Image
                src="/landing_img_5.png"
                alt="Dream Eco Logo"
                fill
                sizes="100%"
                className="object-contain"
              />
            </div>

            <p className={`${itim.className} font-extrabold text-[18px]`}>
              Online Store
            </p>
            <p className={`${inter.className} text-fw-6`}>
              App development dhdhhd kddkd dhhd dkkdk
            </p>
          </motion.div>
        </div>

        <div className="h-0.5 w-full bg-white mt-fh-50"  />

        <motion.div

          initial={{ opacity: 0, transform: "translateY(100px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative  w-screen ms-fw-8 mt-fh-20   "
        >
          <p
            className={`${itim.className} font-extrabold text-white text-fw-16 mb-5`}
          >
            Featured projects
          </p>

          <div className="grid grid-cols-3 ">
            <motion.div className="fw-120 border">
              <div className=" fh-450  bg-[#391452] shadow-f-bottom rounded-2xl mt-fw-20 border border-black">
                <div className="fh-180 w-full  bg-white rounded-tr-2xl rounded-tl-2xl">
                  <div className="relative fh-180 fw-120">
                    <Image
                      src="/landing_feature_card_1_img.png"
                      alt="Dream Eco Logo"
                      fill
                      sizes="100%"
                      className="object-contain  "
                    />
                  </div>
                </div>

                <div className="p-2">
                  <p
                    className={`${itim.className} font-extrabold text-white text-fw-16 mt-fh-20`}
                  >
                    Mobile App 1
                  </p>
                  <div className="fh-1 fw-110 bg-[#D9D9D9] mt-fh-5" />

                  <div className="flex justify-center place-items-center">
                    <div
                      className="overflow-y-auto fh-150 xl:fh-110  fw-200 p-1 "
                      style={{ scrollbarWidth: "none" }}
                    >
                      <p
                        className={`${inter.className}  text-fw-6 mt-fh-20 text-white`}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec efficitur, nunc ut laoreet venenatis, nisl nunc
                        consectetur nisi, eget consectetur nunc nisl quis nunc.
                        Donec efficitur, nunc ut laoreet venenatis, nisl nunc
                        consectetur nisi, eget consectetur nunc nisl quis nunc.
                      </p>
                    </div>

                    <button className="bg-white fw-91 fh-40 rounded">
                      button
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="fw-120">
              <div className=" fh-450  bg-[#4D1067] shadow-f-bottom rounded-2xl mt-fw-20 border border-black">
                <div className="fh-180   bg-white rounded-tr-2xl rounded-tl-2xl">
                  <div className="relative fh-180 fw-120 ">
                    <Image
                      src="/landing_feature_card_2_img.png"
                      alt="Dream Eco Logo"
                      fill
                      sizes="100%"
                      className="object-cover object-top "
                    />
                  </div>
                </div>

                <div className="p-2">
                  <p
                    className={`${itim.className} font-extrabold text-white text-fw-16 mt-fh-20`}
                  >
                    Mobile App 1
                  </p>
                  <div className="fh-1 fw-110 bg-[#D9D9D9] mt-fh-5" />

                  <div className="flex justify-center place-items-center">
                    <div
                      className="overflow-y-auto fh-150 xl:fh-110 fw-200 p-1 "
                      style={{ scrollbarWidth: "none" }}
                    >
                      <p
                        className={`${inter.className}  text-fw-6 mt-fh-20 text-white`}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec efficitur, nunc ut laoreet venenatis, nisl nunc
                        consectetur nisi, eget consectetur nunc nisl quis nunc.
                        Donec efficitur, nunc ut laoreet venenatis, nisl nunc
                        consectetur nisi, eget consectetur nunc nisl quis nunc.
                      </p>
                    </div>

                    <button className="bg-white fw-91 fh-40 rounded">
                      button
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="fw-120">
              <div className=" fh-450  bg-[#800020] shadow-f-bottom rounded-2xl mt-fw-20 border border-black">
                <div className="fh-180   bg-white rounded-tr-2xl rounded-tl-2xl">
                  <div className="relative fh-180 w-full">
                    <Image
                      src="/landing_feature_card_3_img.png"
                      alt="Dream Eco Logo"
                      fill
                      sizes="100%"
                      className="object-cover object-top "
                    />
                  </div>
                </div>

                <div className="p-2">
                  <p
                    className={`${itim.className} font-extrabold text-white text-fw-16 mt-fh-20`}
                  >
                    Mobile App 1
                  </p>
                  <div className="fh-1 fw-110 bg-[#D9D9D9] mt-fh-5" />

                  <div className="flex justify-center place-items-center">
                    <div
                      className="overflow-y-auto fh-150 xl:fh-110 fw-200 p-1 "
                      style={{ scrollbarWidth: "none" }}
                    >
                      <p
                        className={`${inter.className}  text-fw-6 mt-fh-20 text-white`}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec efficitur, nunc ut laoreet venenatis, nisl nunc
                        consectetur nisi, eget consectetur nunc nisl quis nunc.
                        Donec efficitur, nunc ut laoreet venenatis, nisl nunc
                        consectetur nisi, eget consectetur nunc nisl quis nunc.
                      </p>
                    </div>

                    <button className="bg-white fw-91 fh-40 rounded">
                      button
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/**Container */}

        <div className="relative bg-[url('/landing_bg_linear_gradient_1.png')] bg-no-repeat bg-cover bg-center  fh-270 w-screen  mt-5 ">
          <div className="absolute bg-[url('/landing_bg_linear_gradient_2.png')] bg-no-repeat bg-cover bg-center  h-full  fw-200 "></div>

          <div className="relative grid grid-cols-4  justify-center place-items-center">
            <div className="fh-200 justify-center place-items-center pt-10 ">
              <p className={`${itim.className} text-white text-fw-16`}>5000+</p>
              <p
                className={`${interLight.className} text-white text-fw-8 font-extralight`}
              >
                Project integrated
              </p>
              <p className="h-25 w-[0.5px] bg-white absolute left-[25%] bottom-[10%]"></p>
              <p className="h-25 w-[0.5px] bg-white absolute right-[25%] bottom-[10%]"></p>
              <p className="h-25 w-[0.5px] bg-white absolute right-[50%] bottom-[10%]"></p>
            </div>

            <div className="fh-200 justify-center place-items-center pt-10  ">
              <p className={`${itim.className} text-white text-fw-16`}>120+</p>
              <p className={`${interLight.className} text-white text-fw-8`}>
                Projecct sold
              </p>
            </div>

            <div className="fh-200 justify-center place-items-center pt-10  ">
              <p className={`${itim.className} text-white text-fw-16`}>12k</p>
              <p className={`${interLight.className} text-white text-fw-8`}>
                Active Users
              </p>
            </div>

            <div className="fh-200 justify-center place-items-center pt-10  ">
              <p className={`${itim.className} text-white text-fw-16`}>15+</p>
              <p className={`${interLight.className} text-white text-fw-8`}>
                Years of Experience
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <Footer mode="desktop" />
        </div>
      </motion.main>
    </div>
  );
};

export default Desktop;
