import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Lightbox = ({ src, onClose }: { src: string; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#391452]/90 backdrop-blur-xl p-4 md:p-20 cursor-zoom-out"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors z-[110]"
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Expanded Image Container */}
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative w-full h-full max-w-6xl overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()} 
          >
            <Image
              src={src}
              alt="Lightbox View"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
