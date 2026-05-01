
'use client'
import { Inter, Itim } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { GrApps } from "react-icons/gr";
import Footer from "../../landingPage/component/Footer";
import { IoMdSearch } from "react-icons/io";
import { useCallback, useEffect, useState } from "react";

const inter = Inter({
  display: "swap",
  weight: "600",
});

const itim = Itim({
  weight:'400'

});
const ApplicationDesktop = () => {

 const [selectedData,setSelectedData] = useState(0)
 const [categorySelected,setCategorySelected] = useState('All')
 const [cacheCardDetails,setCacheCardDetails] = useState(  [
  {
    "name": "Social Media App",
    "description": "Platforms for networking, content sharing, and staying connected with friends and global communities.",
    "rating": 5
  },
  {
    "name": "E-commerce App",
    "description": "Digital marketplaces for buying and selling products with integrated secure payment gateways.",
    "rating": 5
  },
  {
    "name": "Finance App",
    "description": "Tools for personal banking, stock trading, cryptocurrency management, and budget tracking.",
    "rating": 4
  },
  {
    "name": "Education App",
    "description": "Interactive platforms for language learning, online courses, and academic skill development.",
    "rating": 4
  },
  {
    "name": "Entertainment App",
    "description": "Streaming services for high-definition video content, movies, and original series.",
    "rating": 5
  },
  {
    "name": "Music App",
    "description": "Extensive libraries for music streaming, curated playlists, and podcast discovery.",
    "rating": 5
  },
  {
    "name": "Health & Fitness App",
    "description": "Trackers for physical activities, calorie counting, and guided workout routines.",
    "rating": 4
  },
  {
    "name": "Food Delivery App",
    "description": "On-demand services for ordering meals from local restaurants and grocery delivery.",
    "rating": 5
  },
  {
    "name": "Travel App",
    "description": "Booking systems for flights, hotels, car rentals, and vacation experiences.",
    "rating": 4
  },
  {
    "name": "Navigation App",
    "description": "Real-time GPS mapping, traffic updates, and public transit route planning.",
    "rating": 5
  },
  {
    "name": "Communication App",
    "description": "Instant messaging and VoIP services for voice and video calling worldwide.",
    "rating": 5
  },
  {
    "name": "Productivity App",
    "description": "Tools for task management, digital note-taking, and professional workflow optimization.",
    "rating": 4
  },
  {
    "name": "News App",
    "description": "Aggregators for breaking news headlines, local reports, and global editorial content.",
    "rating": 3
  },
  {
    "name": "Gaming App",
    "description": "Mobile games ranging from hyper-casual puzzles to high-performance multiplayer RPGs.",
    "rating": 4
  },
  {
    "name": "Weather App",
    "description": "Detailed meteorological forecasts, radar maps, and severe weather alert systems.",
    "rating": 4
  },
  {
    "name": "Photo & Video App",
    "description": "Creative suites for image filtering, video editing, and digital art creation.",
    "rating": 5
  },
  {
    "name": "Lifestyle App",
    "description": "Apps focused on home decor, fashion inspiration, gardening, and personal hobbies.",
    "rating": 3
  },
  {
    "name": "Dating App",
    "description": "Social discovery platforms for meeting new people and finding romantic partners.",
    "rating": 3
  },
  {
    "name": "Real Estate App",
    "description": "Property search engines for buying, selling, or renting homes and apartments.",
    "rating": 4
  },
  {
    "name": "Business App",
    "description": "Enterprise solutions for CRM, project tracking, and corporate communication.",
    "rating": 4
  },
  {
    "name": "Utility App",
    "description": "Functional tools like calculators, unit converters, and QR code scanners.",
    "rating": 3
  },
  {
    "name": "Smart Home App",
    "description": "Control centers for managing IoT devices, security cameras, and smart lighting.",
    "rating": 4
  },
  {
    "name": "Mental Health App",
    "description": "Meditation guides, sleep aids, and therapy platforms for emotional well-being.",
    "rating": 5
  },
  {
    "name": "Parenting App",
    "description": "Trackers for baby milestones, pregnancy health, and advice for new parents.",
    "rating": 4
  },
  {
    "name": "Language App",
    "description": "Specialized tools for vocabulary building, pronunciation, and language immersion.",
    "rating": 5
  },
  {
    "name": "Books & Reference App",
    "description": "Digital libraries for e-books, audiobooks, and comprehensive encyclopedia access.",
    "rating": 4
  },
  {
    "name": "Security App",
    "description": "Antivirus software, VPN services, and password managers for digital protection.",
    "rating": 5
  },
  {
    "name": "Sports App",
    "description": "Live score updates, sports news, and fantasy league management tools.",
    "rating": 4
  },
  {
    "name": "Shopping List App",
    "description": "Shared organizational lists for groceries, holiday gifts, and household chores.",
    "rating": 3
  },
  {
    "name": "Recipe App",
    "description": "Collections of culinary instructions, meal planners, and dietary filtered recipes.",
    "rating": 4
  },
  {
    "name": "Job Search App",
    "description": "Career portals for finding job openings, uploading resumes, and networking.",
    "rating": 4
  },
  {
    "name": "Carpooling App",
    "description": "Ridesharing services connecting drivers with passengers for cost-effective travel.",
    "rating": 4
  },
  {
    "name": "Cryptocurrency App",
    "description": "Wallets and exchanges for trading Bitcoin, Ethereum, and other digital assets.",
    "rating": 4
  },
  {
    "name": "Scanning App",
    "description": "Mobile document scanners that convert physical paperwork into high-quality PDFs.",
    "rating": 4
  },
  {
    "name": "Coupon App",
    "description": "Aggregators for discounts, promo codes, and cashback offers for online retailers.",
    "rating": 3
  },
  {
    "name": "Medication Tracker App",
    "description": "Reminder systems for pill schedules, dosage tracking, and pharmacy refills.",
    "rating": 5
  },
  {
    "name": "Event Planning App",
    "description": "Tools for organizing parties, weddings, or corporate events with RSVP tracking.",
    "rating": 4
  },
  {
    "name": "Pet Care App",
    "description": "Management for pet health records, vet appointments, and local pet services.",
    "rating": 3
  },
  {
    "name": "Public Speaking App",
    "description": "Training tools for speech writing, pacing, and overcoming stage fright.",
    "rating": 4
  },
  {
    "name": "Cloud Storage App",
    "description": "Secure servers for backing up photos, videos, and large work documents.",
    "rating": 5
  },
  {
    "name": "Language Translation App",
    "description": "Real-time text and voice translation for international communication and travel.",
    "rating": 5
  },
  {
    "name": "VPN App",
    "description": "Services providing private tunnels for anonymous browsing and data encryption.",
    "rating": 4
  },
  {
    "name": "Email Client App",
    "description": "Centralized hubs for managing multiple email accounts and professional correspondence.",
    "rating": 5
  },
  {
    "name": "Wallet App",
    "description": "Digital storage for credit cards, boarding passes, and membership rewards.",
    "rating": 5
  },
  {
    "name": "Mind Mapping App",
    "description": "Visual brainstorming tools for organizing thoughts, ideas, and project plans.",
    "rating": 3
  },
  {
    "name": "Astronomy App",
    "description": "AR viewers for identifying stars, planets, and constellations in the night sky.",
    "rating": 5
  },
  {
    "name": "Sustainability App",
    "description": "Guides for eco-friendly living, recycling trackers, and carbon footprint calculators.",
    "rating": 4
  },
  {
    "name": "Art & Design App",
    "description": "Professional drawing tools, typography generators, and color palette creators.",
    "rating": 4
  },
  {
    "name": "Inventory App",
    "description": "Management systems for small business stock tracking and warehouse logistics.",
    "rating": 4
  },
  {
    "name": "Emergency App",
    "description": "Safety tools providing quick access to local authorities and first aid instructions.",
    "rating": 5
  }
])
  const [cardDetails,setCardDetails] = useState(
  [
  {
    "name": "Social Media App",
    "description": "Platforms for networking, content sharing, and staying connected with friends and global communities.",
    "rating": 5
  },
  {
    "name": "E-commerce App",
    "description": "Digital marketplaces for buying and selling products with integrated secure payment gateways.",
    "rating": 5
  },
  {
    "name": "Finance App",
    "description": "Tools for personal banking, stock trading, cryptocurrency management, and budget tracking.",
    "rating": 4
  },
  {
    "name": "Education App",
    "description": "Interactive platforms for language learning, online courses, and academic skill development.",
    "rating": 4
  },
  {
    "name": "Entertainment App",
    "description": "Streaming services for high-definition video content, movies, and original series.",
    "rating": 5
  },
  {
    "name": "Music App",
    "description": "Extensive libraries for music streaming, curated playlists, and podcast discovery.",
    "rating": 5
  },
  {
    "name": "Health & Fitness App",
    "description": "Trackers for physical activities, calorie counting, and guided workout routines.",
    "rating": 4
  },
  {
    "name": "Food Delivery App",
    "description": "On-demand services for ordering meals from local restaurants and grocery delivery.",
    "rating": 5
  },
  {
    "name": "Travel App",
    "description": "Booking systems for flights, hotels, car rentals, and vacation experiences.",
    "rating": 4
  },
  {
    "name": "Navigation App",
    "description": "Real-time GPS mapping, traffic updates, and public transit route planning.",
    "rating": 5
  },
  {
    "name": "Communication App",
    "description": "Instant messaging and VoIP services for voice and video calling worldwide.",
    "rating": 5
  },
  {
    "name": "Productivity App",
    "description": "Tools for task management, digital note-taking, and professional workflow optimization.",
    "rating": 4
  },
  {
    "name": "News App",
    "description": "Aggregators for breaking news headlines, local reports, and global editorial content.",
    "rating": 3
  },
  {
    "name": "Gaming App",
    "description": "Mobile games ranging from hyper-casual puzzles to high-performance multiplayer RPGs.",
    "rating": 4
  },
  {
    "name": "Weather App",
    "description": "Detailed meteorological forecasts, radar maps, and severe weather alert systems.",
    "rating": 4
  },
  {
    "name": "Photo & Video App",
    "description": "Creative suites for image filtering, video editing, and digital art creation.",
    "rating": 5
  },
  {
    "name": "Lifestyle App",
    "description": "Apps focused on home decor, fashion inspiration, gardening, and personal hobbies.",
    "rating": 3
  },
  {
    "name": "Dating App",
    "description": "Social discovery platforms for meeting new people and finding romantic partners.",
    "rating": 3
  },
  {
    "name": "Real Estate App",
    "description": "Property search engines for buying, selling, or renting homes and apartments.",
    "rating": 4
  },
  {
    "name": "Business App",
    "description": "Enterprise solutions for CRM, project tracking, and corporate communication.",
    "rating": 4
  },
  {
    "name": "Utility App",
    "description": "Functional tools like calculators, unit converters, and QR code scanners.",
    "rating": 3
  },
  {
    "name": "Smart Home App",
    "description": "Control centers for managing IoT devices, security cameras, and smart lighting.",
    "rating": 4
  },
  {
    "name": "Mental Health App",
    "description": "Meditation guides, sleep aids, and therapy platforms for emotional well-being.",
    "rating": 5
  },
  {
    "name": "Parenting App",
    "description": "Trackers for baby milestones, pregnancy health, and advice for new parents.",
    "rating": 4
  },
  {
    "name": "Language App",
    "description": "Specialized tools for vocabulary building, pronunciation, and language immersion.",
    "rating": 5
  },
  {
    "name": "Books & Reference App",
    "description": "Digital libraries for e-books, audiobooks, and comprehensive encyclopedia access.",
    "rating": 4
  },
  {
    "name": "Security App",
    "description": "Antivirus software, VPN services, and password managers for digital protection.",
    "rating": 5
  },
  {
    "name": "Sports App",
    "description": "Live score updates, sports news, and fantasy league management tools.",
    "rating": 4
  },
  {
    "name": "Shopping List App",
    "description": "Shared organizational lists for groceries, holiday gifts, and household chores.",
    "rating": 3
  },
  {
    "name": "Recipe App",
    "description": "Collections of culinary instructions, meal planners, and dietary filtered recipes.",
    "rating": 4
  },
  {
    "name": "Job Search App",
    "description": "Career portals for finding job openings, uploading resumes, and networking.",
    "rating": 4
  },
  {
    "name": "Carpooling App",
    "description": "Ridesharing services connecting drivers with passengers for cost-effective travel.",
    "rating": 4
  },
  {
    "name": "Cryptocurrency App",
    "description": "Wallets and exchanges for trading Bitcoin, Ethereum, and other digital assets.",
    "rating": 4
  },
  {
    "name": "Scanning App",
    "description": "Mobile document scanners that convert physical paperwork into high-quality PDFs.",
    "rating": 4
  },
  {
    "name": "Coupon App",
    "description": "Aggregators for discounts, promo codes, and cashback offers for online retailers.",
    "rating": 3
  },
  {
    "name": "Medication Tracker App",
    "description": "Reminder systems for pill schedules, dosage tracking, and pharmacy refills.",
    "rating": 5
  },
  {
    "name": "Event Planning App",
    "description": "Tools for organizing parties, weddings, or corporate events with RSVP tracking.",
    "rating": 4
  },
  {
    "name": "Pet Care App",
    "description": "Management for pet health records, vet appointments, and local pet services.",
    "rating": 3
  },
  {
    "name": "Public Speaking App",
    "description": "Training tools for speech writing, pacing, and overcoming stage fright.",
    "rating": 4
  },
  {
    "name": "Cloud Storage App",
    "description": "Secure servers for backing up photos, videos, and large work documents.",
    "rating": 5
  },
  {
    "name": "Language Translation App",
    "description": "Real-time text and voice translation for international communication and travel.",
    "rating": 5
  },
  {
    "name": "VPN App",
    "description": "Services providing private tunnels for anonymous browsing and data encryption.",
    "rating": 4
  },
  {
    "name": "Email Client App",
    "description": "Centralized hubs for managing multiple email accounts and professional correspondence.",
    "rating": 5
  },
  {
    "name": "Wallet App",
    "description": "Digital storage for credit cards, boarding passes, and membership rewards.",
    "rating": 5
  },
  {
    "name": "Mind Mapping App",
    "description": "Visual brainstorming tools for organizing thoughts, ideas, and project plans.",
    "rating": 3
  },
  {
    "name": "Astronomy App",
    "description": "AR viewers for identifying stars, planets, and constellations in the night sky.",
    "rating": 5
  },
  {
    "name": "Sustainability App",
    "description": "Guides for eco-friendly living, recycling trackers, and carbon footprint calculators.",
    "rating": 4
  },
  {
    "name": "Art & Design App",
    "description": "Professional drawing tools, typography generators, and color palette creators.",
    "rating": 4
  },
  {
    "name": "Inventory App",
    "description": "Management systems for small business stock tracking and warehouse logistics.",
    "rating": 4
  },
  {
    "name": "Emergency App",
    "description": "Safety tools providing quick access to local authorities and first aid instructions.",
    "rating": 5
  }
])


useEffect(()=>{
  if(categorySelected !=="All")
 setCacheCardDetails(cardDetails.filter(item=>item.name===categorySelected))
else  setCacheCardDetails(cardDetails) 
},[categorySelected])


const handleItemSelected = useCallback((index:number)=>{
    setSelectedData(index)

},[])
  
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
        <div className=" h-15 w-full flex   ps-[21%] place-items-center">

                <div className="text-black place-self-start w-150 mt-5 p-1 flex gap-3 border-1 border-[#391452] rounded-2xl  cursor-pointer">
                         <IoMdSearch className="mt-1 " color="black" size={24} />
                        <input  placeholder="what are you looking....." className="text-[12px] mt-1 outline-none w-full" />
                      </div>
        </div>


        <div className="grid  grid-cols-6 h-dvh bg-gray-600 ">
        
        
          <section className={`${itim.className} bg-white  p-5   overflow-y-auto h-300 col-span-1`} style={{scrollbarWidth:'none'}}>
           
            <div className="w-full  border border-gray-300  ">

              <div className={` fh-30 pt-1 w-full flex gap-2 ps-3 place-items-center  ${categorySelected === 'All' ?'text-white bg-[#2E0B80]':'text-black'}  `}>
                <input type="checkbox"  checked={categorySelected ==="All"} onChange={(e)=>{
                    if(e.target.checked)
                    setCategorySelected("All")
                  }} />
                <p className="text-[14px]">All</p>
              </div>

              {cardDetails.map((item,index)=>(
             <div key={index} className={`fh-30 pt-1  mt-3 gap-2   flex flex-col ps-3 ${categorySelected === item.name ?'text-white bg-[#2E0B80]':'text-black'} `}>
                <div className="flex gap-2">
                  <input type="checkbox"  checked={categorySelected === item.name} onChange={(e)=>{
                    if(e.target.checked)
                    setCategorySelected(item.name)
                  }} />
                  <p className="text-[14px]">{item.name}</p>
                </div>

              </div>
              ))}

        

            </div>
          </section>

          <div className="  pt-5 col-span-3 bg-white flex justify-center overflow-y-auto h-screen" style={{scrollbarWidth:'none'}}>
            {/**Card container */}
            <div className="flex   flex-col gap-4">
              {cacheCardDetails.map((card, index) => (
                <div
                  key={index}
                  onClick={()=>{handleItemSelected(index)}}
                  className="min:fh-200   fw-160 bg-white shadow p-5 border border-gray-200 rounded-2xl"
                >
                  
                  <div className=" flex  gap-3 justify-center ">

                <GrApps className="mt-1" color="#2E0B80" size={30} />

                    <div className="">
                      <h2 className="text-[24px]  text-[#4C1D60] ">{card.name}</h2>
                      <p className="fh-2 mt-2 fw-140 bg-[#D3D3D3]" />

                      <div className="flex  place-items-center ">
                        <div className="flex gap-2">
                          {Array(card.rating)
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
                      <p className="text-[14px] w-70 text-elipsis">{card.description}</p>
            
                    </div>

                    <button className="  fh-40 mt-2 ms-20 bg-[#800020] text-white text-[14px] px-4 rounded ">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className=" bg-white    p-5   overflow-y-auto h-300 col-span-2" style={{scrollbarWidth:'none'}}>
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

              <div className="flex flex-wrap gap-10 mt-3">
                <div className="fw-50 flex flex-col  text-[14px] font-light">
                  <p>{cardDetails[selectedData].name}</p>
                </div>
                
                <div className="flex gap-2 fh-30 ">
                  {Array(cardDetails[selectedData].rating)
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

                
              </div>

              <div className="mt-4 flex justify-evenly pe-3">
                <p className="text-[14px] ">
                 {cardDetails[selectedData].description}
                </p>
           
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
                  Download
                </button>

                <button className="bg-[#800020] fh-50 w-full rounded mt-3 text-white">
                Contact
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
