import { Itim } from "next/font/google";
import Image from "next/image";

const itim = Itim({ subsets: ["latin"], weight: "400" });

const ProductDetailsContainer = () => {
  return (
   <section className={`${itim.className} col-span-12 lg:col-span-9 p-6 bg-slate-50 min-h-screen`}>
      <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden grid grid-cols-1 md:grid-cols-12">
        
        {/* LEFT COLUMN: Visuals */}
        <div className="md:col-span-5 bg-slate-50 p-8 flex flex-col gap-6">
          <div className="relative aspect-square w-full rounded-[2rem] overflow-hidden shadow-lg bg-white group">
            <Image
              src="/shop_img_card_3.png"
              alt="product_view"
              fill
              className="object-contain p-4 group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          
          {/* Gallery Thumbnails */}
          <div className="grid grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-white rounded-xl border border-slate-200 cursor-pointer hover:border-[#800020] transition-colors" />
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Details & Actions */}
        <div className="md:col-span-7 p-8 md:p-12 flex flex-col h-full">
          {/* Product Status */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-[#800020] text-xs font-bold uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-[#800020] animate-pulse" />
              In Stock & Ready for Delivery
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Opel Corsa 1.2 Twinport ecoFlex Edition
            </h1>
          </div>

          {/* Pricing Section */}
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-4xl font-black text-[#800020]">$150.00</span>
            <span className="text-lg text-slate-400 line-through">$200.00</span>
          </div>

          {/* Action Buttons Group */}
          <div className="space-y-4 mb-10">
            {/* Primary Action */}
            <button className="w-full bg-[#800020] hover:bg-[#600018] text-white py-4 rounded-2xl font-bold shadow-lg shadow-red-900/20 flex items-center justify-center gap-3 transition-all active:scale-95">
              <div className="w-1.5 h-4 bg-white/30 rounded-full" />
              Send a Message
            </button>
            
            {/* Secondary Actions */}
            <div className="grid grid-cols-2 gap-4">
              <button className="border-2 border-[#800020] text-[#800020] py-3 rounded-2xl font-bold hover:bg-red-50 flex items-center justify-center gap-2 transition-all">
                Add to Watchlist
              </button>
              <button className="border-2 border-[#800020] text-[#800020] py-3 rounded-2xl font-bold hover:bg-red-50 flex items-center justify-center gap-2 transition-all">
                Share This Ad
              </button>
            </div>
          </div>

          {/* Seller Profile Module */}
          <div className="mt-auto bg-slate-50 rounded-3xl p-6 border border-slate-100 flex items-center gap-6">
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 shadow-md">
               <Image src="/shop_img_card_3.png" alt="seller" fill className="object-cover" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-1">Verified Seller</p>
              <p className="font-bold text-slate-800 text-lg">Deep Fridge Marketplace</p>
              <div className="flex gap-1 mt-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div key={s} className="w-2 h-2 bg-[#800020] rounded-full opacity-30" />
                ))}
              </div>
            </div>
            <button className="bg-white border border-slate-200 p-2 rounded-xl hover:shadow-md transition-shadow">
               <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
               </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Support Action */}
      <div className="max-w-6xl mx-auto mt-8 flex justify-center">
        <button className="group flex items-center gap-4 text-slate-400 hover:text-[#800020] transition-colors">
          <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-[#800020]">
             <span className="font-bold text-xl">?</span>
          </div>
          <span className="font-bold uppercase text-xs tracking-[0.2em]">Contact us for help</span>
        </button>
      </div>
    </section>
  );
};

export default ProductDetailsContainer;
