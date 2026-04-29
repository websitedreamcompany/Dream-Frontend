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

  return (
    <div className={`${itim.className} embla  `}>
      <div className="embla__viewport h-fit" ref={emblaRef}>
        <div className="embla__container h-full">
          {data
            .slice(0, 400)
            .map(
              (item: {
                id: string;
                alt_description: string;
                urls: { regular: string };
              }) => (
                <div
                  onClick={() =>
                    handleOnItemSelected({ img: item.urls.regular })
                  }
                  key={item.id}
                  className="relative  embla__slide_product_view   rounded-2xl  h-[calc(290*var(--spacing-fw))]  md:h-[calc(135*var(--spacing-fw))] m-1  "
                >
                  <div onClick={()=>{
                    scrollTo(selectedIndex-1)
                  }} className="absolute bg-[rgba(0,0,0,0.3)]  top-[50%] z-100">
                    
                            <div className="fh-48 fw-15 relative ">
                                               <Image
                                                 alt="Real estate"
                                                 src={"/left_arrow.svg"}
                                                 fill
                                                 className=" p-1 rounded object-cover"
                                               />
                                             </div>


                  </div>

                     <div onClick={()=>{
                    scrollTo(selectedIndex+1)
                  }} className="absolute bg-[rgba(0,0,0,0.3)]  top-[50%] right-0 z-100">
                    
                            <div className="fh-48 fw-15 relative ">
                                               <Image
                                                 alt="Real estate"
                                                 src={"/right_arrow.svg"}
                                                 fill
                                                 className=" p-1 rounded object-cover"
                                               />
                                             </div>


                  </div>


                   <div  className="absolute bg-[rgba(0,0,0,0.3)]   right-[1%] bottom-[1%]  z-100 flex p-2 rounded">
                    
                            <div className="fh-35 fw-10 relative ">
                                               <Image
                                                 alt="Real estate"
                                                 src={"/camera.svg"}
                                                 fill
                                                 className=" p-1 rounded object-cover"
                                               />
                                             </div>

                                             <p className="font-bold text-white">{selectedIndex+1}/{data.length}</p>


                  </div>
                  <Image
                    src={item.urls.regular}
                    alt={item.alt_description || "project_menu"}
                    fill
                    sizes="100%"
                    className="object-cover rounded-2xl  object-center aspect-video "
                  />
                </div>
              ),
            )}
        </div>
      </div>

    
    </div>
  );
};

export default ImageSlider;
