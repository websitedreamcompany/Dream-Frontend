import ResponsivePageSwap from "@/utils/ResponsivePage";
import ShopDesktop from "./pages/ShopDesktop";
import ShopMobile from "./pages/ShopMobile";

const ShopsPage = () => {
  return (
    <div className="bg-[#E8E8E8]">
      <ResponsivePageSwap
        mobile={<ShopMobile />}
        desktop={<ShopDesktop />}
        pad={<div className="text-white">Shops Pad</div>}
        type="shop"
      />
    </div>
  );
};

export default ShopsPage;
