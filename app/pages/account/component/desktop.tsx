
'use client'
import { Inter, Itim } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { GrApps } from "react-icons/gr";
import Footer from "../../../../component/ui/Footer";
import { IoMdSearch } from "react-icons/io";
import { useCallback, useEffect, useState } from "react";
import TopNavigationBar from "@/component/ui/TopNavigationBar";

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
     <TopNavigationBar/>

    <main className="min-h-screen w-full bg-white flex flex-col font-sans">
      
      {/* 1. TOP SEARCH BAR - Centered Logic */}
      <div className="w-full border-b border-gray-100 py-6 px-[5%] flex justify-start">
        <div className="flex items-center w-full max-w-md gap-3 px-4 py-2 border-2 border-[#391452] rounded-2xl group transition-all focus-within:shadow-md">
          <IoMdSearch className="text-gray-400 group-focus-within:text-[#391452]" size={22} />
          <input 
            placeholder="What are you looking for..." 
            className="text-sm outline-none w-full bg-transparent placeholder:text-gray-400" 
          />
        </div>
      </div>

      {/* 2. MAIN HUB - 6 Column Grid */}
      <div className="grid grid-cols-6 flex-1 overflow-hidden">
        
        {/* COLUMN 1: CATEGORIES - Stays Fixed on Scroll */}
        <section className={`${itim.className} col-span-1 border-r border-gray-100 p-6 overflow-y-auto h-[calc(100vh-80px)]`}>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">Categories</p>
          <div className="space-y-2">
            {/* All Category */}
            <div 
              onClick={() => setCategorySelected("All")}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${categorySelected === 'All' ? 'bg-[#2E0B80] text-white shadow-lg' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              <input type="checkbox" checked={categorySelected === "All"} readOnly className="accent-white" />
              <p className="text-sm font-medium">All Apps</p>
            </div>

            {/* Dynamic Categories */}
            {cardDetails.map((item, index) => (
              <div 
                key={index} 
                onClick={() => setCategorySelected(item.name)}
                className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${categorySelected === item.name ? 'bg-[#2E0B80] text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <input type="checkbox" checked={categorySelected === item.name} readOnly className="accent-white" />
                <p className="text-sm font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COLUMN 2: APP LIST - Center Scrollable */}
        <section className="col-span-3 bg-gray-50 p-8 overflow-y-auto h-[calc(100vh-80px)] space-y-6">
          {cacheCardDetails.map((card, index) => (
            <div
              key={index}
              onClick={() => handleItemSelected(index)}
              className="bg-white p-6 border border-gray-200 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group"
            >
              <div className="flex gap-5">
                <div className="p-4 bg-gray-50 rounded-2xl flex items-center justify-center h-fit">
                  <GrApps color="#2E0B80" size={32} className="group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h2 className="text-2xl font-bold text-[#4C1D60]">{card.name}</h2>
                    <div className="flex gap-1">
                      {Array(card.rating).fill(0).map((_, i) => (
                        <Image key={i} src="/application_rating_star_icon.png" alt="star" width={16} height={16} />
                      ))}
                    </div>
                  </div>
                  <div className="h-0.5 w-full bg-gray-100 my-4" />
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{card.description}</p>
                  <div className="flex justify-end mt-4">
                    <button className="bg-[#800020] text-white text-xs font-bold px-6 py-2.5 rounded-lg hover:brightness-110 transition-all uppercase tracking-wider">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* COLUMN 3: APP DETAILS - Right Sidebar */}
        <section className="col-span-2 border-l border-gray-100 p-8 overflow-y-auto h-[calc(100vh-80px)] bg-white">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 border-b border-gray-100 pb-4">App Details</h3>
            
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-gray-100 aspect-video relative">
              <Image src="/application_container_3_bg.png" alt="preview" fill className="object-cover" />
            </div>

            <div className="flex items-center justify-between">
              <h4 className="text-xl font-bold text-[#4C1D60]">{cardDetails[selectedData].name}</h4>
              <div className="flex gap-1">
                {Array(cardDetails[selectedData].rating).fill(0).map((_, i) => (
                  <Image key={i} src="/star_icon.png" alt="star" width={18} height={18} />
                ))}
              </div>
            </div>

            <p className="text-sm leading-relaxed text-gray-600 bg-gray-50 p-5 rounded-2xl italic border border-gray-100">
              "{cardDetails[selectedData].description}"
            </p>

            {/* Feature Highlights */}
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-[#2E0B80]/5 border border-[#2E0B80]/10 items-center">
                  <div className="w-2 h-10 bg-[#2E0B80] rounded-full" />
                  <div className="text-sm text-gray-700">
                    <p className="font-bold">Feature Highlight {i}</p>
                    <p className="text-xs opacity-60">System optimization and control.</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 pt-6">
              <button className="bg-[#4C1D60] text-white py-4 rounded-2xl font-bold shadow-lg shadow-purple-900/20 hover:brightness-110 active:scale-95 transition-all">
                Download Now
              </button>
              <button className="bg-[#800020] text-white py-4 rounded-2xl font-bold hover:brightness-110 active:scale-95 transition-all">
                Contact Support
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
    </div>
  );
};

export default ApplicationDesktop;
