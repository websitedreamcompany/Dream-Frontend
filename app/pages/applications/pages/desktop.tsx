import { Inter, Itim } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { GrApps } from "react-icons/gr";
import Footer from "../../landingPage/component/Footer";

const inter = Inter({
  display: "swap",
  weight: "600",
});

const itim = Itim({
  weight:'400'

});
const ApplicationDesktop = () => {
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
    <div className={`${itim.className} w-full h-full  items-center justify-center`}>
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

          <Link href="/pages/applications" className=" underline decoration-2 underline-offset-10 decoration-[#951636] text-white p-1.5">
            Applications
          </Link>

          <Link href="/pages/projects" className="text-white p-1.5">
            Projects
          </Link>

          <Link href="/pages/shop" className="text-white  p-1.5">
            Shops
          </Link>

          <Link
            href={"/pages/account"}
            className="text-white bg-[#800020] w-20 rounded-2xl p-1.5 text-center"
          >
            Login
          </Link>
        </div>
      </nav>

      {/**
       * Main containerr
       */}

      <main className="application h-dvh w-full overflow-y-scroll bg-white ">
        <div className="grid  grid-cols-6 h-dvh bg-gray-600 ">
        
        
          <section className={`${itim.className} bg-white  p-5   overflow-y-auto h-300 col-span-1`}>
           
            <div className="w-full  border border-gray-300  ">

              <div className="bg-[#2E0B80] fh-40 w-full flex gap-2 ps-5 place-items-center text-white  ">
                <input type="checkbox" />
                <p>All</p>
              </div>

              <div className="   mt-3 gap-2   flex flex-col ps-3">
                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p className="text-[14px]">Finance</p>
                </div>

                <div className="flex gap-2 ">
                  <input type="checkbox" />
                  <p className="text-[14px]">Travel</p>
                </div>
              </div>

              <div className="border-b-[0.5px] ps-3 border-b-[#D3D3D3] flex flex-col pb-3 gap-2 mt-3 ">
                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p className="text-[14px]">Finance</p>
                </div>

                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p className="text-[14px]">Travel</p>
                </div>
              </div>

              <div className="border-b-[0.5px] border-b-[#D3D3D3] mt-3  pb-3 ps-3">
                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p className="text-[14px]">Finance</p>
                </div>
              </div>

              <div className="border-b-[0.5px] border-b-[#D3D3D3] mt-3 pb-3 ps-3">
                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p className="text-[14px]">Finance</p>
                </div>
              </div>

              <div className="border-b-[0.5px] border-b-[#D3D3D3] ps-3 mt-3 flex flex-col pb-3 gap-3 ">
                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p className="text-[14px]">Finance</p>
                </div>

                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p className="text-[14px]">Travel</p>
                </div>

                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p className="text-[14px]">Finance</p>
                </div>

                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p className="text-[14px]">Finance</p>
                </div>
              </div>

              <div className="border-b-[0.5px] border-b-[#D3D3D3] mt-3 pb-3 ps-3">
                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p className="text-[14px]">Finance</p>
                </div>
              </div>

              <div className="border-b-[0.5px] border-b-[#D3D3D3] mt-3 pb-3 ps-3">
                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p className="text-[14px]">Finance</p>
                </div>
              </div>
            </div>
          </section>

          <div className="  pt-5 col-span-3 bg-white flex justify-center overflow-y-auto h-screen">
            {/**Card container */}
            <div className="flex   flex-col gap-4">
              {cardDetails.map((card, index) => (
                <div
                  key={index}
                  className="min:fh-200   fw-160 bg-white shadow p-5 border border-gray-200 rounded-2xl"
                >
                  
                  <div className=" flex  gap-3 justify-center ">

                <GrApps className="mt-1" color="#2E0B80" size={30} />

                    <div className="">
                      <h2 className="text-[24px]  text-[#4C1D60] ">{card.name}</h2>
                      <p className="fh-2 mt-2 fw-140 bg-[#D3D3D3]" />

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

                     
                      </div>
                    </div>

                
                  </div>

                  <div className="mt-5 flex flex-wrap w-full relative justify-between ">
                    <div className="ms-8">
                      <p className="text-[14px]">Lorem ipsum dolor</p>
                      <p className="text-[14px]">Lorem ipsum dolor</p>
                    </div>

                    <button className="  fh-40 mt-2 ms-20 bg-[#800020] text-white text-[14px] px-4 rounded ">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className=" bg-white    p-5   overflow-y-auto h-300 col-span-2">
            <div className=" ms-3">
              <p className="text-[24px]">App details</p>
              <div className="rounded-2xl">
                <Image
                  src="/application_container_3_bg.png"
                  alt="App 1"
                  width={400}
                  height={300}
                  className="object-contain  "
                />
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
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

                <div className="fw-50 flex flex-col place-items-end text-[14px] font-light">
                  <p>Lorem ipsum dolor</p>
                  <p>Lorem ipsum dolor</p>
                </div>
              </div>

              <div className="mt-4 flex justify-evenly">
                <p className="text-[14px] font-bold">
                  Lorem ipsum dolor satum vien lori trend{" "}
                </p>
                <p className="text-[14px] font-bold">Configure</p>
              </div>

              <div className="fh-2 fw-110 bg-[#D3D3D3] mt-10" />

              <div className="mt-5">
                <div className="flex gap-5 m-5">
                  <div className="fw-15 fh-60 bg-[#2E0B80] rounded" />

                  <div className="text-[14px]">
                    <p>Lorem ipsum dolor</p>

                    <p>Lorem ipsum dolor</p>
                  </div>
                </div>

                <div className="flex gap-5 m-5">
                  <div className="fw-15 fh-60 bg-[#2E0B80] rounded" />

                  <div className="text-[14px]">
                    <p>Lorem ipsum dolor</p>

                    <p>Lorem ipsum dolor</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-[14px]">
                <button className="bg-[#4C1D60] fh-50 w-full rounded text-white">
                  View details
                </button>

                <button className="bg-[#800020] fh-50 w-full rounded mt-3 text-white">
                  DewId New
                </button>
              </div>
            </div>
          </div>
        </div>

        <Footer mode="desktop" />
      </main>
    </div>
  );
};

export default ApplicationDesktop;
