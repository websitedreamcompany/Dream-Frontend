import Image from "next/image";


const LandingPage = () =>{
  return (
    
    <main className="overflow-hidden" >
      
      <nav className="w-screen fh-60 shadow-nav shadow-f-bottom flex flex-row place-items-center 
       
      ">
        
        <div className="relative w-[calc(48*var(--spacing-fw))] h-[calc(48*var(--spacing-fw))] ms-fw-16 ">
        <Image
          src="/logo.svg" 
          alt="Dream Eco Logo" 
          fill 
          
          className="object-contain" 
        />
      </div>
      
      <div className="w-screen place-items-end pe-fw-35  space-fy-8">
        
        <p className="fh-2 fw-15 bg-white me-fw-10 rounded-2xl"></p>
                <p className="fh-2 fw-25 bg-white rounded-2xl"></p>
                
                      <p className="fh-2 fw-15 bg-white ms-fw-10 rounded-2xl"></p>  
      
        
      </div>
      
      

      </nav>
      
      <h1 className=" font-itim font-extrabold  m-fw-40 fw-259 fh-49 justify-self-center text-white text-fw-26">Building Digital Inovation & Modern Control</h1>
      
      <div className="flex mt-fw-80 justify-evenly">
        
        <button className=" font-aclonica text-fw-18 font-extrabold bg-btn-bg-red fw-155 fh-52 rounded-2xl text-white">Explore Project</button>
        
            
        <button className="font-aclonica text-fw-18 font-extrabold bg-btn-bg-red fw-155 fh-52 rounded-2xl text-white">Visit Shop</button>
        
      </div>
      
      <div className="relative w-full ">
        
   <div className="relative w-screen h-[calc(270*var(--spacing-fw))] ms-fw-16 pe-fw-10 ">
        <Image
          src="/landing_img_1.svg" 
          alt="Dream Eco Logo" 
          fill 
          
          className="object-contain" 
        />

      </div>
      
         <div className="absolute bottom-[-8%] w-screen h-[calc(37*var(--spacing-fw))] ms-fw-16 ">
        <Image
          src="/landing_img_2.svg" 
          alt="Dream Eco Logo" 
          fill 
          
          className="object-contain" 
        />

      </div>
      
        
      </div>
           
      
      
      <p>hello</p>
    </main>
    
    )
}


export default LandingPage