import { Itim } from "next/font/google";

const itim = Itim({ subsets: ["latin"], weight: "400" });

const CarsCatSectionBar = () => {
  return (
    <div className="w-full shadow-f-cardM bg-white h-full p-3 overflow-y-auto text-[14px]" style={{scrollbarWidth:'none'}}>
      <p className={`${itim.className} p-2 font-extra-bold text-[18px]`}>Category</p>

      <div className="">
        <p className="hover:underline cursor-pointer text-[16px]">All categories</p>
      </div>

      <div className="">
        <p className="hover:underline cursor-pointer ">Cars</p>
      </div>

      <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-3" />

      <div>
        <p className="font-bold mt-2 mb-2 text-[14px]">Brand</p>

        <div>
          {[
            "4-Runner",
            "Alphard",
            "Auris",
            "Auris Touring Sports",
            "Avensis",
            "Avensis Verso",
            "Aygo",
            "bZ4X",
            "Camry",
            "Carina",
            "Celica",
            "C-HR  (329)",
            "Corolla  (820)",
            "Corolla Cross  (7)",
            "Corolla Verso  (235)",
            "Crown  (10)",
            "FJ  (8)",
            "GR86  (11)",
            "GT86  (47)",
            "Hiace  (36)",
            "Highlander  (16)",
          ].map((data, index) => (
            <div key={index} className="flex gap-2">
              <p>{data}</p>
            </div>
          ))}
        </div>
      </div>

      <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-3" />

      <div></div>

      <div>
        <p className="font-bold text-[14px] mb-2">Mileage</p>

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

        <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-5" />
      </div>

      <div>
        <p className="font-bold mt-3 text-[14px]">Vehicle type</p>

        <div>
          {["DamagedVehicle", "Undamaged vehicle"].map((data, index) => (
            <p key={index}>{data}</p>
          ))}
        </div>
      </div>

      <div className="mt-3">
        <p className="font-bold">Years of registration</p>

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
        <p className="font-bold">Fuel type</p>

        <div>
          {[
            "Petrol",
            "Disel",
            "Autogas (LPG)",
            "Hybrid",
            "Electric",
            "Other fuel types",
          ].map((data, index) => (
            <p key={index}>{data} (45,90)</p>
          ))}
        </div>

        <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-3" />
      </div>

      <div>
        <p className="font-bold">Performance</p>

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

      <div className="mt-5">
        <p className="font-bold">Transmission</p>

        <div>
          {["Automatic", "Manual"].map((data, index) => (
            <p key={index}>
              {data} {"(29,0377)"}
            </p>
          ))}

          <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-3" />
        </div>
      </div>

      <div>
        <p className="font-bold mb-2">Vehicle Type</p>

        <div>
          {[
            "Small cars  (3,456)",
            "Limousine  (1,943)",
            "Estate  (1,114)",
            "Convertible  (97)",
            "SUVs/Off-road vehicles  (1,506)",
            "Van/Bus  (966)",
            "Coupé  (257)",
            "Other vehicle types  (176)",
          ].map((data, index) => (
            <div key={index} className="flex gap-2">
              <p>{data}</p>
            </div>
          ))}
        </div>

        <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-3" />
      </div>

      <div>
        <p className="font-bold mt-2 mb-2">Number of doors</p>

        <div>
          {[
            "2/3  (1,709)",
            "4/5  (7,920)",
            "6/7  (16)",
            "Other number of doors  (4)",
          ].map((data, index) => (
            <div key={index} className="flex gap-2">
              <p>{data}</p>
            </div>
          ))}
        </div>

        <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-5" />
      </div>

      <div>
        <p className="font-bold mt-2">HU at least valid</p>

        <div className="flex place-items-center gap-3 ">
          <input
            placeholder="any"
            className="border-[0.1px] p-2 rounded-2xl w-40 mt-2"
          />
        </div>

        <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-5" />
      </div>

      <div className="mt-5">
        <p className="font-bold">Environmental badge</p>

        <div>
          {[
            " 4 (Green)  (8,214)",
            "3 (Yellow)  (33)",
            "2 (Red)  (10)",
            "1 (None)  (128)",
          ].map((data, index) => (
            <p key={index}>
              {data} {"(29,0377)"}
            </p>
          ))}

          <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-3" />
        </div>
      </div>

      <div className="mt-5">
        <p className="font-bold">Emission Class</p>

        <div>
          {[
            "Euro1  (49)",
            "Euro2  (79)",
            "Euro3  (342)",
            "Euro4  (2,315)",
            "Euro5  (1,680)",
            "Euro6  (2,257)",
          ].map((data, index) => (
            <p key={index}>{data} </p>
          ))}

          <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-3" />
        </div>
      </div>

      <div className="mt-5">
        <p className="font-bold">Interior material</p>

        <div>
          {[
            "Full leather  (822)",
            "Part leather  (514)",
            "Fabric  (6,525)",
            "Velour  (186)",
            "Alcantara  (187)",
            "Other materials Interior fittings  (203)",
          ].map((data, index) => (
            <p key={index}>{data} </p>
          ))}

          <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-3" />
        </div>
      </div>

      <div className="mt-5">
        <p className="font-bold">Exterior Paint</p>

        <div>
          {[
            "Beige  (114)",
            "Blue  (862)",
            "Brown  (176)",
            "Yellow  (49)",
            "Gold  (49)",
            "Grey  (1,542)",
            "Green  (183)",
            "Orange  (56)",
            "Red  (1,108)",
            "Black  (1,414)",
            "Silver  (1,498)",
            "Violet  (36)",
            "White  (2,119)",
            "Other colors  (63)",
          ].map((data, index) => (
            <p key={index}>{data} </p>
          ))}

          <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-3" />
        </div>
      </div>

      <div>
        <p className="font-bold">Price</p>

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

        <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-5" />
      </div>

      <div className="mt-5">
        <p className="font-bold">Exterior features</p>

        <div>
          {[
            "Towbar",
            "Parking assistance",
            "alloy wheels",
            "Xenon/LED headlights",
          ].map((data, index) => (
            <p key={index}>{data} </p>
          ))}

          <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-3" />
        </div>
      </div>

      <div className="mt-5">
        <p className="font-bold">Exterior features</p>

        <div>
          {[
            "air conditioning",
            "Navigation system",
            "Radio/Tuner",
            "Bluetooth",
            "Hands-free system",
            "Sunroof/Panoramic roof",
            "Heated seats",
            "Cruise control",
            "Non-smoking vehicle",
            "Security",
          ].map((data, index) => (
            <p key={index}>{data} </p>
          ))}

          <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-3" />
        </div>
      </div>

      <div className="mt-5">
        <p className="font-bold">Security</p>

        <div>
          {["  Anti-lock braking system (ABS)", "Full service history"].map(
            (data, index) => (
              <p key={index}>{data} </p>
            ),
          )}

          <div className=" fh-1 w-full bg-[#B2AEAE] mb-1 mt-3" />
        </div>
      </div>

      <div className="mt-5">
        <p className="font-bold">Offer Type</p>

        <div>
          {["Offers  (9,910)", "Applications  (292)"].map((data, index) => (
            <p key={index}>{data} </p>
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

export default CarsCatSectionBar;
