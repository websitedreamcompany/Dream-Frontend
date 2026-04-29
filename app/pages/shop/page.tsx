import ResponsivePageSwap from "@/utils/ResponsivePage";
import ShopDesktop from "./pages/ShopDesktop";
import ShopMobile from "./pages/ShopMobile";
import { Suspense } from "react";

const ShopsPage = () => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <div className="bg-[#E8E8E8]">
      <ResponsivePageSwap
        mobile={<ShopMobile />}
        desktop={<ShopDesktop />}
        pad={<div className="text-white">Shops Pad</div>}
        type="shop"
      />
    </div>
    </Suspense>
  );
};

export default ShopsPage;
