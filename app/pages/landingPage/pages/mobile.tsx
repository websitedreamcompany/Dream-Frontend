"use client";

import Image from "next/image";
import Footer from "../component/Footer";
import { Inter, Itim, Aclonica } from "next/font/google";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useDreamTradingStore from "@/store/store";

const inter = Inter({ subsets: ["latin"], weight: "400" });
const itim = Itim({ subsets: ["latin"], weight: "400" });

const aclonica = Aclonica({ subsets: ["latin"], weight: "400" });

const Mobile = () => {
  const [toggleNavBar, setToggleNavBar] = useState(false);
  const {userData} = useDreamTradingStore(state=>state)
  const router = useRouter();

  const handleNaVButtonClicked = useCallback(() => {
    setToggleNavBar(!toggleNavBar);
  }, [toggleNavBar]);

  const handleCloseNavBar = useCallback(() => {
    setToggleNavBar(false);
  }, []);

  const handleNavigateToApplications = useCallback(() => {
    router.push("/pages/applications");
  }, [router]);

  const handleNavigateToProjects = useCallback(() => {
    router.push("/pages/projects");
  }, [router]);

  const handleNavigateToShop = useCallback(() => {
    router.push("/pages/shop");
  }, [router]);



  return (
    <main className="overflow-hidden h-screen ">

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
          className={` ${!toggleNavBar && "hidden"} bg-[rgba(44,33,33,0.95)] absolute text-white  right-0 top-0 bottom-[40%] z-100 fw-300 p-4`}
        >
          <p className="font-bold text-2xl" onClick={handleCloseNavBar}>x</p>
          <div className={`${itim.className} mt-2 font-bold gap-3 flex flex-col`}>
            <Link href={'/'} className="underline decoration-2 underline-offset-10 decoration-[#951636] text-white  " >Home</Link>
             <Link href={'/pages/applications'} >Applications</Link>
              <Link href={'/pages/projects'} >Projects</Link>
              <Link href={'/pages/shop'} >Shop</Link>
              {userData ? <Link className=" text-white bg-[#800020] w-20 rounded-2xl p-1.5 text-center " href={'/pages/account'} >Login</Link>:null}
        
          </div>
        </motion.div>
      </nav>

      {/**Main body of the screen */}
      <div
        className="h-screen  w-dvw relative overflow-y-auto overflow-x-hidden 
           "
        style={{ scrollbarWidth: "none" }}
      >
        <motion.h1
          initial={{
            opacity: 0,
            transform: "translateY(-100px)",
          }}
          animate={{
            opacity: 1,
            transform: "translateY(0px)",
          }}
          className={`${itim.className} font-extrabold  mt-fh-40 fw-257 fh-149 justify-self-center text-white text-fw-20 leading-12`}
        >
          Building Digital Inovation & Modern Control
        </motion.h1>

        <motion.div
          initial={{
            opacity: 0,
            transform: "translateY(100px)",
          }}
          animate={{
            opacity: 1,
            transform: "translateY(0px)",
            transition: {
              duration: 0.5,
              ease: "easeInOut",
            },
          }}
          className="flex mt-fh-90 justify-evenly"
        >
          <Link
            href={"/pages/projects"}
            className={`${aclonica.className} text-fw-16 font-extrabold bg-btn-bg-red fw-155 fh-52 rounded-2xl text-white  flex justify-center items-center text-center `}
          >
            Explore Project
          </Link>

          <Link
            href={"/pages/shop"}
            className={`${aclonica.className} text-fw-16 font-extrabold bg-btn-bg-red fw-155 fh-52 rounded-2xl text-white  flex justify-center items-center text-center `}
          >
            Visit Shop
          </Link>
        </motion.div>

        <p className="absolute bg-white -bottom-20 h-[0.2vh]  w-screen" />

        <motion.div
          initial={{
            opacity: 0,
            transform: "translateY(100px)",
          }}
          animate={{
            opacity: 1,
            transform: "translateY(0px)",
            transition: {
              duration: 1.5,
              ease: "easeInOut",
            },
          }}
          className="absolute  w-full mt-8 bg-[url('/landing_img_12.svg')] bg-no-repeat bg-cover bg-center fh-400"
        />

        <motion.div
          initial={{
            opacity: 0,
            transform: "translateY(100px)",
          }}
          animate={{
            opacity: 1,
            transform: "translateY(0px)",
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="relative w-screen justify-center place-items-center mt-70"
        >
          <div
            className="fh-151 m-5 fw-311 bg-[#D3D3D3]  rounded-2xl justify-center items-center flex flex-col  text-center"
            onClick={handleNavigateToApplications}
          >
            <div className="relative w-screen h-[calc(65*var(--spacing-fw))]  ">
              <Image
                src="/landing_img_3.png"
                alt="Dream Eco Logo"
                fill
                className="object-contain"
              />
            </div>

            <p className={`${itim.className} font-extrabold text-[18px]`}>
              App development
            </p>
            <p className={`${inter.className} text-fw-10`}>
              App development dhdhhd kddkd dhhd dkkdk
            </p>
          </div>

          <div
            className="fh-151 m-5  fw-311 bg-[#D3D3D3] rounded-2xl justify-center items-center flex flex-col  text-center"
            onClick={handleNavigateToProjects}
          >
            <div className="relative w-screen h-[calc(50*var(--spacing-fw))]  ">
              <Image
                src="/landing_img_4.png"
                alt="Dream Eco Logo"
                fill
                className="object-contain"
              />
            </div>

            <p className={`${itim.className} font-extrabold text-[18px]`}>
              Construction & Contracting
            </p>
            <p className={`${inter.className} text-fw-10`}>
              App development dhdhhd kddkd dhhd dkkdk
            </p>
          </div>

          <div
            className="fh-151 m-5 fw-311 bg-[#D3D3D3] rounded-2xl justify-center items-center flex flex-col  text-center"
            onClick={handleNavigateToShop}
          >
            <div className="relative w-screen h-[calc(500*var(--spacing-fw))]  ">
              <Image
                src="/landing_img_5.png"
                alt="Dream Eco Logo"
                fill
                className="object-contain"
              />
            </div>

            <p className={`${itim.className} font-extrabold text-[18px]`}>
              Online Store
            </p>
            <p className={`${inter.className} text-fw-10`}>
              App development dhdhhd kddkd dhhd dkkdk
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            transform: "translateY(100px)",
          }}
          whileInView={{
            opacity: 1,
            transform: "translateY(0px)",
            transition: {
              duration: 0.5,
              ease: "easeInOut",
            },
          }}
          className="relative  w-screen ms-fw-50 mt-fh-50  "
        >
          <p
            className={`${itim.className} font-extrabold text-white text-fw-20`}
          >
            Featured projects
          </p>

          <div className="flex flex-col gap-5">
            <div className="">
              <div className=" fh-350 fw-307 bg-[#391452] shadow-f-bottom rounded-2xl mt-fw-20 border border-black">
                <div className="fh-180 fw-307  bg-white rounded-tr-2xl rounded-tl-2xl">
                  <div className="relative fh-180 fw-307    ">
                    <Image
                      src="/landing_feature_card_1_img.png"
                      alt="Dream Eco Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="p-2">
                  <p
                    className={`${itim.className} font-extrabold text-white text-fw-16 mt-fh-20`}
                  >
                    Mobile App 1
                  </p>
                  <div className="fh-1 fw-288 bg-[#D9D9D9] mt-fh-5" />

                  <div
                    className="overflow-y-auto fh-90 p-1 "
                    style={{ scrollbarWidth: "none" }}
                  >
                    <p
                      className={`${inter.className}  text-fw-12  mt-fh-20 text-white`}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec efficitur, nunc ut laoreet venenatis, nisl nunc
                      consectetur nisi, eget consectetur nunc nisl quis nunc.
                      Donec efficitur, nunc ut laoreet venenatis, nisl nunc
                      consectetur nisi, eget consectetur nunc nisl quis nunc.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className=" fh-350 fw-307 bg-[#4D1067] shadow-f-bottom rounded-2xl mt-fw-20 border border-black">
                <div className="fh-180 fw-307  bg-white rounded-tr-2xl rounded-tl-2xl">
                  <div className="relative fh-180 fw-307">
                    <Image
                      src="/landing_feature_card_2_img.png"
                      alt="Dream Eco Logo"
                      fill
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
                  <div className="fh-1 fw-288 bg-[#D9D9D9] mt-fh-5" />

                  <div className="flex justify-center place-items-center">
                    <div
                      className="overflow-y-auto fh-90 fw-200 p-1 "
                      style={{ scrollbarWidth: "none" }}
                    >
                      <p
                        className={`${inter.className}  text-fw-12  mt-fh-20 text-white`}
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

            <div className="">
              <div className=" fh-350 fw-307 bg-[#800020] shadow-f-bottom rounded-2xl mt-fw-20 border border-black">
                <div className="fh-180 fw-307  bg-white rounded-tr-2xl rounded-tl-2xl">
                  <div className="relative fh-180 fw-307    ">
                    <Image
                      src="/landing_feature_card_3_img.png"
                      alt="Dream Eco Logo"
                      fill
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
                  <div className="fh-1 fw-288 bg-[#D9D9D9] mt-fh-5" />

                  <div className="flex justify-center place-items-center">
                    <div
                      className="overflow-y-auto fh-90 fw-200 p-1 "
                      style={{ scrollbarWidth: "none" }}
                    >
                      <p
                        className={`${inter.className}  text-fw-12  mt-fh-20 text-white`}
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

        <div className="relative bg-[url('/landing_bg_linear_gradient_1.png')] bg-no-repeat bg-cover bg-center  fh-402 w-screen  mt-10 ">
          <div className="absolute bg-[url('/landing_bg_linear_gradient_2.png')] bg-no-repeat bg-cover bg-center  h-full  fw-200 "></div>

          <div className="relative grid grid-cols-2 grid-rows-2">
            <div className="fh-200 justify-center place-items-center pt-10  ">
              <p className={`${itim.className} text-white text-fw-24`}>5000+</p>
              <p className={`${inter.className} text-white text-fw-12`}>
                Projecct integrated
              </p>
              <p className="h-25 w-[0.5px] bg-white absolute right-[50%] top-[10%]"></p>
              <p className="h-25 w-[0.5px] bg-white absolute right-[50%] bottom-[10%]"></p>
            </div>

            <div className="fh-200 justify-center place-items-center pt-10  ">
              <p className={`${itim.className} text-white text-fw-24`}>120+</p>
              <p className={`${inter.className} text-white text-fw-12`}>
                Projecct sold
              </p>
            </div>

            <div className="fh-200 justify-center place-items-center pt-10  ">
              <p className={`${itim.className} text-white text-fw-24`}>12k</p>
              <p className={`${inter.className} text-white text-fw-12`}>
                Active Users
              </p>
            </div>

            <div className="fh-200 justify-center place-items-center pt-10  ">
              <p className={`${itim.className} text-white text-fw-24`}>15+</p>
              <p className={`${inter.className} text-white text-fw-12`}>
                Years of Experience
              </p>
            </div>
          </div>
        </div>

        <Footer mode="mobile" />
      </div>
    </main>
  );
};

export default Mobile;
