import { Itim } from "next/font/google";

const itim = Itim({ subsets: ["latin"], weight: "400" });

const HouseCatSectionBar = () => {
  return (
    <div className="w-full shadow-f-cardM bg-white h-full p-3 overflow-y-auto">
      <p className={`${itim.className} p-2 font-extra-bold`}>Category</p>

      <div className="">
        <p className="hover:underline cursor-pointer">All categories</p>
      </div>

      <div className="">
        <p className="hover:underline cursor-pointer">property</p>
      </div>

      <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-3" />

      <div>
        <p className="font-bold">Living Space</p>

        <div className="flex place-items-center gap-3 ">
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

        <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-3" />
      </div>

      <div>
        <p className="font-bold">Room</p>

        <div className="flex place-items-center gap-3 ">
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

        <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-3" />
      </div>

      <div>
        <p className="font-bold">Floor</p>

        <div className="flex place-items-center gap-3 ">
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

        <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-3" />
      </div>

      <div>
        <p>Appartment type</p>

        <div>
          {[
            "Penthouse apartment",
            "Ground floor apartment",
            "Apartment",
            "Raised ground floor",
            "Loft",
            "Maisonette",
            "Penthouse",
            "Basement",
            "Terrace apartment",
            "Other types of housing",
          ].map((data, index) => (
            <p key={index}>{data}</p>
          ))}
        </div>
      </div>

      <div className="mt-3">
        <p className="font-bold">Available From</p>

        <div className="flex place-items-center gap-3 ">
          <input
            placeholder="Month"
            className="border-[0.1px] p-2 rounded-2xl w-20"
          />
          <p>-</p>
          <input
            placeholder="Year"
            className="border-[0.1px] p-2 rounded-2xl w-20"
          />
        </div>

        <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-3" />
      </div>

      <div>
        <p className="font-bold">Online Viewing</p>

        <div>
          {["Posible", "Not possible"].map((data, index) => (
            <p key={index}>{data}</p>
          ))}
        </div>

        <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-3" />
      </div>

      <div className="mt-5">
        <p className="font-bold">Exchange offer</p>

        <div>
          {["Posible", "Not possible"].map((data, index) => (
            <p key={index}>
              {data} {"(29,0377)"}
            </p>
          ))}

          <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-3" />
        </div>
      </div>

      <div>
        <p className="font-bold">Base rent</p>

        <div className="flex place-items-center gap-3 ">
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

        <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-3" />
      </div>

      <div>
        <p className="font-bold mb-2">Appartment furnishing</p>

        <div>
          {[
            "Furnished/Partly furnished",
            "balcony",
            "terrace",
            "fitted kitchen",
            "Bathtub",
            "Guest WC",
            "Step-free access",
            "Underfloor heating",
            "Terrace apartment",
            "Other types of housing",
          ].map((data, index) => (
            <div key={index} className="flex gap-2">
              <input type="checkbox" />
              <p>{data}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="font-bold mt-2 mb-2">General characteristics</p>

        <div>
          {[
            "Old building",
            "New building",
            "Elevator",
            "cellar",
            "Attic",
            "WBS required",
            "Garage/Parking space",
            "Garden/shared use",
            "Pets allowed",
            "Suitable for shared accommodation",
          ].map((data, index) => (
            <div key={index} className="flex gap-2">
              <p>{data}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <p className="font-bold">Offer Type</p>

        <div>
          {["Offers", "Applications"].map((data, index) => (
            <p key={index}>
              {data} {"(29,0377)"}
            </p>
          ))}

          <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-3" />
        </div>
      </div>

      <div className="mt-5">
        <p className="font-bold">Provider</p>

        <div>
          {["private", "Commercial"].map((data, index) => (
            <p key={index}>
              {data} {"(29,0377)"}
            </p>
          ))}

          <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-3" />
        </div>
      </div>

      <div>
        <p className="font-bold mt-2 mb-2">Location</p>

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
              className="flex gap-2 cursor-pointer hover:underline"
            >
              <p>{data}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HouseCatSectionBar;
