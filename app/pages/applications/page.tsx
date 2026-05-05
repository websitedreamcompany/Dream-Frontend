
'use client'
import { Inter, Itim } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { GrApps } from "react-icons/gr";

import { IoMdSearch } from "react-icons/io";
import { useCallback, useEffect, useState } from "react";
import TopNavigationBar from "@/component/ui/TopNavigationBar";
import Footer from "@/component/ui/Footer";

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
    <div className={`${itim.className} w-full h-screen overflow-y-auto items-center justify-center`}>
      {/**Top nav bar */}
     <TopNavigationBar/>

     <main className="min-h-screen w-full bg-white flex flex-col font-sans">
      
      {/* 1. SEARCH BAR - Responsive Width */}
      <header className="w-full border-b border-gray-100 py-4 px-6 flex justify-center lg:justify-start">
        <div className="flex items-center w-full max-w-lg gap-3 px-4 py-2 border-2 border-[#391452] rounded-2xl">
          <IoMdSearch className="text-gray-400" size={22} />
          <input 
            placeholder="Search apps..." 
            className="text-sm outline-none w-full bg-transparent" 
          />
        </div>
      </header>

      {/* 2. MAIN HUB GRID - Responsive Columns */}
      {/* Mobile: 1 column | Desktop: 6 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-6 flex-1 overflow-y-auto lg:overflow-hidden">
        
        {/* SIDEBAR: Categories */}
        {/* On mobile, this will scroll horizontally at the top */}
        <section className="col-span-1 border-b lg:border-b-0 lg:border-r border-gray-100 p-4 lg:p-6 bg-white overflow-x-auto lg:overflow-y-auto lg:h-[calc(100vh-80px)]">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 hidden lg:block">Categories</p>
          <div className="flex lg:flex-col gap-2">
            <button 
              onClick={() => setCategorySelected("All")}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-medium transition-all ${categorySelected === 'All' ? 'bg-[#2E0B80] text-white' : 'bg-gray-50 lg:bg-transparent text-gray-600'}`}
            >
              All Apps
            </button>
            {cardDetails.map((item, index) => (
              <button 
                key={index} 
                onClick={() => setCategorySelected(item.name)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-medium transition-all ${categorySelected === item.name ? 'bg-[#2E0B80] text-white' : 'bg-gray-50 lg:bg-transparent text-gray-600'}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </section>

        {/* APP LIST: Center Content */}
        <section className="col-span-1 lg:col-span-3 bg-gray-50 p-6 lg:p-8 lg:overflow-y-auto lg:h-[calc(100vh-80px)] space-y-4">
          {cacheCardDetails.map((card, index) => (
            <div
              key={index}
              onClick={() => handleItemSelected(index)}
              className="bg-white p-5 border border-gray-200 rounded-3xl shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col md:flex-row gap-4"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shrink-0">
                <GrApps color="#2E0B80" size={24} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-bold text-[#4C1D60]">{card.name}</h2>
                  <div className="flex gap-0.5">
                    {Array(card.rating).fill(0).map((_, i) => (
                      <Image key={i} src="/application_rating_star_icon.png" alt="star" width={12} height={12} />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 mb-4">{card.description}</p>
                <button className="w-full md:w-auto bg-[#800020] text-white text-[10px] font-bold px-4 py-2 rounded-lg">
                  VIEW DETAILS
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* DETAIL VIEW: Right Sidebar (Hidden on Mobile) */}
        <section className="hidden lg:block lg:col-span-2 border-l border-gray-100 p-8 overflow-y-auto lg:h-[calc(100vh-80px)] bg-white">
          <div className="space-y-6">
            <div className="aspect-video relative rounded-2xl overflow-hidden bg-gray-100 shadow-inner">
               <Image src="/application_container_3_bg.png" alt="preview" fill className="object-cover" />
            </div>
            <h4 className="text-xl font-bold text-[#4C1D60]">{cardDetails[selectedData].name}</h4>
            <p className="text-sm text-gray-600 leading-relaxed italic border-l-4 border-[#2E0B80] pl-4">
              {cardDetails[selectedData].description}
            </p>
            <div className="grid grid-cols-1 gap-2 pt-4">
              <button className="bg-[#4C1D60] text-white py-3 rounded-xl font-bold">Download</button>
              <button className="bg-[#800020] text-white py-3 rounded-xl font-bold">Contact</button>
            </div>
          </div>
        </section>

      </div>
    </main>
    <Footer/>
    </div>
  );
};

export default ApplicationDesktop;
