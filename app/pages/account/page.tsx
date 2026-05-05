
'use client'

import { LoaderIcon } from "lucide-react";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState, useCallback } from "react";
import Footer from "../../../component/ui/Footer";
import useAccountApi from "@/api/useAccountApi";
import useDreamTradingStore from "@/store/store";
import { useRouter } from "next/navigation";
import { FaAngleDown } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { MdAddChart } from "react-icons/md";
import { motion } from "framer-motion";
import TopNavigationBar from "@/component/ui/TopNavigationBar";

const inter = Inter({
  display: "swap",
  weight: "600",
});


const AccountDesktop = () => {
    
    const  { setUSerAccountData,userData} = useDreamTradingStore(state=>state)
    
 const [adPernalization,setupAdPersonalization] = useState('' as '' | 'Private' | 'Commercial')

 const {createAccount, loginAccount} = useAccountApi()
 const [error,setError] = useState(false)
 const [loading,setLoading] = useState(false)
 const [errorMessage,setErrorMessage] = useState("")
 const [dropDownCat, setDropDownCat] = useState(false);
  const [toggleRegOrLoginAccount,setToggleRegOrLoginAccount] = useState(false)
  const  router = useRouter()

  const [crateAccountData, setCreateAccountData] = useState({
        email:"",
        password:"",
        adClassification:'Commercial' as  'Private' | 'Commercial',
        subscribeToNewsLetter:false

       })



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



 const handleCategoryDropDownMenuFired = useCallback(() => {
    setDropDownCat(!dropDownCat);
  }, [dropDownCat]);


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


    return <div className="bg-white h-screen overflow-y-scroll ">
      {/**Top nav bar */}
   <TopNavigationBar/>


   <div className="bg-web-navbar w-full flex items-center justify-center mt-1 py-4">
    
      <div className="max-w-6xl w-full mx-auto h-auto flex flex-col md:flex-row items-center justify-between px-5 gap-6">
        
        <div className="w-full lg:flex-1">
          <div className="flex flex-col md:flex-row bg-white min-h-12 md:h-12 rounded-2xl md:rounded-full shadow-sm border border-slate-200 overflow-hidden p-2 md:p-0">
            
            <div className="flex flex-1 items-center px-4 min-w-37.5">
              <IoMdSearch className="text-slate-400 shrink-0" size={20} />
              <input 
                placeholder="What are you looking for..." 
                className="ml-3 w-full text-[13px] outline-none bg-transparent" 
              />
            </div>

            <div className="hidden md:block h-6 w-px bg-slate-200 self-center"></div>

            <div className="flex items-center justify-between px-4 md:px-6 py-2 md:py-0 cursor-pointer hover:bg-slate-50">
              <p className="text-[13px] whitespace-nowrap">All categories</p>
              <FaAngleDown className="ml-2 text-slate-400" size={14} />
            </div>

            <div className="hidden md:block h-6 w-px bg-slate-200 self-center"></div>

            <div className="flex items-center px-4 md:px-6 py-2 md:py-0">
              <p className="text-[13px] whitespace-nowrap">Deutschland</p>
            </div>

            <div className="hidden md:block h-6 w-px bg-slate-200 self-center"></div>

            <div className="flex items-center justify-between px-4 md:pl-6 md:pr-1 py-2 md:py-0 gap-4">
              <div className="flex items-center cursor-pointer">
                <p className="text-[13px] whitespace-nowrap">Entire town</p>
                <FaAngleDown className="ml-2 text-slate-400" size={14} />
              </div>
              
              <button className="bg-blue-600 text-white px-6 h-10 rounded-xl md:rounded-full text-[13px] font-bold hover:bg-blue-700 transition w-full md:w-auto">
                Find
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8 items-center shrink-0">
          <div className="flex flex-col items-center cursor-pointer group">
            <MdAddChart className="text-slate-700 group-hover:text-blue-600 transition" size={20} />
            <p className="text-[10px] uppercase font-bold mt-1 tracking-wide">Advertise</p>
          </div>

          <div className="flex flex-col items-center cursor-pointer group">
            <IoPerson className="text-slate-700 group-hover:text-blue-600 transition" size={20} />
            <p className="text-[10px] uppercase font-bold mt-1 tracking-wide">Mine</p>
          </div>
        </div>

      </div>
    </div>
 




 <div className="h-screen w-full bg-slate-50 overflow-y-auto px-4 py-10">
  <div className="max-w-6xl mx-auto flex  justify-center items-start min-h-full">
    
    {!toggleRegOrLoginAccount ? (
      /* LOGIN CARD */
      <div className="w-full max-w-100 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="p-8">
          <div className="flex justify-center items-center mb-8">
            <Image alt="logo" src="/dream_icon_d.png" width={40} height={40} />
            <p className="font-bold text-xl ml-1 mt-1">ream</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">Email</label>
              <input
                onChange={handleEmailEntered}
                type="email"
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                placeholder="name@company.com"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">Password</label>
              <input
                onChange={handlePasswordEntered}
                type="password"
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                placeholder="••••••••"
              />
            </div>

            <div className="text-right">
              <Link href="/reset-password"  className="text-sm text-red-500 hover:underline font-medium">
                Forgot password?
              </Link>
            </div>

            <button 
              onClick={handleLoginAccount}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-red-200 transition-all active:scale-[0.98]"
            >
              Login
            </button>

            <p className="text-center text-sm text-slate-600">
              Don't have an account yet?{" "}
              <button onClick={handleRegisterClicked} className="text-red-600 font-bold hover:underline">
                Register
              </button>
            </p>
          </div>

          {error && <p className="mt-4 text-center text-xs text-red-500 font-medium">{errorMessage}</p>}
          {loading && <LoaderIcon className="mt-4 animate-spin mx-auto" size={32} color="#dc2626"/>}
        </div>
      </div>
    ) : (
      /* REGISTER CARD */
      <div className="w-full max-w-125 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden mb-10">
        <div className="p-8">
          <div className="flex justify-center items-center mb-8">
            <Image alt="logo" src="/dream_icon_d.png" width={40} height={40} />
            <p className="font-bold text-xl ml-1 mt-1">ream</p>
          </div>

          <div className="mb-8 text-center">
            <p className="text-sm font-bold text-slate-700 mb-4">How would you like to use classified ads?</p>
            <div className="flex gap-4">
              <label className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-all ${adPernalization === 'Private' ? 'border-red-500 bg-red-50 text-red-700' : 'border-slate-100 text-slate-500'}`}>
                <input type="radio" className="hidden" checked={adPernalization === 'Private'} onChange={() => hanldeAdPersonalization('Private')} />
                <span className="text-sm font-bold">Private</span>
              </label>
              <label className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-all ${adPernalization === 'Commercial' ? 'border-red-500 bg-red-50 text-red-700' : 'border-slate-100 text-slate-500'}`}>
                <input type="radio" className="hidden" checked={adPernalization === 'Commercial'} onChange={() => hanldeAdPersonalization('Commercial')} />
                <span className="text-sm font-bold">Public</span>
              </label>
            </div>
          </div>

          <div className="space-y-5">
            <input
              onChange={handleEmailEntered}
              type="email"
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-red-500/20"
              placeholder="Email address"
            />

            <input
              onChange={handlePasswordEntered}
              type="password"
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-red-500/20"
              placeholder="Create password"
            />

            <div className="flex gap-3 items-start p-1">
              <input type="checkbox" className="mt-1 accent-red-600" onChange={handleNewsletterSubscription} />
              <p className="text-[11px] leading-relaxed text-slate-500">
                Yes, I look forward to receiving regular updates via email. You can unsubscribe at any time.
              </p>
            </div>

            <button 
              onClick={handleCreateAccount}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-red-200 transition-all active:scale-[0.98]"
            >
              Register for Free
            </button>

            <p className="text-center text-sm text-slate-600">
              Already have an account?{" "}
              <button onClick={handleLoginClicked} className="text-red-600 font-bold hover:underline">
                Login
              </button>
            </p>

            <p className="text-[11px] text-center text-slate-400 leading-relaxed px-4">
              Our <Link href="/terms" className="text-red-400 underline">terms of use</Link> apply. 
              View our <Link href="/privacy" className="text-red-400 underline">privacy policy</Link>.
            </p>
          </div>

          {error && <p className="mt-4 text-center text-xs text-red-500 font-medium">{errorMessage}</p>}
          {loading && <LoaderIcon className="mt-4 animate-spin mx-auto" size={32} color="#dc2626"/>}
        </div>
      </div>
    )}
  </div>


</div>

  <Footer/>

   
    </div>

}


export default AccountDesktop;