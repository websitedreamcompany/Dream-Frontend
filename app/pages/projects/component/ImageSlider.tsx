"use client";

import Image from "next/image";
import Link from "next/link";
import { Inter, Itim } from "next/font/google";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { SetStateAction, useCallback, useEffect, useState } from "react";

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
    emblaApi.plugins().autoplay?.play();
  }, [emblaApi]);

  const handleOnItemSelected = (item: unknown) => {
    if (!emblaApi) return;
    emblaApi.plugins().autoplay?.play();
    onItemSelected(item);
  };

  return (
    <div className="embla  ">
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
                  className="relative embla__slide  rounded-2xl  h-[calc(70*var(--spacing-fw))]  md:h-[calc(30*var(--spacing-fw))] m-1  "
                >
                  <Image
                    src={item.urls.regular}
                    alt={item.alt_description || "project_menu"}
                    fill
                    sizes="100%"
                    className="object-cover rounded-2xl "
                  />
                </div>
              ),
            )}
        </div>
      </div>

      <div className="embla__dots w-full flex justify-center place-items-center mt-1">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 w-2  m-1 transition-colors ${
              index === selectedIndex
                ? "bg-[#2E0B80]"
                : index === selectedIndex - 1
                  ? "bg-[#9379CF]"
                  : "bg-[#cabfe6ad]"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
