'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiChevronRight, FiMapPin, FiPackage, FiHardDrive } from 'react-icons/fi';

const ResponsivePublisher = ({ type = "Project" }) => {
  const [step, setStep] = useState(1);
  const steps = ["Scope", "Details", "Assets"];

  return (
    /* h-full for mobile, min-h for desktop to handle scrolling */
    <div className="flex flex-col lg:flex-row min-h-screen lg:h-[700px] bg-white lg:rounded-[3rem] shadow-2xl overflow-hidden font-sans">
      
      {/* 1. PROGRESS HEADER (Mobile) / SIDEBAR (Desktop) */}
      <aside className="w-full lg:w-72 bg-[#391452] p-6 lg:p-12 shrink-0">
        <div className="flex lg:flex-col justify-between lg:justify-start lg:space-y-12 h-full">
          
          {/* Mobile Stepper View: Icons only */}
          {steps.map((label, i) => (
            <div key={i} className="flex flex-col lg:flex-row items-center gap-2 lg:gap-5">
              <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-2xl flex items-center justify-center transition-all ${
                step > i + 1 ? 'bg-emerald-500 text-white' : 
                step === i + 1 ? 'bg-[#ff0000] text-white shadow-lg' : 'bg-white/10 text-white/20'
              }`}>
                {step > i + 1 ? <FiCheck /> : (i === 0 ? <FiMapPin /> : i === 1 ? <FiPackage /> : <FiHardDrive />)}
              </div>
              <div className="hidden lg:block">
                <p className={`text-[10px] uppercase font-black tracking-widest ${step >= i + 1 ? 'text-[#fc8570]' : 'text-white/20'}`}>Step 0{i + 1}</p>
                <p className={`text-sm font-bold ${step >= i + 1 ? 'text-white' : 'text-white/20'}`}>{label}</p>
              </div>
            </div>
          ))}

        </div>
      </aside>

      {/* 2. FORM CONTENT AREA */}
      <main className="flex-1 flex flex-col p-6 lg:p-20 bg-slate-50/50 overflow-y-auto">
        <header className="mb-8 lg:mb-12">
          <h2 className="text-2xl lg:text-4xl font-black text-[#19002f]">
            {step === 1 ? 'Initial Scope' : step === 2 ? 'Technical Details' : 'Final Uploads'}
          </h2>
          <p className="text-sm lg:text-lg text-slate-400 mt-2">Enter your {type.toLowerCase()} information.</p>
        </header>

        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div 
              key={step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              {/* Form Input Group */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Title</label>
                  <input className="w-full p-4 lg:p-5 bg-white border border-slate-200 rounded-2xl outline-none focus:border-[#ff0000] transition-all" placeholder="Enter name..." />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Category</label>
                    <select className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none">
                      <option>Construction</option>
                      <option>Digital App</option>
                      <option>Marketplace Item</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Privacy</label>
                    <div className="flex gap-2">
                      <button className="flex-1 py-4 rounded-2xl border-2 border-red-500 bg-red-50 text-red-600 font-bold text-xs">Public</button>
                      <button className="flex-1 py-4 rounded-2xl border-2 border-slate-200 text-slate-400 font-bold text-xs">Private</button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3. NAVIGATION FOOTER - Mobile optimized */}
        <footer className="mt-8 lg:mt-12 pt-6 lg:pt-10 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <button 
            disabled={step === 1}
            onClick={() => setStep(s => s - 1)}
            className="w-full sm:w-auto px-10 py-3 text-sm font-bold text-slate-400 uppercase tracking-widest disabled:opacity-0"
          >
            Back
          </button>
          
          <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3">
            <button className="w-full sm:w-auto px-10 py-3 text-sm font-bold text-slate-500 uppercase tracking-widest hover:text-red-600">
              Draft
            </button>
            <button 
              onClick={() => setStep(s => Math.min(3, s + 1))}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#ff0000] text-white px-12 py-4 rounded-2xl font-bold shadow-xl shadow-red-900/30 active:scale-95 transition-all"
            >
              {step === 3 ? 'Publish' : 'Next Step'}
              <FiChevronRight />
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
};


export default ResponsivePublisher;