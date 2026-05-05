'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPackage, FiImage, FiDollarSign, FiCheckCircle, FiChevronRight } from 'react-icons/fi';

const ShopPublisher = () => {
  const [step, setStep] = useState(1);
  const [isNegotiable, setIsNegotiable] = useState(false);

  return (
    <div className="flex min-h-[650px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 font-sans">
      
      {/* 1. SHOP STEPPER SIDEBAR */}
      <aside className="w-72 bg-[#391452] p-12 flex flex-col justify-between">
        <div className="space-y-12">
          {[
            { label: 'Item Type', icon: <FiPackage /> },
            { label: 'Inventory', icon: <FiDollarSign /> },
            { label: 'Gallery', icon: <FiImage /> },
            { label: 'Finished', icon: <FiCheckCircle /> }
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-5">
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                step > i + 1 ? 'bg-emerald-500 text-white' : 
                step === i + 1 ? 'bg-[#ff0000] text-white shadow-lg shadow-red-500/40' : 'bg-white/10 text-white/30'
              }`}>
                {step > i + 1 ? <FiCheckCircle /> : s.icon}
              </div>
              <span className={`text-xs font-bold uppercase tracking-[0.2em] ${step >= i + 1 ? 'text-white' : 'text-white/30'}`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
        <div className="bg-white/5 p-5 rounded-3xl border border-white/10">
          <p className="text-[10px] text-white/40 uppercase font-black mb-1">Seller Level</p>
          <p className="text-white text-sm font-bold">Verified Merchant</p>
        </div>
      </aside>

      {/* 2. FORM CONTENT AREA */}
      <main className="flex-1 p-16 flex flex-col">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8 flex-1">
              <header>
                <h2 className="text-3xl font-black text-[#19002f]">Item Basics</h2>
                <p className="text-slate-400 mt-2">Classify your product for the global marketplace.</p>
              </header>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Product Title</label>
                  <input className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-[#ff0000] transition-all" placeholder="E.g. Heavy Duty Excavator Model X" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase ml-1">Category</label>
                    <select className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none appearance-none">
                      <option>Construction Machinery</option>
                      <option>Digital Tools</option>
                      <option>Home & Office</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase ml-1">Condition</label>
                    <div className="flex gap-2">
                      {['New', 'Used', 'Refurbished'].map(opt => (
                        <button key={opt} className="flex-1 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-bold hover:bg-white hover:border-[#ff0000] transition-all">{opt}</button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 flex-1">
              <header>
                <h2 className="text-3xl font-black text-[#19002f]">Pricing & Stock</h2>
              </header>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase ml-1">Base Price (€)</label>
                    <input type="number" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none" placeholder="0.00" />
                  </div>
                  <label className="flex items-center gap-3 cursor-pointer p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <input type="checkbox" checked={isNegotiable} onChange={() => setIsNegotiable(!isNegotiable)} className="w-5 h-5 accent-[#ff0000]" />
                    <span className="text-sm font-bold text-slate-700">Open to negotiations</span>
                  </label>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Available Quantity</label>
                  <input type="number" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none" placeholder="1" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3. NAVIGATION FOOTER */}
        <footer className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center">
          <button 
            disabled={step === 1}
            onClick={() => setStep(step - 1)}
            className="px-8 py-3 text-sm font-bold text-slate-400 hover:text-[#391452] disabled:opacity-0 transition-all"
          >
            Previous
          </button>
          <div className="flex gap-4">
            <button className="px-8 py-3 text-sm font-bold text-slate-400 hover:text-red-600 transition-all">
              Save Draft
            </button>
            <button 
              onClick={() => setStep(step < 4 ? step + 1 : 4)}
              className="flex items-center gap-3 bg-[#ff0000] text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-red-900/20 hover:bg-[#d40000] active:scale-95 transition-all"
            >
              {step === 4 ? 'List Product' : 'Next Step'}
              <FiChevronRight />
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ShopPublisher;
