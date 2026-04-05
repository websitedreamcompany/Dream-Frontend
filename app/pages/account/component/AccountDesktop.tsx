
'use client'

import { LoaderIcon } from "lucide-react";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState, useCallback } from "react";
import Footer from "../../landingPage/component/Footer";

const inter = Inter({
  display: "swap",
  weight: "600",
});


const AccountDesktop = () => {

      const [dropDownCat, setDropDownCat] = useState(false);
       const [toggleRegOrLoginAccount,setToggleRegOrLoginAccount] = useState(false)

 const handleCategoryDropDownMenuFired = useCallback(() => {
    setDropDownCat(!dropDownCat);
  }, [dropDownCat]);

  const handleLoginClicked = useCallback(()=>{
    setToggleRegOrLoginAccount(false)
  },[])


   const handleRegisterClicked = useCallback(()=>{
    setToggleRegOrLoginAccount(true)
  },[])


    return <div className="bg-white h-dvh">
      {/**Top nav bar */}
      <nav
            className={`${inter.className} text-fh-8 w-screen  fh-95  shadow-f-bottom flex flex-row place-items-center 
                       
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
    
              <a href="/pages/projects" className="text-white p-1.5">
                Projects
              </a>
    
              <a href="/pages/shop" className="text-white  p-1.5">
                Shops
              </a>
    
             
            </div>
          </nav>
    
        <div className="bg-web-navbar fh-100 w-full mt-2 flex gap-2  place-items-center text-white flex-cols relative ">
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

<div className="overflow-y-scroll h-full">


    {
        !toggleRegOrLoginAccount ?    <div className=" h-full  mt-15  justify-center place-items-center ">
       
        <div className="min:fh-300 fw-100 rounded-2xl bg-white pt-4 shadow-2xl drop-shadow-neutral-900 shadow-black  ">
          <div className="flex justify-center place-items-center">
            <Image
              alt="image"
              src={"/dream_icon_d.png"}
              width={40}
              height={40}
            />
            <p className="font-bold mt-3">ream</p>
          </div>

          <div className=" p-8 gap-8 flex flex-col">
            <input
              type="email"
              className="border w-full p-1 rounded"
              placeholder="email"
            />

            <input
              type="password"
              className="border w-full p-1 rounded"
              placeholder="password"
            />

            <p className="mt-2">
              Forgot password?{" "}
              <Link href="/reset-password" className="text-red-400 hover:underline">
                Reset password
              </Link>
            </p>
          </div>

          <div className="ps-5 pe-5 pb-5">
            <button className="bg-red-700 w-full text-white p-2 rounded-2xl">
              Login
            </button>

            <p className="text-sm m-2 pt-2">
              Don't have account yet?{" "}
              <button onClick={handleRegisterClicked} className="text-red-600 hover:underline">
                Register
              </button>
            </p>
          </div>
        </div>
      </div>:     
      
      <div className={` w-[40%]  place-self-center  h-full  pt-10  justify-center place-items-center overflow-y-scroll mb-60`}>
             {/**Register */}
              <div className="min:fh-300  w-[90%] rounded-2xl bg-white pt-4 shadow-2xl drop-shadow-neutral-900 shadow-black  ">
                <div className="flex justify-center place-items-center">
                  <Image
                    alt="image"
                    src={"/dream_icon_d.png"}
                    width={40}
                    height={40}
                  />
                  <p className="font-bold mt-3">ream</p>
                </div>
      
      
      
                <div className="mt-6">
                  <p className="text-[14px] font-bold text-center mt-2">How would you like to use classified ads?</p>
                 
                  <div className="flex gap-6 mt-5 justify-center place-items-center ">
      
                      <div className="flex gap-2 items-center justify-center border border-[#4A4A4A] p-2 rounded w-30">
                     <input type="checkbox" />
                     <p>Private</p>
                     </div>
      
                       <div className="flex gap-2 items-center justify-center border-[#4A4A4A] p-2 rounded border w-30">
                     <input type="checkbox" />
                     <p>Public</p>
                     </div>
      
                      </div>
                  </div>
      
                <div className=" p-8 gap-8 flex flex-col">
                  <input
                    type="email"
                    className="border w-full p-1 rounded"
                    placeholder="email"
                  />
      
                  <input
                    type="password"
                    className="border w-full p-1 rounded"
                    placeholder="password"
                  />
      
              <div className="flex gap-3">
                  <input type="checkbox" className="place-self-start mt-1" />
                  <p>
                      Yes, I look forward to receiving regular updates via email from the company group - you can unsubscribe at any time.
                  </p>
              </div>
                </div>
      
                <div className="ps-5 pe-5 pb-5">
                  <button className="bg-red-700 w-full text-white p-2 rounded-2xl hover:bg-white hover:text-red-700 border border-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50 active:bg-web-navbar">
                   Register for Free
                  </button>
      
                    <p className="text-sm m-2 pt-2">
                    Already have account ?{" "}
                    <button  onClick={handleLoginClicked} className="text-red-600 hover:underline">
                      Login
                    </button>
                  </p>
      
                  <p className="text-sm m-2 pt-2">
                   <Link href="/terms" className=" text-web-navbar hover:underline">
                      Our terms of use apply
                    </Link>
                    . You can find information about how we process your data in our{" "}
                    <Link href="/privacy" className="text-web-navbar hover:underline">
                      privacy policy
                    </Link>
                    .
                  </p>
                </div>
      
                <LoaderIcon className="animate-spin place-self-center  " size={40} color="#4c1d60"/>
              </div>
      
      
         
      
            </div>

    }

    

    

            <Footer mode="desktop" />

    </div>

   
    </div>

}


export default AccountDesktop;