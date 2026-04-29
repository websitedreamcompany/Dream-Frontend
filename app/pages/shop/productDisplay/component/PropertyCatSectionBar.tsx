import { Itim } from "next/font/google";

const itim = Itim({ subsets: ["latin"], weight: "400" });

const PropertyCatSectionBar = () => {
  return (
    <div className="w-full shadow-f-cardM bg-white h-full p-3 overflow-y-auto rounded text-[14px]">
      <p className={`${itim.className} p-2 font-extra-bold text-[18px]`}>Category</p>

      <div className="">
        <p className="hover:underline cursor-pointer text-[16px]">All categories ggg</p>
      </div>

      <div className="">
        <p className="hover:underline cursor-pointer ">Property</p>
      </div>

    


      <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-3" />

      <div></div>

      <div className="">
        <p className="font-bold text-[16px]">Living space</p>

        <div className="flex place-items-center gap-3 mt-3 ">
          <input
            placeholder="any"
            className="border-[0.1px] p-2 rounded-2xl w-20"
          />
          <p>-</p>
          <input
            placeholder="any"
            className="border-[0.1px] p-2 rounded-2xl w-20"
          />
        </div>

        <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-5" />
      </div>


{/**Room */}
      <div className="">
        <p className="font-bold text-[16px]">Room</p>

        <div className="flex place-items-center gap-3 mt-3 ">
          <input
            placeholder="any"
            className="border-[0.1px] p-2 rounded-2xl w-20"
          />
          <p>-</p>
          <input
            placeholder="any"
            className="border-[0.1px] p-2 rounded-2xl w-20"
          />
        </div>

        <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-5" />
      </div>


   <div className="">
        <p className="font-bold text-[16px]">Year of construction</p>

        <div className="flex place-items-center gap-3 mt-3 ">
          <input
            placeholder="any"
            className="border-[0.1px] p-2 rounded-2xl w-20"
          />
          <p>-</p>
          <input
            placeholder="any"
            className="border-[0.1px] p-2 rounded-2xl w-20"
          />
        </div>

        <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-5" />
      </div>  
   
   


   <div className="">
        <p className="font-bold text-[16px]">Available from </p>

        <div className="flex place-items-center gap-3 mt-3 ">
          <input
            placeholder="Month"
            className="border-[0.1px] p-2 rounded-2xl w-20"
          />
          <p>/</p>
          <input
            placeholder="Year"
            className="border-[0.1px] p-2 rounded-2xl w-20"
          />
        </div>

        <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-5" />
      </div>  
   


     

      <div className="">
        <p className="font-bold text-[16px]">Price</p>

        <div className="flex place-items-center gap-3 text-[12px] ">
          <input
            placeholder="from"
            className="border-[0.1px] p-2 rounded-2xl w-20"
          />
          <p>-</p>
          <input
            placeholder="until"
            className="border-[0.1px] p-2 rounded-2xl w-20"
          />
        </div>

        <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-5" />
      </div>

     

      <div className="mt-5 ">
        <p className="font-bold text-[16px]">Provider</p>

        <div>
          {["private", "Commercial"].map((data, index) => (
            <p key={index}>
              {data} {"(29,0377)"}
            </p>
          ))}

          <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-3" />
        </div>
      </div>

      <div className="">
        <p className="font-bold mt-2 mb-2 text-[16px]">Location</p>

        <div>
          {[
            "Baden-Württemberg",
            "Bavaria",
            "Berlin",
            "Brandenburg",
            "Bremen",
            "Hamburg",
            "Hesse",
            "Mecklenburg-Western Pomerania",
            "Lower Saxony",
            "North Rhine-Westphalia",
            "Rhineland-Palatinate",
            "Saarland",
            "Saxony",
            "Saxony-Anhalt",
            "Schleswig-Holstein",
            "Thuringia",
          ].map((data, index) => (
            <div
              key={index}
              className="flex gap-10 cursor-pointer hover:underline"
            >
              <p>{data}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyCatSectionBar
