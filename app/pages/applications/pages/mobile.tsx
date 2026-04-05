"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Itim } from "next/font/google";
import Footer from "../../landingPage/component/Footer";

const itim = Itim({ subsets: ["latin"], weight: "400" });

const ApplicationMobile = () => {
  const cardDetails = [
    {
      name: "Finance App",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4,
    },
    {
      name: "Personnal App",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 5,
    },
    {
      name: "Travel App",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 3,
    },
  ];

  return (
    <div className="h-dvh w-dvw bg-white overflow-hidden">
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

      {/**Main container */}

      <div className="h-dvh overflow-y-auto">
        <section
          className={`${itim.className} bg-white shadow-f-cardM   p-5   overflow-y-auto fh-680`}
        >
          <div className="w-full shadow-f-cardM">
            <div className="bg-[#2E0B80] fh-40 w-full flex gap-2 ps-5 place-items-center text-white ">
              <input type="checkbox" />
              <p>Alt</p>
            </div>

            <div className="   mt-3 gap-2  pb-3 flex flex-col ps-3 ">
              <div className="flex gap-2">
                <input type="checkbox" />
                <p className="text-fw-16">Finance</p>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" />
                <p className="text-fw-16">Travel</p>
              </div>
            </div>

            <div className="border-b-[0.5px] border-b-[#D3D3D3]  ps-3  flex flex-col pb-3 gap-2 mt-3 ">
              <div className="flex gap-2">
                <input type="checkbox" />
                <p className="text-fw-16">Finance</p>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" />
                <p className="text-fw-16">Travel</p>
              </div>
            </div>

            <div className="border-b-[0.5px] border-b-[#D3D3D3] mt-3   ps-3   pb-3">
              <div className="flex gap-2">
                <input type="checkbox" />
                <p className="text-fw-16">Finance</p>
              </div>
            </div>

            <div className="border-b-[0.5px] border-b-[#D3D3D3] mt-3  ps-3  pb-3">
              <div className="flex gap-2">
                <input type="checkbox" />
                <p className="text-fw-16">Finance</p>
              </div>
            </div>

            <div className="border-b-[0.5px] border-b-[#D3D3D3]  ps-3  mt-3 flex flex-col pb-3 gap-3 ">
              <div className="flex gap-2">
                <input type="checkbox" />
                <p className="text-fw-16">Finance</p>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" />
                <p className="text-fw-16">Travel</p>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" />
                <p className="text-fw-16">Finance</p>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" />
                <p className="text-fw-16">Finance</p>
              </div>
            </div>

            <div className="border-b-[0.5px] border-b-[#D3D3D3]  ps-3  mt-3 pb-3 ">
              <div className="flex gap-2">
                <input type="checkbox" />
                <p className="text-fw-16">Finance</p>
              </div>
            </div>

            <div className="border-b-[0.5px] border-b-[#D3D3D3] mt-3 pb-3  ps-3 ">
              <div className="flex gap-2">
                <input type="checkbox" />
                <p className="text-fw-16">Finance</p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-white  place-items-center   ">
          {/**Card container */}
          <div className="flex   flex-col gap-4">
            {cardDetails.map((card, index) => (
              <div
                key={index}
                className="min:fh-250 shadow-f-card  fw-350 bg-white p-5"
              >
                <div className=" flex gap-4">
                  <div className="fh-30 fw-30">
                    <Image
                      src="/application_contact_icon.png"
                      alt="App 1"
                      width={60}
                      height={60}
                      className="object-contain bg-[#2E0B80] mt-2"
                    />
                  </div>

                  <div>
                    <h2
                      className={`${itim.className}  text-fw-20 text-[#4C1D60]  `}
                    >
                      {card.name}
                    </h2>
                    <p className="fh-2 mt-2 fw-250 bg-[#D3D3D3]" />

                    <div className="flex  place-items-center ">
                      <div className="flex gap-2">
                        {Array(5)
                          .fill(0)
                          .map((_, index) => (
                            <div key={index} className="flex gap-2 mt-3 ">
                              <Image
                                src="/application_rating_star_icon.png"
                                alt={`App ${index + 1}`}
                                width={20}
                                height={20}
                                className="object-contain "
                              />
                            </div>
                          ))}
                      </div>

                      <p className="">djjjdjdj</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex  w-full relative ">
                  <div>
                    <p className="text-fw-14 text-ellipsis text-nowrap fw-100 overflow-hidden">
                      Lorem ipsum dolor sgsgg
                    </p>
                    <p className="text-fw-14 text-ellipsis text-nowrap fw-100 overflow-hidden">
                      Lorem ipsum dolor sgsgg
                    </p>
                  </div>

                  <button className="  fh-40 mt-2 ms-20 bg-[#800020] text-white text-fw-14 px-4 rounded">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=" bg-white   p-2 pb-20   overflow-y-auto  ">
          <div className="mt-10 ms-3 shadow-f-cardM p-3">
            <p className={`${itim.className}  text-[#4C1D60] text-fw-20 mb-3`}>
              App details
            </p>

            <div className="">
              <Image
                src="/application_container_3_bg.png"
                alt="App 1"
                width={400}
                height={200}
                className="object-contain "
              />
            </div>

            <div className="flex flex-wrap gap-20 mt-3">
              <div className="flex gap-2 fh-30 ">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <Image
                      key={index}
                      src="/star_icon.png"
                      alt={`App ${index + 1}`}
                      width={20}
                      height={10}
                      className="object-contain "
                    />
                  ))}
              </div>

              <div className="fw-50 flex flex-col place-items-end gap-2">
                <p className="text-fw-14 text-ellipsis text-nowrap fw-130 overflow-hidden">
                  Lorem ipsum dolor sgsgg
                </p>
                <p className="text-fw-14 text-ellipsis text-nowrap fw-130 overflow-hidden">
                  Lorem ipsum dolor sgsgg
                </p>
              </div>
            </div>

            <div className="mt-4 flex justify-evenly">
              <p className="text-fw-14 font-bold">
                Lorem ipsum dolor satum vien lori trend{" "}
              </p>
              <p className="text-fw-14 font-bold">Configure</p>
            </div>

            <div className="fh-2 fw-330 bg-[#D3D3D3] mt-10" />

            <div className="mt-5">
              <div className="flex gap-5 m-5">
                <div className="fw-50 fh-60 bg-[#2E0B80] rounded" />

                <div>
                  <p>Lorem ipsum dolor</p>

                  <p>Lorem ipsum dolor</p>
                </div>
              </div>

              <div className="flex gap-5 m-5">
                <div className="fw-50 fh-60 bg-[#2E0B80] rounded" />

                <div>
                  <p>Lorem ipsum dolor</p>

                  <p>Lorem ipsum dolor</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button className="bg-[#4C1D60] fh-50 w-full rounded text-white">
                View details
              </button>

              <button className="bg-[#800020] fh-50 w-full rounded mt-3 text-white">
                DewId New
              </button>
            </div>
          </div>
        </div>

        <Footer mode="mobile" />
      </div>
    </div>
  );
};

export default ApplicationMobile;
