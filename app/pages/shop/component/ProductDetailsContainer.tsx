import { Itim } from "next/font/google";
import Image from "next/image";

const itim = Itim({ subsets: ["latin"], weight: "400" });

const ProductDetailsContainer = () => {
  return (
    <section className={`${itim.className} col-span-9 overflow-y-scroll p-3`}>
      <div className="w-full h-full rounded  bg-white grid grid-cols-2">
        <div className="p-3 w-[calc(150*var(--spacing-fw))] col-span-1">
          <div className=" h-[calc(100*var(--spacing-fw))] w-[calc(150*var(--spacing-fw))]   relative">
            <Image
              src="/shop_img_card_3.png"
              alt="filter_icon"
              sizes="auto"
              fill
              className="object-cover "
            />
          </div>

          <div></div>
        </div>

        <div className="  mt-3 relative ms-10 ">
          {/**
             * <div className="flex place-items-center w-full relative">
            <p className=" text-3xl">Sports car</p>

            <div className="flex gap-2 absolute right-[3%]">
                <div className="border  border-[#4A4A4A] fh-23 fw-6 flex justify-center place-items-center" >
                     <p className="fh-12 fw-3 bg-[#4A4A4A]"></p>
                </div>

                 <div className="border  border-[#4A4A4A] fh-23 fw-6 flex justify-center place-items-center" >
                     <p className="fh-12 fw-3 bg-[#4A4A4A]"></p>
                </div>



            </div>
        </div>

        <div className="flex gap-3 mt-5">
            <p>$150</p>

            <p className="text-sm">$200</p>
        </div>


        <div className=" flex place-items-center gap-2 mt-6 ">
            <p className="fh-12 fw-3 bg-[#4A4A4A]"></p>
            <p>In stock</p>
        </div>
        <p className="fh-2 w-full bg-[#D3D3D3]"/>



         <div className=" flex place-items-center gap-2 mt-8 ">
            <p className="fh-12 fw-3 bg-[#4A4A4A]"></p>
            <p>In stock</p>
        </div>
        <p className="fh-2 w-full bg-[#D3D3D3] mt-6"/>
             */}

          <div className="mt-1 flex flex-col gap-3">
            <div className="w-[95%] bg-[rgb(128,0,32)] gap-2 p-2 rounded-2xl text-white place-items-center justify-center flex">
              <div className="fh-10 fw-3 bg-[#B02346] " />
              <p>Nachricht schreiben</p>
            </div>

            <div className="w-[95%] border-[0.2px] border-[#800020] p-2 rounded-2xl text-[#800020] place-items-center justify-center flex gap-2">
              <div className="fh-10 fw-3 bg-[#B02346] " />
              <p>Zur Merkliste hinzufugen</p>
            </div>

            <div className="w-[95%] border-[0.2px] border-[#800020] p-2 rounded-2xl text-[#800020] place-items-center justify-center flex gap-2">
              <div className="fh-10 fw-3 bg-[#B02346] " />
              <p>Anzeige teilen</p>
            </div>

            <div className="w-[95%] mt-3 flex gap-3">
              <div className=" h-[calc(30*var(--spacing-fw))] w-[calc(30*var(--spacing-fw))]   relative">
                <Image
                  src="/shop_img_card_3.png"
                  alt="filter_icon"
                  sizes="auto"
                  fill
                  className="object-cover "
                />
              </div>

              <div className="gap-2 flex flex-col">
                <p>Anzeige teilen</p>

                <div className="w-full border-[0.2px] border-[#800020] p-2 rounded-2xl text-[#800020] place-items-center justify-center flex gap-3">
                  <div className="fh-10 fw-3 bg-[#B02346] " />
                  <p>Anzeige teilen</p>
                </div>

                <div className="mt-5">
                  <p>Deep Fridge</p>
                  <div className="gap-2 flex flex-col">
                    <div className="bg-[#C5C4C4] rounded-2xl justify-center place-items-center flex gap-2">
                      <div className="fh-8 fw-3 bg-[#A99797]"></div>
                      <p>djjd</p>
                    </div>

                    <div className="bg-[#C5C4C4] rounded-2xl justify-center place-items-center flex gap-2">
                      <div className="fh-8 fw-3 bg-[#A99797]"></div>
                      <p>djjd</p>
                    </div>

                    <div className="bg-[#C5C4C4] rounded-2xl justify-center place-items-center flex gap-2">
                      <div className="fh-8 fw-3 bg-[#A99797]"></div>
                      <p>djjd</p>
                    </div>
                  </div>
                </div>

                <div className="gap-2 flex flex-col mt-5">
                  <div className="justify-center place-items-center flex gap-2">
                    <div className="fh-8 fw-3 bg-[#A99797]"></div>
                    <p>djjd</p>
                  </div>

                  <div className="justify-center place-items-center flex gap-2">
                    <div className="fh-8 fw-3 bg-[#A99797]"></div>
                    <p>djjd</p>
                  </div>
                </div>

                <div></div>
              </div>
            </div>
          </div>

          <div className="w-[90%] mt-6 border-[0.2px] border-[#800020] p-2 rounded-2xl text-[#800020] place-items-center justify-center flex gap-3">
            <div className="fh-10 fw-3 bg-[#B02346] " />
            <p>Contact us</p>
          </div>
        </div>

        <div className="p-4">
          <p className="font-bold">
            Opel Corsa 1.2 Twinport wcoFlex Edition 2.4SE
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsContainer;
