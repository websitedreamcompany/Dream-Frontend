import ResponsivePageSwap from "@/utils/ResponsivePage";
import Mobile from "./pages/mobile";
import Desktop from "./pages/desktop";

const LandingPage = () => {
  return (
    <ResponsivePageSwap
      type="landing"
      mobile={<Mobile />}
      desktop={<Desktop />}
    />
  );
};

export default LandingPage;
