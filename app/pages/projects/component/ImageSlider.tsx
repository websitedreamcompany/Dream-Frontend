"use client";

import Image from "next/image";
import Link from "next/link";
import { Inter, Itim } from "next/font/google";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { SetStateAction, useCallback, useEffect, useState } from "react";


const itim = Itim({
  weight:'400'
})
const ImageSlider = ({
  data,
  onItemSelected,
}: {
  data: [];
  onItemSelected: (item: unknown) => void;




}) => {


    

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // 2. Handle dot navigation click
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  // 3. Update state when the carousel scrolls
  const onSelect = useCallback(
    (emblaApi: { selectedScrollSnap: () => SetStateAction<number> }) => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    },
    [],
  );

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.plugins().autoplay.stop();
  }, [emblaApi]);

  const handleOnItemSelected = (item: unknown) => {
    if (!emblaApi) return;
    emblaApi.plugins().autoplay?.play();
    onItemSelected(item);
  };

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
   <div className={`${itim.className} relative group bg-black rounded-3xl overflow-hidden shadow-2xl`}>
      {/* 1. VIEWPORT */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {data.slice(0, 20).map((item) => (
            <div
              key={(item as { id?: string }).id}
              onClick={() => handleOnItemSelected({ img: (item as { urls?: { regular?: string } })?.urls?.regular })}
              className="relative flex-[0_0_100%] min-w-0 aspect-video cursor-pointer"
            >
              <Image
                src={(item as { urls?: { regular?: string } })?.urls?.regular || "/"}
                alt={(item as { alt_description?: string }).alt_description || "Gallery Image"}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 2. OVERLAY CONTROLS (Global for the Slider) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-4">
        {/* Left Arrow */}
        <button
          onClick={(e) => { e.stopPropagation(); scrollPrev(); }}
          className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:bg-white/40 transition-all active:scale-90"
        >
          <div className="w-5 h-5 relative">
            <Image src="/left_arrow.svg" alt="prev" fill className="invert" />
          </div>
        </button>

        {/* Right Arrow */}
        <button
          onClick={(e) => { e.stopPropagation(); scrollNext(); }}
          className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:bg-white/40 transition-all active:scale-90"
        >
          <div className="w-5 h-5 relative">
            <Image src="/right_arrow.svg" alt="next" fill className="invert" />
          </div>
        </button>
      </div>

      {/* 3. IMAGE COUNTER (Bottom Right) */}
      <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-2xl flex items-center gap-2">
        <div className="w-4 h-4 relative">
          <Image src="/camera.svg" alt="photos" fill className="opacity-80" />
        </div>
        <p className="text-white font-bold text-sm tracking-widest">
          {selectedIndex + 1} <span className="opacity-40">/</span> {data.length}
        </p>
      </div>
      
      {/* Subtle Bottom Gradient for text readability */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </div>
  );
};

export default ImageSlider;
