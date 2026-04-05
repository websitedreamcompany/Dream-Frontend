import ResponsivePageSwap from "@/utils/ResponsivePage";
import ShopProductDisplayDesktop from "./pages/ShopProductDisplayDesktop";
import ShopProductDisplayMobile from "./pages/ShopProductDisplayMobile";

const ProductDisplay = () => {
  return (
    <div className="bg-[#E8E8E8]">
      <ResponsivePageSwap
        mobile={<ShopProductDisplayMobile/>}
        desktop={<ShopProductDisplayDesktop />}
        pad={<div className="text-white">Shops Pad</div>}
        type="shop"
      />
    </div>
  );
};

export default ProductDisplay;
