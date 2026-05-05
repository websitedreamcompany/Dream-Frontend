import React from 'react';
import { motion } from 'framer-motion';
import { FiUploadCloud, FiDownload, FiActivity, FiGlobe, FiCode, FiArrowUpRight } from 'react-icons/fi';

const AppPortal = () => {
  return (
    <div className="flex h-screen bg-[#F8F9FA] overflow-hidden font-sans">
      
      {/* 1. GLOBAL SIDEBAR (Shared with Unified Dashboard) */}
      <aside className="w-20 lg:w-64 bg-[#391452] flex flex-col items-center lg:items-start py-8 px-4">
        <div className="mb-12 px-2">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-black text-[#391452]">D</div>
        </div>
        <nav className="flex-1 space-y-2 w-full">
            {/* ... items from Unified Dashboard ... */}
        </nav>
      </aside>

      {/* 2. MAIN PORTAL AREA */}
      <main className="flex-1 overflow-y-auto p-8 lg:p-12">
        
        {/* PORTAL HEADER */}
        <header className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-3xl font-black text-[#19002f]">App Portal</h1>
            <p className="text-slate-400 font-medium">Manage software builds and developer keys.</p>
          </div>
          <button className="bg-[#ff0000] text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-3 shadow-lg shadow-red-900/20 active:scale-95 transition-all">
            <FiUploadCloud />
            Upload New Build
          </button>
        </header>

        {/* 3. DEV STATS BENTO */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {/* Main Chart Card */}
          <div className="md:col-span-2 bg-[#2c0140] rounded-[2.5rem] p-8 text-white flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest opacity-50">Monthly Active Users</p>
                <p className="text-4xl font-black mt-2">12.8k</p>
              </div>
              <div className="p-3 bg-white/10 rounded-xl"><FiActivity /></div>
            </div>
            <div className="mt-8 h-20 flex items-end gap-1">
              {[40, 70, 45, 90, 65, 80, 95].map((h, i) => (
                <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-[#ff0000] rounded-t-sm opacity-80" />
              ))}
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between">
            <FiDownload className="text-blue-600" size={24} />
            <div>
              <p className="text-3xl font-black text-[#19002f]">4.2k</p>
              <p className="text-xs font-bold text-slate-400 uppercase">Total Downloads</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between">
            <FiGlobe className="text-emerald-600" size={24} />
            <div>
              <p className="text-3xl font-black text-[#19002f]">102</p>
              <p className="text-xs font-bold text-slate-400 uppercase">Global Regions</p>
            </div>
          </div>
        </div>

        {/* 4. RECENT BUILDS LIST */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-8">
            <h4 className="text-lg font-bold">Latest App Deployments</h4>
            <FiCode className="text-slate-300" />
          </div>

          <div className="space-y-4">
            {[
              { name: 'EcoMap Pro', version: 'v2.4.1', date: '2 hours ago', status: 'Production' },
              { name: 'Site-Link API', version: 'v1.0.8', date: 'Yesterday', status: 'Staging' },
              { name: 'Dream Shop Mobile', version: 'v3.0.0-beta', date: 'Oct 24, 2025', status: 'Private' },
            ].map((app, i) => (
              <div key={i} className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-3xl border border-transparent hover:border-slate-100 transition-all cursor-pointer group">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-[#2c0140] rounded-2xl flex items-center justify-center text-white font-bold">
                    {app.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{app.name} <span className="text-xs font-medium text-slate-400 ml-2">{app.version}</span></p>
                    <p className="text-xs text-slate-400 mt-1">Uploaded {app.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${app.status === 'Production' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                    {app.status}
                  </span>
                  <FiArrowUpRight className="text-slate-300 group-hover:text-[#ff0000] transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
};

export default AppPortal;
