'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiChevronRight, FiUploadCloud, FiInfo } from 'react-icons/fi';

const MultiStepPublisher = ({ type = 'App' }) => {
  const [step, setStep] = useState(1);
  const steps = ['Identity', 'Details', 'Assets', 'Review'];

  return (
    <div className="flex min-h-[600px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
      
      {/* 1. LEFT PROGRESS BAR (The Stepper) */}
      <aside className="w-64 bg-[#391452] p-10 flex flex-col justify-between">
        <div className="space-y-10">
          {steps.map((label, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                step > i + 1 ? 'bg-emerald-500 border-emerald-500' : 
                step === i + 1 ? 'border-red-500 bg-red-500' : 'border-white/20'
              }`}>
                {step > i + 1 ? <FiCheck className="text-white" /> : <span className="text-xs font-bold text-white">{i + 1}</span>}
              </div>
              <span className={`text-sm font-bold uppercase tracking-widest ${step >= i + 1 ? 'text-white' : 'text-white/30'}`}>
                {label}
              </span>
            </div>
          ))}
        </div>
        <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
          <p className="text-[10px] text-white/50 uppercase font-black mb-2">Publishing as</p>
          <p className="text-white text-sm font-bold">{type} Entity</p>
        </div>
      </aside>

      {/* 2. MAIN FORM AREA */}
      <main className="flex-1 p-12 flex flex-col">
        <header className="mb-12">
          <h2 className="text-3xl font-black text-[#19002f]">Step {step}: {steps[step-1]}</h2>
          <p className="text-slate-400">Please provide the necessary information to list your {type.toLowerCase()}.</p>
        </header>

        <div className="flex-1">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Official Name</label>
                    <input className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-red-500 transition-all" placeholder={`E.g. ${type} Alpha`} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Version / ID</label>
                    <input className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-red-500 transition-all" placeholder="v1.0.0" />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-[2rem] h-64 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group">
                <FiUploadCloud size={48} className="text-slate-300 group-hover:text-red-500 transition-colors mb-4" />
                <p className="font-bold text-slate-900">Drop your assets here</p>
                <p className="text-xs text-slate-400 mt-2">PDF, APK, or JPG (Max 50MB)</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 3. NAVIGATION BUTTONS */}
        <footer className="mt-12 flex justify-between items-center border-t border-slate-100 pt-8">
          <button 
            onClick={() => setStep(s => Math.max(1, s - 1))}
            className={`px-8 py-3 font-bold text-slate-400 hover:text-[#391452] ${step === 1 && 'invisible'}`}
          >
            Back
          </button>
          
          <button 
            onClick={() => setStep(s => Math.min(4, s + 1))}
            className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-red-900/20 active:scale-95 transition-all"
          >
            {step === 4 ? 'Confirm & Publish' : 'Continue'}
            <FiChevronRight />
          </button>
        </footer>
      </main>
    </div>
  );
};

export default MultiStepPublisher;
