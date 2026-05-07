import Image from "next/image";
import { FiPlus, FiSettings } from "react-icons/fi";


const P =  ()=>{
    return <main className="flex-1 overflow-y-auto p-8 lg:p-12">
  <header className="flex justify-between items-end mb-12">
    <div>
      <h1 className="text-3xl font-black text-[#19002f]">Project Manager</h1>
      <p className="text-slate-400 font-medium">Monitoring active construction sites and blueprints.</p>
    </div>
    <button className="bg-[#ff0000] text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-3 shadow-lg shadow-red-900/20 active:scale-95 transition-all">
      <FiPlus /> New Construction Post
    </button>
  </header>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    {/* Active Project Card */}
    {[1, 2].map((i) => (
      <div key={i} className="lg:col-span-3 bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-3 aspect-video relative rounded-3xl overflow-hidden bg-slate-100">
           <Image  alt="Project Image" src="/landing_feature_card_1_img.png" fill className="object-cover" />
        </div>
        <div className="md:col-span-5">
          <h3 className="text-xl font-bold text-slate-900 mb-1">Skyline Tower Phase {i}</h3>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-4">Berlin, DE • Residential</p>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="w-[65%] h-full bg-[#ff0000] rounded-full" />
          </div>
          <p className="text-[10px] font-bold text-slate-500 mt-2">65% Completed • Next Milestone: Framing</p>
        </div>
        <div className="md:col-span-4 flex justify-end gap-3">
          <button className="px-6 py-3 bg-[#391452] text-white rounded-xl font-bold text-xs">Update Site</button>
          <button className="px-4 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all"><FiSettings /></button>
        </div>
      </div>
    ))}
  </div>
</main>

}

export default P;