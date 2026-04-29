
'use client'

import { Inter, Itim } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState, useCallback } from "react";
import Footer from "../../landingPage/component/Footer";
import {LoaderIcon} from 'lucide-react'
import { useAccountApi } from "@/api/useAccountApi";
import useDreamTradingStore from "@/store/store";
import { useRouter } from "next/navigation";

const inter = Inter({
  display: "swap",
  weight: "600",
});

const itim = Itim({
  display: "swap",
    weight: "400",
});

const AccountMobile = () => {
      const  { setUSerAccountData,userData} = useDreamTradingStore(state=>state)
     const [adPernalization,setupAdPersonalization] = useState('' as '' | 'Private' | 'Commercial')
      const [dropDownCat, setDropDownCat] = useState(false);
      const [toggleRegOrLoginAccount,setToggleRegOrLoginAccount] = useState(false)

       const {createAccount, loginAccount} = useAccountApi()
       const [error,setError] = useState(false)
       const [loading,setLoading] = useState(false)
       const [errorMessage,setErrorMessage] = useState("")
         const [crateAccountData, setCreateAccountData] = useState({
        email:"",
        password:"",
        adClassification:'Commercial' as  'Private' | 'Commercial',
        subscribeToNewsLetter:false

       })
         const  router = useRouter()

 const handleCategoryDropDownMenuFired = useCallback(() => {
    setDropDownCat(!dropDownCat);
  }, [dropDownCat]); 

  const handleLoginClicked = useCallback(()=>{
    setToggleRegOrLoginAccount(false)
  },[])


   const handleRegisterClicked = useCallback(()=>{
    setToggleRegOrLoginAccount(true)
  },[])


  
  const handleEmailEntered = useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
     if(error) setError(false)
    setCreateAccountData((prev)=>({
        ...prev,
        email:e.target.value
    }))
},[error])

const handlePasswordEntered = useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
    if(error) setError(false)
    setCreateAccountData((prev)=>({
        ...prev,
        password:e.target.value
    }))
},[error])




  const hanldeAdPersonalization = useCallback((type:''|'Private'|'Commercial')=>{
    setupAdPersonalization(type)
    setCreateAccountData({...crateAccountData,adClassification:type as 'Private'|'Commercial'})
  },[crateAccountData])

  const handleNewsletterSubscription = useCallback(()=>{
 setCreateAccountData({...crateAccountData,subscribeToNewsLetter:!crateAccountData.subscribeToNewsLetter})
  },[crateAccountData])


  const handleCreateAccount = useCallback( async()=>{
    setLoading(true)
 setErrorMessage("")
    try{
       

    const result = await createAccount(crateAccountData.email, crateAccountData.password, crateAccountData.adClassification, crateAccountData.subscribeToNewsLetter)
     
    if(!result.successful){
      
        setError(true)
        setErrorMessage(result.error? result.error: result.message|| "Failed to create account. Please check your input and try again.")
         setLoading(false)
        
         return
     }
        
   setLoading(false)
      setUSerAccountData(result.data)
      router.push('/')
       
    } catch(error:unknown){
        setError(true)
        setErrorMessage("Failed to create account. Please check your input and try again.".concat((error as Error).message))
        setLoading(false)
    }
  

},[crateAccountData,createAccount,setUSerAccountData,router])

const  handleLoginAccount = useCallback(async()=>{

     setLoading(true)
 setErrorMessage("")
    try {
        const  result  = await  loginAccount(crateAccountData.email,crateAccountData.password)
         if(!result.successful){
      
        setError(true)
        setErrorMessage(result.error? result.error: result.message|| "Failed to create account. Please check your input and try again.")
         setLoading(false)
        
         return
     }
        
     setLoading(false)
      setUSerAccountData(result.data)
      router.push('/')
        
    } catch (error) {
         setError(true)
        setErrorMessage("Failed to create account. Please check your input and try again.".concat((error as Error).message))
        setLoading(false) 
    }

},[loginAccount,crateAccountData,setUSerAccountData,router])
  

    return <div className={`${itim.className} bg-white h-dvh overflow-hidden`}>
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
    
      

         <div className="bg-web-navbar fh-100 w-full mt-3 flex gap-2  place-items-center text-white flex-cols relative ">
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

     {/**Login */}
   {!toggleRegOrLoginAccount ?   <div className={` h-full  pt-10  justify-center place-items-center overflow-y-scroll mb-60`}>
       
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

          <div className=" p-8 gap-8 flex flex-col">
            <input
            onChange={handleEmailEntered}
              type="email"
              className="border w-full p-1 rounded"
              placeholder="email"
            />

            <input
            onChange={handlePasswordEntered}
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
            <button className="bg-red-700 w-full text-white p-2 rounded-2xl" onClick={handleLoginAccount}>
              Login
            </button>

            <p className="text-sm m-2 pt-2">
              Don't have account yet?{" "}
              <button onClick={handleRegisterClicked}  className="text-red-600 hover:underline">
                Register
              </button>
            </p>
          </div>

           {error && <p className="text-center text-[12px] text-red-500">{errorMessage}</p>}
      
      {loading && <LoaderIcon className="animate-spin place-self-center  " size={40} color="#4c1d60"/>
           }
        </div>


          <div className="mt-10 w-screen h-210">

             <Footer mode="mobile" />

            </div>

      </div>:
      <div className={` h-full  pt-10  justify-center place-items-center overflow-y-scroll mb-60`}>
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
               <input checked={adPernalization === 'Private'} type="checkbox" onChange={()=>hanldeAdPersonalization('Private')} />
               <p>Private</p>
               </div>

                 <div className="flex gap-2 items-center justify-center border-[#4A4A4A] p-2 rounded border w-30">
               <input checked={adPernalization === 'Commercial'} type="checkbox" onChange={()=>hanldeAdPersonalization('Commercial')} />
               <p>Commercial</p>
               </div>

                </div>
            </div>

          <div className=" p-8 gap-8 flex flex-col">
            <input
            onChange={handleEmailEntered}
              type="email"
              className="border w-full p-1 rounded"
              placeholder="email"
            />

            <input
            onChange={handlePasswordEntered}
              type="password"
              className="border w-full p-1 rounded"
              placeholder="password"
            />

        <div className="flex gap-3">
            <input type="checkbox" onClick={handleNewsletterSubscription} className="place-self-start mt-1" />
            <p className="text-[12px]">
                Yes, I look forward to receiving regular updates via email from the company group - you can unsubscribe at any time.
            </p>
        </div>
          </div>

          <div className="ps-5 pe-5 pb-5">
            <button className="bg-red-700 w-full text-white p-2 rounded-2xl hover:bg-white hover:text-red-700 border border-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50 active:bg-web-navbar" onClick={handleCreateAccount}>
             Register for Free
            </button>

              <p className="text-sm m-2 pt-2">
              Already have account ?{" "}
              <button onClick={handleLoginClicked} className="text-red-600 hover:underline">
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

            {error && <p className="text-center text-[12px] text-red-500">{errorMessage}</p>}
      
      {loading && <LoaderIcon className="animate-spin place-self-center  " size={40} color="#4c1d60"/>
           }
        </div>


          <div className="mt-10 w-screen h-210">

             <Footer mode="mobile" />

            </div>

      </div>
      
      }




     
    </div>

}


export default AccountMobile;