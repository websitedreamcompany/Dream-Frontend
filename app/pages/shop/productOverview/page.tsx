'use client'

import { Itim, Inter } from "next/font/google";
import Image from "next/image"
import Link from "next/link"
import Footer from "../../landingPage/component/Footer";
import ImageSlider from "./component/ImageSlider";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";


const itim = Itim({ subsets: ["latin"], weight: "400" });

const inter = Inter({ subsets: ["latin"], weight: "400" });

const ProductOverview = () =>{
    
  const [moreData, setMoreData] = useState([]);
      
      const param = useSearchParams();
  
    
      useEffect(() => {
    
        
        fetch(
          `https://api.unsplash.com/search/photos?page=3&query=${param.get("cat")}&client_id=PG4lf1B0kp4ZKEVlfaLmOLzldpPEQK0yyMt5Ml_9Vyk`,
          {
            method: "get",
          },
        )
          .then((r) => {
            return r.json();
          })
          .then((r) => {
            console.log("page two..");
            console.log(r);
    
            setMoreData(r.results);
          })
          .catch(console.log);
      }, [setMoreData,moreData,param]);


    return <div className="bg-[#E8E8E8] h-screen">
         {/**Top nav bar */}
           <nav
             className={`${inter.className} text-fh-8 w-screen  border-b fh-110  shadow-f-bottom flex flex-row place-items-center 
                                
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
     
               <Link href="/pages/applications" className="text-white p-1.5">
                 Applications
               </Link>
     
               <Link href="/pages/projects" className="text-white p-1.5">
                 Projects
               </Link>
     
               <Link href="/pages/shop" className="underline decoration-2 underline-offset-10 decoration-[#951636] text-white  p-1.5">
                 Shops
               </Link>
     
               <Link href={'/pages/account'} className="text-center text-white bg-[#800020] w-20 rounded-2xl p-1.5">
                 Login
               </Link>
             </div>
           </nav>

            <div className="bg-web-navbar fh-100 w-full flex gap-2  place-items-center text-white flex-cols relative mt-3 ">
                    
                     <div className="ms-[20%] bg-white w-[45%] h-[50%] rounded-2xl flex place-item-center justify-center">
                       <div className="text-black place-self-center ms-0 flex ">
                         <div className="fh-29 fw-10 relative pt-3 mt-2">
                           <Image
                             alt="Real estate"
                             src={"/category_icons/search_icon.svg"}
                             fill
                             className=" p-1 rounded object-cover"
                           />
                         </div>
           
                         <input  placeholder="what are you looking for?" className="text-[12px] mt-1 outline-none" />
                       </div>
           
                       <div className="h-[80%] bg-[#B2AEAE] w-[0.3%] ms-8 mt-1"></div>
           
                       <div className="text-black place-self-center place-item-center justify-center ms-5 flex ">
                         <p className="text-[12px] ">All categories</p>
           
                         <div
                           className="fh-20 fw-10 relative pt-4 mt-[1.5px]"
                           onClick={()=>{}}
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
                         <p className="text-[12px]">Deutshland</p>
                       </div>
           
                       <div className="h-[80%] bg-[#B2AEAE] w-[0.3%] ms-8 mt-1"></div>
           
                       <div className="text-black place-self-center ms-5 flex ">
                         <p className="text-[12px] mt-1">Entire town </p>
           
                         <div className="fh-20 fw-10 relative pt-7 mt-[0.2px]">
                           <Image
                             alt="Real estate"
                             src={"/category_icons/arrow_down_cat_icon.svg"}
                             fill
                             className=" p-1 rounded object-cover"
                           />
                         </div>
           
                         <p className="text-[12px] bg-web-navbar p-1 rounded text-white  ">
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

           {/**Body  */}
           <main className="overflow-y-scroll h-screen">
                <div className="grid grid-cols-12 ps-8 pt-6  ">

            <section className="col-span-8 min:h-480 ">

                <div className=" ">
                   
                  {moreData ? <ImageSlider data={moreData as []} onItemSelected={()=>{}}/>

                    :null}

                    <div className="mt-6 bg-white fh-250 p-4 rounded-2xl ">
                        <p className="font-bold text-[24px] w-150 ms-2">Modern 3-room apartment with large balcony in Malchin hddhdhh dkdk</p>

                        <div className="flex items-center gap-3 mt-3 ms-2 ">
                            <p className="text-green-600 font-bold text-[20px]">€725 negotiable </p>
                            <p>Only pickup</p>
                        </div>

                        <div className="ms-2 mt-3 text-[14px]">

              <p>13629 Berlin - Charlottenburg</p>
               
                <div className="flex  ">
                        <p>April 11, 2026 </p>
                        <p>138</p>
                </div>
                        </div>
                    </div>



                      <div className="mt-6 bg-white min:fh-250 p-4 rounded-2xl ">
                        <p className="font-bold text-[18px] w-150 ms-2 ">Description</p>

                        <p className="w-full h-[0.1px] mt-2 bg-gray-600"></p>

                        <div className="flex items-center gap-3 mt-3 ms-2 ">
                          <p className="leading-7">I'm offering this well-maintained army bicycle in excellent condition. The bike rides like a dream and is in superb mechanical condition. All three brakes work perfectly. The tires are soft and free of cracks, having been recently replaced. The bike comes with its original leather frame bag and includes the complete original tool kit, which is very rare. The key for the rear wheel lock/U-lock is also included.
Overall, a truly magnificent piece, rarely found these days.</p>
                        </div>

                        
                    </div>
     
                   <div className="mt-6 bg-white min:fh-250 p-4 rounded-2xl ">
                        <p className="font-bold text-[18px] w-150 ms-2 ">Write a message</p>

                        <p className="w-full h-[0.1px] mt-2 bg-gray-600"></p>

                        <div className="flex items-center gap-3 mt-3  ">
                         <button className="bg-web-navbar p-2 rounded-2xl text-white mt-2">
                          <p>Send a message</p>
                         </button>
                        </div>

                        
                    </div>

                   
      
       </div>

                
       </section>



           <section className="col-span-4 ms-4 me-2 h-screen space-y-2 font-semi-bold relative">
                        <div className=" p-1 flex align-items-center ms-5 ">
                            <button className="bg-web-navbar h-10 w-93 rounded-2xl text-[12px] text-white hover:bg-white hover:text-black " > Write a message</button>
                        </div>

                         <div className="  p-1 flex align-items-center ms-5  ">
                            <button className="bg-white border border-gray-400  h-10 w-93 rounded-2xl text-[12px] text-black hover:bg-white hover:text-web-navbar " > Add this to watch list</button>
                        </div>

                           <div className=" p-1 flex align-items-center ms-5  ">
                            <button className="bg-white border border-gray-400 h-10 w-93 rounded-2xl text-[12px] text-black hover:bg-white hover:text-web-navbar " > Share this ads</button>
                        </div>


                        <div className="bg-white shadow-f-cardM rounded p-2 w-[80%] flex ms-8 mt-[6%] min:h-[300px] gap-2 relative">
                            <div className="bg-gray-300 w-10 h-10  flex justify-center place-items-center  rounded-full">
                                <p className="font-bold">A</p>
                            </div>

                            <div className="flex flex-col gap-1">
                            <p className="text-web-navbar font-bold text-[14px]">Agwu joe</p>
                            
                             <div className="bg-gray-300 p-[6px] rounded-2xl mb-1 flex justify-center place-items-center gap-1">
                                <div className="fh-38 fw-10 relative ">
                           <Image
                             alt="Real estate"
                             src={"/satisfaction.svg"}
                             fill
                             className=" p-1 rounded object-cover"
                           />
                         </div>
                         
                                <p className="text-web-navbar font-bold text-[12px]">Top satisfaction</p>
                             </div>

                               <div className="bg-gray-300 p-[6px] rounded-2xl mb-1 flex justify-center place-items-center gap-1">
                                <div className="fh-38 fw-10 relative ">
                           <Image
                             alt="Real estate"
                             src={"/friendly_icon.svg"}
                             fill
                             className=" p-1 rounded object-cover"
                           />
                         </div>
                                <p className="text-web-navbar font-bold text-[12px]">Very Friendly</p>
                             </div>

                      
                         <div className="bg-gray-300 p-[6px] rounded-2xl mb-1 flex justify-center place-items-center gap-1">
                                <div className="fh-38 fw-10 relative ">
                           <Image
                             alt="Real estate"
                             src={"/reliable_icon.svg"}
                             fill
                             className=" p-1 rounded object-cover"
                           />
                         </div>
                                <p className="text-web-navbar font-bold text-[12px]">Very Reliable</p>
                             </div>

                             <div className="flex place-items-center gap-1">
                                   <div className="fh-38 fw-10 relative ">
                           <Image
                             alt="Real estate"
                             src={"/private_account.svg"}
                             fill
                             className=" p-1 rounded object-cover"
                           />
                         </div>
                                <p className="text-[14px]">Private user</p>
                             </div>

                                   <div className="flex place-items-center gap-1 mb-12">
                                   <div className="fh-38 fw-10 relative ">
                           <Image
                             alt="Real estate"
                             src={"/bookmark.svg"}
                             fill
                             className=" p-1 rounded object-cover"
                           />
                         </div>
                                <p className="text-[14px]">Active since april 30, 2024</p>
                             </div>

                               <div className="absolute bottom-2 right-2 border ps-2 pe-2 pt-1 pb-1 rounded-full flex gap-0 hover:text-white cursor-pointer hover:bg-web-navbar">
                            <div className="fh-30 fw-10 relative ">
                           <Image
                             alt="Real estate"
                             src={"/person_acccount_build.svg"}
                             fill
                             className=" p-1 rounded object-cover"
                           />
                         </div>
                               
                                <p className="text-[14px] ">Follow</p>
                             </div>
                            </div>
                   
                        </div>

                         <div className="bg-white shadow-f-cardM p-2 w-[80%] flex ms-10 mt-[6%] min:h-[300px] gap-2  place-items-center align-items-center relative rounded">
                            <p className="">Ad ID</p>
                            <p className="ms-35">dh939849302-209483</p>
                         </div>
            </section>

           </div>



          <div className=" mt-10 min:h-100 p-10">
           <p className="font-bold text-[20px] mb-3">Other ads from this seller</p>

           <div className="">

                    {moreData.length > 0 &&
                          moreData.slice(0,2).map((data:{ urls: { regular: string } }, index: number) => (
                            <div
                             
                              key={index}
                              className="bg-white fh-250 w-full rounded-2xl mb-5 p-6 flex"
                            >
                              <div className="relative fh-200 w-[30%]">
                                <Image alt="vibe" fill src={`${data.urls.regular}`} className="rounded" />
                              </div>
            
                              <div className="ms-5">
                                {/** Location */}
                                <p className="text-sm">sdjdjj</p>
            
                                <div>
                                  <p className="font-bold text-[16px] text-ellipsis text-wrap overflow-hidden fw-150">
                                    Modern 3-room apartment with large balcony in Malchin
                                    hddhdhh dkdk
                                  </p>
            
                                  <p className="text-sm font-extralight">
                                    {`The renovation work on the "Weitblick" project is
                                    currently in full swing. Since October 1st, 2025`}
                                  </p>
            
                                  <p className="mt-1">64 m² · 3 Zi.</p>
                                  <p className="text-green-800 font-bold text-[16px] mt-3">
                                    €495
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}

           </div>

          
         </div>


          <div className=" min:h-100 ps-10 pe-10">
           <p className="font-bold text-[20px] mb-3">You may also like this</p>

           <div className="">

                    {moreData.length > 0 &&
                          moreData.slice(0,2).map((data:{ urls: { regular: string } }, index: number) => (
                            <div
                             
                              key={index}
                              className="bg-white fh-250 w-full rounded-2xl mb-5 p-6 flex"
                            >
                              <div className="relative fh-200 w-[30%]">
                                <Image alt="vibe" fill src={`${data.urls.regular}`} className="rounded" />
                              </div>
            
                              <div className="ms-5">
                                {/** Location */}
                                <p className="text-sm">sdjdjj</p>
            
                                <div>
                                  <p className="font-bold text-[16px] text-ellipsis text-wrap overflow-hidden fw-150">
                                    Modern 3-room apartment with large balcony in Malchin
                                    hddhdhh dkdk
                                  </p>
            
                                  <p className="text-sm font-extralight">
                                    {`The renovation work on the "Weitblick" project is
                                    currently in full swing. Since October 1st, 2025`}
                                  </p>
            
                                  <p className="mt-1">64 m² · 3 Zi.</p>
                                  <p className="text-green-800 font-bold text-[16px] mt-3">
                                    €495
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}

           </div>

          
         </div>

  
           <Footer mode="desktop" />

            </main>
       
           
        </div>
}


export default ProductOverview