import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  display: "swap",
  weight: "600",
});

const Footer = ({ mode }: { mode: "desktop" | "mobile" | "pad" }) => {
  if (mode == "desktop") {
    return <DesktopMode />;
  } else if (mode == "pad") {
  } else {
    return <MobileMode />;
  }
};

const MobileMode = () => {
  return (
    <div className="h-full w-full bg-[#4A4A4A] place-items-center pt-15 border-t-2 border-white ">
      <div className="relative w-[calc(72*var(--spacing-fw))] h-[calc(72*var(--spacing-fw))] ms-fw-16 ">
        <Image
          src="/logo.svg"
          alt="Dream Eco Logo"
          fill
          className="object-contain"
        />
      </div>

      <div className="w-full justify-center place-items-center mt-5">
        <p className={`${inter.className} fh-150 fw-200 text-white`}>
          Lorem ipsum dolor seturn sat molo dipit torimLorem ipsum dolor seturn
          sat molo dipit torim
        </p>
      </div>

      <div className={`${inter.className} w-full justify-start p-2 text-white`}>
        <p>Quick links</p>

        <div className="grid grid-cols-3 justify-center place-items-center mt-3">
          <div className="w-[80%]  fh-300 justify-center place-content-center flex flex-col gap-[2%] ps-5 ">
            {Array(9)
              .fill(0)
              .map((_, index) => (
                <a href="/*" className="text-white text-fw-10" key={index}>
                  Quick links
                </a>
              ))}
          </div>

          <div className="w-[80%]  fh-300 justify-center place-content-center flex flex-col gap-[2%] ps-5 ">
            {Array(9)
              .fill(0)
              .map((_, index) => (
                <a href="/*" className="text-white text-fw-10" key={index}>
                  Quick links
                </a>
              ))}
          </div>

          <div className="w-[80%]  fh-300 justify-center place-content-center flex flex-col gap-[2%] ps-5 ">
            {Array(9)
              .fill(0)
              .map((_, index) => (
                <a href="/*" className="text-white text-fw-10" key={index}>
                  Quick links
                </a>
              ))}
          </div>
        </div>
      </div>

      <div
        className={`${inter.className} fh-45 mt-5 pt-[1%] justify-center align-middle place-items-center bg-[#3F3B3B] w-full`}
      >
        <p className="text-white">DREAM 2026 all rights reserved</p>
      </div>
    </div>
  );
};

const DesktopMode = () => {
  return (
    <div className=" w-full fh-680  bg-[#4A4A4A]   border-t-2 border-white pt-5 relative ">
      <div className="grid grid-cols-2 p-2">
        <div className="ms-fw-20">
          <div className="relative w-[calc(42*var(--spacing-fw))] h-[calc(42*var(--spacing-fw))]  ">
            <Image
              src="/logo.svg"
              alt="Dream Eco Logo"
              fill
              className="object-contain"
            />
          </div>

          <div className="w-full">
            <p className={`${inter.className} fh-150 fw-100 text-white`}>
              Lorem ipsum dolor seturn sat molo dipit torimLorem ipsum dolor
              seturn sat molo dipit torim
            </p>
          </div>
        </div>

        <div className={`${inter.className}   p-2 text-white`}>
          <p>Quick links</p>

          <div className="grid grid-cols-3   mt-10 text-[14px]">
            <div className="w-[50%]   justify-center place-content-center flex flex-col gap-[2%] ps-5 text-[14px]">
              {Array(9)
                .fill(0)
                .map((_, index) => (
                  <a href="/*" className="text-white text-[14px]" key={index}>
                    Quick links
                  </a>
                ))}
            </div>

            <div className="w-[50%]   justify-center place-content-center flex flex-col gap-[2%] ps-5 ">
              {Array(9)
                .fill(0)
                .map((_, index) => (
                  <a href="/*" className="text-white " key={index}>
                    Quick links
                  </a>
                ))}
            </div>

            <div className="w-[50%]   justify-center place-content-center flex flex-col gap-[2%] ps-5 ">
              {Array(9)
                .fill(0)
                .map((_, index) => (
                  <a href="/*" className="text-white " key={index}>
                    Quick links
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${inter.className} fh-45 mt-5 pt-[1%] absolute bottom-0   justify-center align-middle place-items-center bg-[#3F3B3B] w-full`}
      >
        <p className="text-white">DREAM 2026 all rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
