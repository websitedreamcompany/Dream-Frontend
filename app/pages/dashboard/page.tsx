'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiGrid, FiPackage, FiHardDrive, FiSettings, FiBarChart2 } from 'react-icons/fi';

const UnifiedDashboard = () => {
  return (
    <div className="flex h-screen bg-[#F8F9FA] overflow-hidden font-sans">
      
      {/* 1. GLOBAL SIDEBAR (Fixed Width) */}
      <aside className="w-20 lg:w-64 bg-[#391452] flex flex-col items-center lg:items-start py-8 px-4 transition-all">
        <div className="mb-12 px-2">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-black text-[#391452]">D</div>
        </div>

        <nav className="flex-1 space-y-2 w-full">
          {[
            { label: 'Overview', icon: <FiGrid /> },
            { label: 'My Projects', icon: <FiBarChart2 /> },
            { label: 'App Portal', icon: <FiHardDrive /> },
            { label: 'Shop Manager', icon: <FiPackage /> },
          ].map((item, i) => (
            <button key={i} className="flex items-center gap-4 w-full p-3 rounded-xl text-white/60 hover:bg-white/10 hover:text-white transition-all group">
              <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
              <span className="hidden lg:block text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <button className="p-3 text-white/40 hover:text-white"><FiSettings size={24} /></button>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 overflow-y-auto p-8 lg:p-12">
        
        {/* TOP HEADER */}
        <header className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-3xl font-black text-[#19002f]">Control Center</h1>
            <p className="text-slate-400 font-medium">Manage your global ecosystem assets.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="text-right hidden md:block">
                <p className="font-bold text-[#391452]">Agwu Joe</p>
                <p className="text-xs text-slate-400">Project Architect</p>
             </div>
             <div className="w-12 h-12 rounded-2xl bg-[#391452] border-4 border-white shadow-xl" />
          </div>
        </header>

        {/* 3. QUICK ACTION BENTO GRID (The 'Publish' Zone) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Action: Post Project */}
          <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between h-64 group cursor-pointer">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <FiPlus size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Post Project</h3>
              <p className="text-sm text-slate-400">Launch a new building construction contract.</p>
            </div>
          </motion.div>

          {/* Action: Publish App */}
          <motion.div whileHover={{ y: -5 }} className="bg-[#2c0140] p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-between h-64 group cursor-pointer">
            <div className="w-12 h-12 bg-white/10 text-white rounded-2xl flex items-center justify-center group-hover:bg-[#ff0000] transition-all">
              <FiPlus size={24} />
            </div>
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">Publish App</h3>
              <p className="text-sm text-white/50">Upload industry tools to the developer portal.</p>
            </div>
          </motion.div>

          {/* Action: Upload Product */}
          <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between h-64 group cursor-pointer">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
              <FiPlus size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">List Product</h3>
              <p className="text-sm text-slate-400">Add new items to the global marketplace.</p>
            </div>
          </motion.div>
        </div>

        {/* 4. ACTIVITY & ANALYTICS SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Recent Activity Table */}
          <div className="lg:col-span-8 bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
            <h4 className="text-lg font-bold mb-8">Recent Operations</h4>
            <div className="space-y-6">
              {[
                { name: 'Skyline Tower B4', type: 'Construction', status: 'Pending Approval', color: 'emerald' },
                { name: 'EcoMap Mobile v2.0', type: 'Application', status: 'Live', color: 'blue' },
                { name: 'Heavy Duty Excavator', type: 'Marketplace', status: 'Sold', color: 'red' },
              ].map((job, i) => (
                <div key={i} className="flex items-center justify-between group">
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100" />
                    <div>
                      <p className="font-bold text-slate-800 text-sm">{job.name}</p>
                      <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">{job.type}</p>
                    </div>
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-${job.color}-50 text-${job.color}-700`}>
                    {job.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats Column */}
          <div className="lg:col-span-4 space-y-6">
             <div className="bg-[#ff0000] p-8 rounded-[2.5rem] text-white shadow-lg shadow-red-900/20">
                <p className="text-xs font-bold uppercase tracking-widest opacity-60">Total Revenue</p>
                <p className="text-3xl font-black mt-2">$42,900.00</p>
                <div className="mt-4 h-1 bg-white/20 rounded-full">
                  <div className="w-[70%] h-full bg-white rounded-full" />
                </div>
             </div>
             
             <div className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Downloads</p>
                <p className="text-3xl font-black text-[#391452] mt-2">1,204</p>
             </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default UnifiedDashboard;
