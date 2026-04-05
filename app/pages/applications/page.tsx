import ResponsivePageSwap from "@/utils/ResponsivePage";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import ApplicationDesktop from "./pages/desktop";
import ApplicationPad from "./pages/pad";
import ApplicationMobile from "./pages/mobile";

const inter = Inter({
  display: "swap",
  weight: "600",
});

const ApplicationsPage = () => {
  const cardDetails = [
    {
      name: "Finance App",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4,
    },
    {
      name: "Personnal App",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 5,
    },
    {
      name: "Travel App",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 3,
    },
  ];

  return (
    <ResponsivePageSwap
      mobile={<ApplicationMobile />}
      desktop={<ApplicationDesktop />}
      pad={<ApplicationPad />}
      type="application"
    />
  );
};

export default ApplicationsPage;
